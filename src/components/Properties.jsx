import singleFamHouse_Image from "../img/image_6.jpg";
import condo_Image from "../img/image_1.jpg";
import townHouse_Image from "../img/image_8.jpg";
import apartment_Image from "../img/image_5.jpg";
import house_Image from "../img/header_img_1.jpg";
import rentCondor_Image from "../img/image_3.jpg";

const forSale = {
  singleFamHouse: {
    type: "Single-Family House",
    image: singleFamHouse_Image,
    bedRooms: 3,
    bathRooms: 2,
    address: "1234 Main Street, Bantama",
  },
  condo: {
    type: "Condo",
    image: condo_Image,
    bedRooms: 2,
    bathRooms: 2,
    address: "5678 Kings Avenue, Kof-Town",
  },
  townHouse: {
    type: "TownHouse",
    image: townHouse_Image,
    bedRooms: 4,
    bathRooms: 3,
    address: "9101 Flint Street, Takoradi",
  },
  apartment: {
    type: "Apartment",
    image: apartment_Image,
    bedRooms: 1,
    bathRooms: 1,
    address: "1234 Main Street, Kumasi",
  },
  house: {
    type: "House",
    image: house_Image,
    bedRooms: 3,
    bathRooms: 2,
    address: "5678 Park Avenue, Sunyani",
  },
  condo2: {
    type: "Condo",
    image: rentCondor_Image,
    bedRooms: 1,
    bathRooms: 1,
    address: "9101 Oak Street, East Legon",
  },
};

export default forSale;
