import apartment_Image from "../img/image_5.jpg";
import house_Image from "../img/header_img_1.jpg";
import rentCondor_Image from "../img/image_3.jpg";

const rentProperties = [
  {
    forRent: {
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
      condo: {
        type: "Condo",
        image: rentCondor_Image,
        bedRooms: 1,
        bathRooms: 1,
        address: "9101 Oak Street, East Legon",
      },
    },
  },
];
export default rentProperties;