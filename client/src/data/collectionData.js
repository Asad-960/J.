import boy from "../assets/boy.jpg";
import girl from "../assets/girl.jpg";
import teengirl from "../assets/teengirl.jpg";
import hairmist from "../assets/hairmist.webp";
import infant from "../assets/infant.jpg";
import lipstick from "../assets/liptick.webp";
import showergel from "../assets/showergel.webp";
import spray from "../assets/spray.webp";
import skincare from "../assets/skincare.jpg";
import teenboy from "../assets/teenboy.jpg";

export const fragranceCategories = [
  { id: "fragrance", name: "Fragrances", image: showergel, href: "#" },
  { id: "makeup", name: "Makeup", image: lipstick, href: "#" },
  { id: "skincare", name: "Skincare", image: skincare, href: "#" },
  { id: "hair-mist", name: "Hair Mist", image: hairmist, href: "#" },
  { id: "body-mist", name: "Body Mist", image: spray, href: "#" },
  { id: "gift-sets", name: "Gift Sets", image: lipstick, href: "#" },
];

export const fragranceTabs = ["Fragrances", "Makeup", "Skincare"];

export const fragranceTrending = [
  {
    id: 1,
    name: "JANAN SPORT",
    price: "5,780",
    currency: "PKR.",
    image: showergel,
    href: "#",
  },
  {
    id: 2,
    name: "J. POUR FEMME",
    price: "4,420",
    currency: "PKR.",
    image: hairmist,
    href: "#",
  },
  {
    id: 3,
    name: "WHITE MUSK",
    price: "1,785",
    currency: "PKR.",
    image: skincare,
    href: "#",
  },
  {
    id: 4,
    name: "FLIRTY BODY MIST",
    price: "1,445",
    currency: "PKR.",
    image: lipstick,
    href: "#",
  },
  {
    id: 5,
    name: "JANAN POUR FEMME",
    price: "2,800",
    currency: "PKR.",
    image: spray,
    href: "#",
  },
  {
    id: 6,
    name: "J.EXCLUSIVE",
    price: "1,785",
    currency: "PKR.",
    image: hairmist,
    href: "#",
  },
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

export const teenTrending = [
  {
    id: 1,
    name: "Orange Lawn Embroidered Stitched 2PC",
    price: "4,990",
    currency: "PKR.",
    image: girl,
    href: "#",
  },
  {
    id: 2,
    name: "White Lawn Embroidered Stitched 2PC",
    price: "5,990",
    currency: "PKR.",
    image: girl,
    href: "#",
  },
  {
    id: 3,
    name: "Multicolor Lawn Embroidered Stitched 2PC",
    price: "4,990",
    currency: "PKR.",
    image: girl,
    href: "#",
  },
  {
    id: 4,
    name: "Green Lawn Embroidered Stitched 2PC",
    price: "5,990",
    currency: "PKR.",
    image: girl,
    href: "#",
  },
  {
    id: 5,
    name: "Blue Kurta Pajama Stitched 2PC",
    price: "5,990",
    currency: "PKR.",
    image: teenboy,
    href: "#",
  },
  {
    id: 6,
    name: "Multicolor Embroidered Stitched 2PC",
    price: "4,990",
    currency: "PKR.",
    image: infant,
    href: "#",
  },
];

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
