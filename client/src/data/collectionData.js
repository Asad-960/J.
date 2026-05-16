import boy from "../assets/boy.jpg";
import girl from "../assets/girl.jpg";
import teengirl from "../assets/teengirl.jpg";
import infant from "../assets/infant.jpg";
import teenboy from "../assets/teenboy.jpg";

export const fragranceTabs = ["Fragrances", "Makeup", "Skincare"];

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
