import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

export const navigationLinks = [
  { id: 1, title: "Home", image: iconsImgs.home },
  { id: 2, title: "Appointment", image: iconsImgs.budget },
  { id: 3, title: "Lab Tests", image: iconsImgs.plane },
  { id: 4, title: "Medicine Order", image: iconsImgs.wallet },
  { id: 5, title: "Favourites", image: iconsImgs.bills },
  { id: 6, title: "Family", image: iconsImgs.report },
  { id: 7, title: "Prescription", image: iconsImgs.wallet },
  { id: 8, title: "Messages", image: iconsImgs.wealth },
  { id: 9, title: "Payments", image: iconsImgs.user },
  { id: 10, title: "Settings", image: iconsImgs.gears },
];

export const searchIcon = { id: 1, title: "Home", image: iconsImgs.search };

export const cardContant = [
  {
    id: 1,
    name: "Dr. Darlene Robertson",
    specialist: "Dental Specialist",
    review: "50+ Reviews",
    rating: "5.0",
    avatar: personsImgs.person_one,
  },
  {
    id: 2,
    name: "Dr. Darrell Steward",
    specialist: "Heart Specialist",
    review: "50+ Reviews",
    rating: "4.9",
    avatar: personsImgs.person_four,
  },
  {
    id: 3,
    name: "Dr. Cameron Williamson",
    specialist: "Dental Specialist",
    review: "80+ Reviews",
    rating: "5.0",
    avatar: personsImgs.person_three,
  },
  {
    id: 4,
    name: "Dr. Darlene Robertson",
    specialist: "Dental Specialist",
    review: "80+ Reviews",
    rating: "5.0",
    avatar: personsImgs.person_one,
  },
];

export const healthPackageCard = [
  {
    id: 1,
    name: "Basic Health Package",
    subtitle: "Ideal for individuals aged 21-40...",
    avatar: personsImgs.person_one,
  },
  {
    id: 2,
    name: "Fever Panel",
    subtitle: "Ideal for individuals aged 21-40...",
    avatar: personsImgs.person_four,
  }
];
export const popularProductsCard = [
  {
    id: 1,
    name: "Necessaire 75ML",
    price: "$27.60",
    discount: "$34.7",
    avatar: personsImgs.person_one,
  },
  {
    id: 2,
    name: "Mario 118ml",
    price: "$25.70",
    discount: "$32.7",
    avatar: personsImgs.person_four,
  },
  {
    id: 3,
    name: "Allergy Relief 25mg",
    price: "$25.70",
    discount: "$32.70",
    avatar: personsImgs.person_three,
  },
];