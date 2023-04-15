import retirementHome_Image from '../img/luxury_villa.jpg'
import townHouse_Image from '../img/rent_img_1.jpg'
import mobileHouse_Image from '../img/rent_img_2.jpg'
import houseBoat_Image from '../img/luxury_villa_2.jpg'
import coHouse_Image from '../img/rent_img_3.jpg'
import earthSheltered_Image from '../img/luxury_villa_3.jpg'

const forSale = [
  {
    townHouse: {
      type: "Town House",
      image: townHouse_Image,
      bedRooms: 1,
      bathRooms: 1,
      address: "1234 Main Street, Kumasi",
      id: 1,
    },
    mobileHouse: {
      type: "Mobile House",
      image: mobileHouse_Image,
      bedRooms: 3,
      bathRooms: 2,
      address: "5678 Park Avenue, Sunyani",
      id: 2,
    },
    retirementHome: {
      type: "Retirement Home",
      image: retirementHome_Image,
      bedRooms: 1,
      bathRooms: 1,
      address: "100-B4 Berlin Street, Sunyani",
      id: 3,
    },
    coHouse: {
      type: "Co-Housing",
      image: coHouse_Image,
      bedRooms: 1,
      bathRooms: 1,
      address: "2-B44 BS-Rd, Achimota",
      id: 4,
    },
    houseBoat: {
      type: "House Boat",
      image: houseBoat_Image,
      bedRooms: 1,
      bathRooms: 1,
      address: "KT-45 Paradise-Ave, Koforidua",
      id: 5,
    },
    earthSheltered: {
      type: "Earth-Sheltered House",
      image: earthSheltered_Image,
      bedRooms: 1,
      bathRooms: 1,
      address: "SNY-34 Area 1, Sunyani",
      id: 6,
    },
  },
];
export default forSale;