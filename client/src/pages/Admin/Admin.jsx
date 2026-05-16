import React, { useState, useEffect } from 'react';
import './Admin.css';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', category: '', price: '', image_url: '', tags: '', detail: '' });
  const [editId, setEditId] = useState(null);

  const API_URL = 'http://localhost:5000/products';

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setProducts(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editId ? 'PUT' : 'POST';
    const url = editId ? `${API_URL}/${editId}` : API_URL;

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setForm({ name: '', category: '', price: '', image_url: '', tags: '', detail: '' });
    setEditId(null);
    fetchProducts();
  };

  const deleteProduct = async (id) => {
    if (window.confirm("Delete this product?")) {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      fetchProducts();
    }
  };

  const startEdit = (product) => {
    setEditId(product.id);
    setForm(product);
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1>J. ADMIN PANEL</h1>
        {/* <button onClick={() => window.location.href = '/'} className="logout-link">Store View</button> */}
      </header>

      <section className="form-section">
        <h3>{editId ? 'UPDATE PRODUCT' : 'ADD NEW PRODUCT'}</h3>
        <form onSubmit={handleSubmit} className="admin-form">
          <input type="text" placeholder="Product Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
          <input type="text" placeholder="Category (e.g. Men)" value={form.category} onChange={e => setForm({...form, category: e.target.value})} required />
          <input type="number" placeholder="Price" value={form.price} onChange={e => setForm({...form, price: e.target.value})} required />
          <input type="text" placeholder="Image URL" value={form.image_url} onChange={e => setForm({...form, image_url: e.target.value})} />
          <input type="text" placeholder="Tags (comma separated)" value={form.tags} onChange={e => setForm({...form, tags: e.target.value})} />
          <textarea placeholder="Product Details" value={form.detail} onChange={e => setForm({...form, detail: e.target.value})} />
          <button type="submit" className="save-btn">{editId ? 'UPDATE' : 'SAVE PRODUCT'}</button>
          {editId && <button type="button" onClick={() => {setEditId(null); setForm({name:'', category:'', price:'', image_url:'', tags:'', detail:''})}}>Cancel</button>}
        </form>
      </section>

      <section className="inventory-section">
        <h3>INVENTORY</h3>
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>Rs. {p.price}</td>
                <td>
                  <button className="edit-btn" onClick={() => startEdit(p)}>Edit</button>
                  <button className="delete-btn" onClick={() => deleteProduct(p.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Admin;
