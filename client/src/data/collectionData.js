import boy from "../assets/boy.jpg";
import girl from "../assets/girl.jpg";
import teengirl from "../assets/teengirl.jpg";
import infant from "../assets/infant.jpg";
import teenboy from "../assets/teenboy.jpg";

export const fragranceTabs = ["Fragrances", "Makeup", "Skincare"];

export const menCategories = [
  { id: "kurta-pajama", name: "KURTA PAJAMA", image: "https://www.junaidjamshed.com/cdn/shop/files/19.jpg?v=1775632051&width=400", href: "#" },
  { id: "kameez-shalwar", name: "KAMEEZ SHALWAR", image: "https://www.junaidjamshed.com/cdn/shop/files/34_562a3251-9161-4dc6-9aea-0d68dc58dce0.jpg?v=1775715404&width=400", href: "#" },
  { id: "kurta", name: "KURTA", image: "https://www.junaidjamshed.com/cdn/shop/files/33_34b8c613-b228-48b2-a033-c941395ce564.jpg?v=1775715403&width=400", href: "#" },
  { id: "waistcoat", name: "WAISTCOAT", image: "https://www.junaidjamshed.com/cdn/shop/files/35.jpg?v=1775716135&width=400", href: "#" },
  { id: "unstitched", name: "UNSTITCHED", image: "https://www.junaidjamshed.com/cdn/shop/files/24.jpg?v=1775639650&width=400", href: "#" },
  { id: "footwear", name: "FOOTWEAR", image: "https://www.junaidjamshed.com/cdn/shop/files/20.jpg?v=1775632296&width=400", href: "#" }
];

export const womenCategories = [
  { id: "eid-collection", name: "EID COLLECTION '25", image: "https://www.junaidjamshed.com/cdn/shop/files/4_fcc06784-b38b-4d71-bffb-083e76e91c85.jpg?v=1778655985&width=400", href: "#" },
  { id: "co-ords", name: "CO-ORDS", image: "https://www.junaidjamshed.com/cdn/shop/files/7_4b0880db-7687-440d-9217-bb2ecfac2bb1.jpg?v=1778656607&width=400", href: "#" },
  { id: "ready-to-wear", name: "READY TO WEAR", image: "https://www.junaidjamshed.com/cdn/shop/files/8_d0c1e978-6c44-4c2e-93c3-b56e26fb17d4.jpg?v=1778657167&width=400", href: "#" },
  { id: "unstitched", name: "UNSTITCHED", image: "https://www.junaidjamshed.com/cdn/shop/files/5_c8c60811-ca8f-43a2-a79a-894660c69f99.jpg?v=1778656240&width=400", href: "#" },
  { id: "formals", name: "FORMALS", image: "https://www.junaidjamshed.com/cdn/shop/files/41_e171719d-d2cd-4966-8027-d1dba31ea375.jpg?v=1776922191&width=400", href: "#" },
  { id: "accessories", name: "ACCESSORIES", image: "https://www.junaidjamshed.com/cdn/shop/files/42_9961b3a4-75fc-40fe-80df-fb401cee7de5.jpg?v=1776922188&width=400", href: "#" }
];

export const menPromos = [
  {
    type: "row-2",
    cards: [
      { title: "AUTOGRAPH SERIES", subtitle: "MENS UNSTITCHED COLLECTION", image: "https://www.junaidjamshed.com/cdn/shop/files/18.jpg?v=1775630622&width=2000" },
      { title: "CEREMONIAL", subtitle: "MENS UNSTITCHED COLLECTION", image: "https://www.junaidjamshed.com/cdn/shop/files/17.jpg?v=1775630367&width=2000" }
    ]
  },
  {
    type: "row-3",
    cards: [
      { title: "HERITAGE EDIT '25", image: "http://junaidjamshed.com/cdn/shop/files/16.jpg?v=1775629656&width=2000" },
      { title: "EXPRESSION SERIES", image: "https://www.junaidjamshed.com/cdn/shop/files/15.jpg?v=1775629656&width=2000" },
      { title: "LIKE FATHER LIKE SON", image: "https://www.junaidjamshed.com/cdn/shop/files/14.jpg?v=1775629333&width=2000" }
    ]
  }
];

export const womenPromos = [
  {
    type: "row-2",
    cards: [
      { title: "CO-ORDS", subtitle: "NEW", image: "https://www.junaidjamshed.com/cdn/shop/files/coord_0c504f1e-d34e-45c9-a927-60d9cfa807fc.jpg?v=1777268569&width=2000" },
      { title: "LAWN 3 PIECE", subtitle: "UNSTITCHED", image: "https://www.junaidjamshed.com/cdn/shop/files/lawn_e40bd16a-8370-48e9-819e-7a1c28b7cb62.jpg?v=1777269186&width=2000" }
    ]
  },
  {
    type: "row-3",
    cards: [
      { title: "ARTISANAL", image: "https://www.junaidjamshed.com/cdn/shop/files/67.jpg?v=1777269727&width=2000" },
      { title: "KURTA", image: "https://www.junaidjamshed.com/cdn/shop/files/45_d755d577-899b-42eb-918f-adeeee287b20.jpg?v=1777268673&width=2000" },
      { title: "BAGS", image: "https://www.junaidjamshed.com/cdn/shop/files/46_8d200739-7bc3-4223-8591-b965f0bcab34.jpg?v=1777269858&width=2000" }
    ]
  }
];


export const teenCategories = [
  { id: "summer-26", name: "Summer '26", image: girl, href: "#" },
  { id: "teen-girls", name: "Teen Girls", image: teengirl, href: "#" },
  { id: "teen-boys", name: "Teen Boys", image: teenboy, href: "#" },
  { id: "kid-girls", name: "Kid Girls", image: girl, href: "#" },
  { id: "kid-boys", name: "Kid Boys", image: boy, href: "#" },
  { id: "infant", name: "Infant", image: infant, href: "#" },
];

export const teenTabs = ["Teen Girls", "Teen Boys", "Kid Girls", "Kid Boys"];

export const teenFeatureItems = [
  {
    id: "teen-boys",
    title: "Teen Boys",
    subtitle: "Formals Collection",
    image: teenboy,
    href: "#",
    size: "large",
  },
  {
    id: "teen-girls",
    title: "Teen Girls",
    subtitle: "Featured Collection",
    image: teengirl,
    href: "#",
    size: "large",
  },
  {
    id: "kid-boys",
    title: "Kid Boys",
    image: boy,
    href: "#",
    size: "small",
  },
  {
    id: "kid-girls",
    title: "Kid Girls",
    image: girl,
    href: "#",
    size: "small",
  },
  {
    id: "infant",
    title: "Infant",
    image: infant,
    href: "#",
    size: "small",
  },
];
