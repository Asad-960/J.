from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
import sqlite3
from functools import wraps

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key-change-this'
CORS(app)


def init_db():
    conn = sqlite3.connect('ecommerce.db')
    c = conn.cursor()
    
    # Users table
    c.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    # Products table
    c.execute('''
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            category TEXT NOT NULL,
            price REAL NOT NULL,
            image_url TEXT,
            tags TEXT,
            detail TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    conn.commit()
    conn.close()

init_db()

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    if not email or not password:
        return jsonify({'message': 'Email and password required'}), 400
    
    hashed_password = generate_password_hash(password)
    
    try:
        conn = sqlite3.connect('ecommerce.db')
        c = conn.cursor()
        c.execute('INSERT INTO users (email, password) VALUES (?, ?)', (email, hashed_password))
        conn.commit()
        user_id = c.lastrowid
        conn.close()
        
        return jsonify({'message': 'User created successfully', 'user_id': user_id}), 201
    except sqlite3.IntegrityError:
        return jsonify({'message': 'Email already exists'}), 409

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    if not email or not password:
        return jsonify({'message': 'Email and password required'}), 400
    
    conn = sqlite3.connect('ecommerce.db')
    c = conn.cursor()
    c.execute('SELECT id, password FROM users WHERE email = ?', (email,))
    user = c.fetchone()
    conn.close()
    
    if not user or not check_password_hash(user[1], password):
        return jsonify({'message': 'Invalid credentials'}), 401
    
    # TODO: Implement JWT or session-based authentication here
    
    return jsonify({'message': 'Login successful'}), 200

# ==================== PRODUCT ROUTES ====================

@app.route('/products', methods=['POST'])
def create_product():
    data = request.get_json()
    
    name = data.get('name')
    category = data.get('category')
    price = data.get('price')
    image_url = data.get('image_url', '')
    tags = data.get('tags', '')
    detail = data.get('detail', '')
    
    if not name or not category or price is None:
        return jsonify({'message': 'Name, category, and price are required'}), 400
    
    conn = sqlite3.connect('ecommerce.db')
    c = conn.cursor()
    c.execute('''
        INSERT INTO products (name, category, price, image_url, tags, detail)
        VALUES (?, ?, ?, ?, ?, ?)
    ''', (name, category, price, image_url, tags, detail))
    conn.commit()
    product_id = c.lastrowid
    conn.close()
    
    return jsonify({'message': 'Product created successfully', 'product_id': product_id}), 201

@app.route('/products', methods=['GET'])
def get_products():
    category = request.args.get('category')
    search = request.args.get('search')
    
    conn = sqlite3.connect('ecommerce.db')
    conn.row_factory = sqlite3.Row
    c = conn.cursor()
    
    query = 'SELECT * FROM products WHERE 1=1'
    params = []
    
    if category:
        query += ' AND category = ?'
        params.append(category)
    
    if search:
        query += ' AND (name LIKE ? OR tags LIKE ?)'
        params.extend([f'%{search}%', f'%{search}%'])
    
    c.execute(query, params)
    products = [dict(row) for row in c.fetchall()]
    conn.close()
    
    return jsonify(products), 200

@app.route('/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    conn = sqlite3.connect('ecommerce.db')
    conn.row_factory = sqlite3.Row
    c = conn.cursor()
    c.execute('SELECT * FROM products WHERE id = ?', (product_id,))
    product = c.fetchone()
    conn.close()
    
    if not product:
        return jsonify({'message': 'Product not found'}), 404
    
    return jsonify(dict(product)), 200

@app.route('/products/<int:product_id>', methods=['PUT'])
def update_product(product_id):
    data = request.get_json()
    
    conn = sqlite3.connect('ecommerce.db')
    c = conn.cursor()
    
    # Check if product exists
    c.execute('SELECT id FROM products WHERE id = ?', (product_id,))
    if not c.fetchone():
        conn.close()
        return jsonify({'message': 'Product not found'}), 404
    
    # Build update query dynamically
    updates = []
    params = []
    
    for field in ['name', 'category', 'price', 'image_url', 'tags', 'detail']:
        if field in data:
            updates.append(f'{field} = ?')
            params.append(data[field])
    
    if not updates:
        conn.close()
        return jsonify({'message': 'No fields to update'}), 400
    
    params.append(product_id)
    query = f"UPDATE products SET {', '.join(updates)} WHERE id = ?"
    
    c.execute(query, params)
    conn.commit()
    conn.close()
    
    return jsonify({'message': 'Product updated successfully'}), 200

@app.route('/products/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    conn = sqlite3.connect('ecommerce.db')
    c = conn.cursor()
    c.execute('DELETE FROM products WHERE id = ?', (product_id,))
    
    if c.rowcount == 0:
        conn.close()
        return jsonify({'message': 'Product not found'}), 404
    
    conn.commit()
    conn.close()
    
    return jsonify({'message': 'Product deleted successfully'}), 200


if __name__ == '__main__':
    app.run(debug=True, port=5000)
