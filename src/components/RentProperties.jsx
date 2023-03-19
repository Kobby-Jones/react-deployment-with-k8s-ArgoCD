import retirementHome_Image from '../img/luxury_villa.jpg'
import townHouse_Image from '../img/rent_img_1.jpg'
import mobileHouse_Image from '../img/rent_img_2.jpg'
import houseBoat_Image from '../img/luxury_villa_2.jpg'
import coHouse_Image from '../img/rent_img_3.jpg'
import earthSheltered_Image from '../img/luxury_villa_3.jpg'

const rentProperties = [
  {
    forRent: {
      townHouse: {
        type: "Town House",
        image: townHouse_Image,
        bedRooms: 1,
        bathRooms: 1,
        address: "1234 Main Street, Kumasi",
      },
      mobileHouse: {
        type: "Mobile House",
        image: mobileHouse_Image,
        bedRooms: 3,
        bathRooms: 2,
        address: "5678 Park Avenue, Sunyani",
      },
      retirementHome: {
        type: "Retirement Home",
        image: retirementHome_Image,
        bedRooms: 1,
        bathRooms: 1,
        address: "9101 Oak Street, East Legon",
      },
      coHouse: {
        type: "Co-Housing",
        image: coHouse_Image,
        bedRooms: 1,
        bathRooms: 1,
        address: "9101 Oak Street, East Legon",
      },
      houseBoat: {
        type: "House Boat",
        image: houseBoat_Image,
        bedRooms: 1,
        bathRooms: 1,
        address: "9101 Oak Street, East Legon",
      },
      earthSheltered: {
        type: "Earth-Sheltered House",
        image: earthSheltered_Image,
        bedRooms: 1,
        bathRooms: 1,
        address: "9101 Oak Street, East Legon",
      },
    },
  },
];
export default rentProperties;