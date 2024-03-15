import singleFamHouse_Image from "../../img/image_6.jpg";
import condo_Image from "../../img/image_1.jpg";
import townHouse_Image from "../../img/image_8.jpg";
import apartment_Image from "../../img/image_5.jpg";
import house_Image from "../../img/header_img_1.jpg";
import rentCondor_Image from "../../img/image_3.jpg";

const forRent = [
  {
    type: "Condo",
    image: condo_Image,
    bedRooms: 2,
    bathRooms: 2,
    address: "5678 Kings Avenue, Kof-Town",
    id: 1,
    description:
      "Welcome to our stunning condo house, where luxury and comfort come together in perfect harmony. Our spacious units are designed to provide you with everything you need to live your best life, from top-of-the-line appliances to breathtaking views of the city. Whether you're relaxing in your private balcony or entertaining guests in your gourmet kitchen, you'll always feel right at home in our luxury condos.Experience the ultimate in luxury living with our resort-style condos. With a variety of amenities available on-site, including a swimming pool, fitness center, and outdoor recreation areas, you'll feel like you're on vacation every day. Plus, with a concierge on staff to assist with all your needs, you'll have everything you need right at your fingertips.Our eco-friendly condo house is the perfect choice for those who want to live in harmony with the environment. Our units are designed to be energy-efficient and sustainable, with features like solar panels and green roofs. Plus, with easy access to public transportation and bike-friendly amenities, you'll be doing your part to reduce your carbon footprint.",
  },
  {
    type: "TownHouse",
    image: townHouse_Image,
    bedRooms: 4,
    bathRooms: 3,
    address: "9101 Flint Street, Takoradi",
    id: 2,
    description:
      "Our townhouse offers a low-maintenance lifestyle, with features like a homeowners' association to handle exterior maintenance and landscaping. Spend less time worrying about home repairs and more time enjoying your new home. With a convenient location and all the amenities you need, our townhouse makes living easy. Our townhouse offers a great investment opportunity, with the potential for rental income or long-term appreciation. With a convenient location and all the amenities of urban living, our townhouse is sure to attract tenants or appreciate in value over time.",
  },
  {
    type: "Apartment",
    image: apartment_Image,
    bedRooms: 1,
    bathRooms: 1,
    address: "1234 Main Street, Kumasi",
    id: 3,
    description:
      " Our apartment offers a prime location, with easy access to shopping, dining, and entertainment options. Enjoy the convenience of living in a bustling urban area, with everything you need just steps away.Our apartment offers flexibility, with the ability to move in quickly and easily, without the hassle of a long-term commitment. Enjoy the freedom to change your living situation as your needs and preferences evolve over time.Our apartment offers convenience, with amenities like on-site laundry, maintenance, and package delivery. Enjoy a worry-free living experience with all the essentials at your fingertips.",
  },
  {
    type: "House",
    image: house_Image,
    bedRooms: 3,
    bathRooms: 2,
    address: "5678 Park Avenue, Sunyani",
    id: 4,
    description:
      "Our houses offers room for growth, with the ability to expand or renovate as your family grows and your needs change. Enjoy the flexibility of a home that can adapt to your changing lifestyle. These houses offers privacy, with no shared walls or living spaces with others. Enjoy the peace and quiet of a stand-alone home, without the noise and distractions of apartment living. Our houses offers space, with multiple bedrooms, bathrooms, and living areas. Enjoy the comfort and convenience of a spacious living environment, perfect for families or individuals who value their privacy.",
  },
  {
    type: "Modular Home",
    image: rentCondor_Image,
    bedRooms: 1,
    bathRooms: 1,
    address: "9101 Oak Street, East Legon",
    id: 5,
    description:
      " Our modular homes offer speed, with a faster construction timeline than traditional stick-built homes. Enjoy the convenience of moving into your new home sooner, without sacrificing quality or customization options.These modular homes offer flexibility, with a variety of floor plans and customization options to fit your unique needs and preferences. Enjoy the ability to create a home that suits your lifestyle, without the limitations of a traditional stick-built home.Our modular homes offer efficiency, with features like energy-efficient windows, insulation, and appliances. Enjoy lower utility bills and a more sustainable living environment.",
  },
  {
    type: "Single-Family House",
    image: singleFamHouse_Image,
    bedRooms: 3,
    bathRooms: 2,
    address: "1234 Main Street, Bantama",
    id: 6,
    description:
      "Our single-family house offers a sense of community, with the opportunity to connect with neighbors and build meaningful relationships. Enjoy the comfort and support of living in a welcoming and friendly neighborhood. Our single-family house offers the opportunity for customization, allowing you to make the space truly your own. With a variety of floor plans and options available, you can create a home that suits your unique needs and preferences. Our single-family house offers outdoor living spaces, including a private yard and patio, perfect for entertaining or relaxing. Enjoy the beauty of the great outdoors right in your own backyard.",
  },
];

export default forRent;
