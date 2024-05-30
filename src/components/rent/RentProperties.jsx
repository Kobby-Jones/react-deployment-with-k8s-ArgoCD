import singleFamHouse_Image from "../../img/image_6.jpg";
import condo_Image from "../../img/image_1.jpg";
import townHouse_Image from "../../img/image_8.jpg";
import apartment_Image from "../../img/image_5.jpg";
import house_Image from "../../img/header_img_1.jpg";
import rentCondor_Image from "../../img/image_3.jpg";
import video1 from "../../img/video1.mp4"
import video2 from "../../img/video2.mp4"
import video3 from "../../img/video3.mp4"
import video4 from "../../img/video4.mp4"

const forRent = [
  {
    type: "Condo",
    image: condo_Image,
    bedRooms: 3,
    bathRooms: 3,
    video : video1,
    address: "5678 Kings Avenue, Kof-Town",
    id: 31,
    description:
      "Welcome to our stunning condo house, where luxury and comfort come together in perfect harmony. Our spacious units are designed to provide you with everything you need to live your best life, from top-of-the-line appliances to breathtaking views of the city. Whether you're relaxing in your private balcony or entertaining guests in your gourmet kitchen, you'll always feel right at home in our luxury condos.Experience the ultimate in luxury living with our resort-style condos. With a variety of amenities available on-site, including a swimming pool, fitness center, and outdoor recreation areas, you'll feel like you're on vacation every day. Plus, with a concierge on staff to assist with all your needs, you'll have everything you need right at your fingertips.Our eco-friendly condo house is the perfect choice for those who want to live in harmony with the environment. Our units are designed to be energy-efficient and sustainable, with features like solar panels and green roofs. Plus, with easy access to public transportation and bike-friendly amenities, you'll be doing your part to reduce your carbon footprint.",
      agent_id : 2
  },
  {
    type: "TownHouse",
    image: townHouse_Image,
    bedRooms: 4,
    bathRooms: 3,
    video : video2,
    address: "9101 Flint Street, Takoradi",
    id: 32,
    description:
      "Our townhouse offers a low-maintenance lifestyle, with features like a homeowners' association to handle exterior maintenance and landscaping. Spend less time worrying about home repairs and more time enjoying your new home. With a convenient location and all the amenities you need, our townhouse makes living easy. Our townhouse offers a great investment opportunity, with the potential for rental income or long-term appreciation. With a convenient location and all the amenities of urban living, our townhouse is sure to attract tenants or appreciate in value over time.",
      agent_id : 8
  },
  {
    type: "Apartment",
    image: apartment_Image,
    bedRooms: 5,
    bathRooms: 4,
    video : video3,
    address: "1234 Main Street, Kumasi",
    id: 33,
    description:
      " Our apartment offers a prime location, with easy access to shopping, dining, and entertainment options. Enjoy the convenience of living in a bustling urban area, with everything you need just steps away.Our apartment offers flexibility, with the ability to move in quickly and easily, without the hassle of a long-term commitment. Enjoy the freedom to change your living situation as your needs and preferences evolve over time.Our apartment offers convenience, with amenities like on-site laundry, maintenance, and package delivery. Enjoy a worry-free living experience with all the essentials at your fingertips.",
      agent_id : 13
  },
  {
    type: "House",
    image: house_Image,
    bedRooms: 3,
    bathRooms: 2,
    video : video4,
    address: "5678 Park Avenue, Sunyani",
    id: 34,
    description:
      "Our houses offers room for growth, with the ability to expand or renovate as your family grows and your needs change. Enjoy the flexibility of a home that can adapt to your changing lifestyle. These houses offers privacy, with no shared walls or living spaces with others. Enjoy the peace and quiet of a stand-alone home, without the noise and distractions of apartment living. Our houses offers space, with multiple bedrooms, bathrooms, and living areas. Enjoy the comfort and convenience of a spacious living environment, perfect for families or individuals who value their privacy.",
      agent_id : 15
  },
  {
    type: "Modular Home",
    image: rentCondor_Image,
    bedRooms: 2,
    bathRooms: 2,
    video : video1,
    address: "9101 Oak Street, East Legon",
    id: 35,
    description:
      " Our modular homes offer speed, with a faster construction timeline than traditional stick-built homes. Enjoy the convenience of moving into your new home sooner, without sacrificing quality or customization options.These modular homes offer flexibility, with a variety of floor plans and customization options to fit your unique needs and preferences. Enjoy the ability to create a home that suits your lifestyle, without the limitations of a traditional stick-built home.Our modular homes offer efficiency, with features like energy-efficient windows, insulation, and appliances. Enjoy lower utility bills and a more sustainable living environment.",
      agent_id : 11
  },
  {
    type: "Single-Family House",
    image: singleFamHouse_Image,
    bedRooms: 3,
    bathRooms: 3,
    video: video1,
    address: "1234 Main Street, Bantama",
    id: 36,
    description:
      "Our single-family house offers a sense of community, with the opportunity to connect with neighbors and build meaningful relationships. Enjoy the comfort and support of living in a welcoming and friendly neighborhood. Our single-family house offers the opportunity for customization, allowing you to make the space truly your own. With a variety of floor plans and options available, you can create a home that suits your unique needs and preferences. Our single-family house offers outdoor living spaces, including a private yard and patio, perfect for entertaining or relaxing. Enjoy the beauty of the great outdoors right in your own backyard.",
      agent_id : 5
  },
  {
    type: "Condo",
    image: "condo_image1.jpg",
    bedRooms: 3,
    bathRooms: 3,
    address: "5678 Kings Avenue, Kof-Town",
    id: 1,
    description: "Welcome to our stunning condo house, where luxury and comfort come together in perfect harmony. Our spacious units are designed to provide you with everything you need to live your best life, from top-of-the-line appliances to breathtaking views of the city. Whether you're relaxing in your private balcony or entertaining guests in your gourmet kitchen, you'll always feel right at home in our luxury condos. Experience the ultimate in luxury living with our resort-style condos. With a variety of amenities available on-site, including a swimming pool, fitness center, and outdoor recreation areas, you'll feel like you're on vacation every day. Plus, with a concierge on staff to assist with all your needs, you'll have everything you need right at your fingertips. Our eco-friendly condo house is the perfect choice for those who want to live in harmony with the environment. Our units are designed to be energy-efficient and sustainable, with features like solar panels and green roofs. Plus, with easy access to public transportation and bike-friendly amenities, you'll be doing your part to reduce your carbon footprint.",
    agent_id: 1
  },
  {
    type: "House",
    image: "house_image1.jpg",
    bedRooms: 4,
    bathRooms: 3,
    address: "1234 Maple Street, Maplewood",
    id: 2,
    description: "Experience the charm of suburban living in our beautiful house located in Maplewood. This spacious home features modern amenities, a large backyard perfect for family gatherings, and a cozy fireplace for those chilly evenings. Enjoy the tranquility of a peaceful neighborhood while being just a short drive away from the city.",
    agent_id: 2
  },
  {
    type: "Apartment",
    image: "apartment_image1.jpg",
    bedRooms: 2,
    bathRooms: 2,
    address: "789 Oak Lane, Oakville",
    id: 3,
    description: "Discover urban living at its finest in our stylish apartment located in the heart of Oakville. With easy access to shopping, dining, and entertainment, you'll never have to go far to find what you need. Our apartments offer modern finishes, a fitness center, and a rooftop lounge with stunning city views.",
    agent_id: 3
  },
  {
    type: "Townhouse",
    image: "townhouse_image1.jpg",
    bedRooms: 3,
    bathRooms: 2,
    address: "456 Pine Street, Pine City",
    id: 4,
    description: "Live in comfort and style in our charming townhouse located in Pine City. This home features a spacious open floor plan, modern kitchen, and a private patio perfect for outdoor dining. Enjoy the convenience of being close to parks, schools, and shopping centers.",
    agent_id: 4
  },
  {
    type: "Villa",
    image: "villa_image1.jpg",
    bedRooms: 5,
    bathRooms: 4,
    address: "321 Cedar Drive, Cedar Town",
    id: 5,
    description: "Indulge in luxury living in our exquisite villa located in Cedar Town. This home boasts a large garden, private pool, and a spacious interior perfect for entertaining. Enjoy the serene surroundings and privacy while being close to all the amenities you need.",
    agent_id: 5
  },
  {
    type: "Condo",
    image: "condo_image2.jpg",
    bedRooms: 2,
    bathRooms: 2,
    address: "654 Birch Road, Birchwood",
    id: 6,
    description: "Welcome to our elegant condo in Birchwood, where modern living meets comfort. This condo offers a sleek design, state-of-the-art appliances, and access to exclusive amenities like a fitness center and a rooftop terrace. Enjoy the convenience of being close to shops, restaurants, and public transport.",
    agent_id: 6
  },
  {
    type: "House",
    image: "house_image2.jpg",
    bedRooms: 4,
    bathRooms: 3,
    address: "789 Willow Lane, Willowville",
    id: 7,
    description: "This beautiful house in Willowville offers the perfect blend of luxury and comfort. Featuring a spacious layout, modern kitchen, and a large backyard, it's perfect for families. Enjoy the peaceful neighborhood and the convenience of being close to parks and schools.",
    agent_id: 7
  },
  {
    type: "Apartment",
    image: "apartment_image2.jpg",
    bedRooms: 1,
    bathRooms: 1,
    address: "101 Elm Street, Elm City",
    id: 8,
    description: "Experience the best of city living in our contemporary apartment in Elm City. With stylish interiors, a fitness center, and a communal lounge, this apartment offers everything you need for a comfortable lifestyle. Enjoy being in the heart of the city, close to all amenities.",
    agent_id: 8
  },
  {
    type: "Townhouse",
    image: "townhouse_image2.jpg",
    bedRooms: 3,
    bathRooms: 3,
    address: "202 Spruce Avenue, Sprucetown",
    id: 9,
    description: "Our beautiful townhouse in Sprucetown offers a perfect blend of modern design and cozy living. Featuring a spacious living area, a modern kitchen, and a private patio, it's perfect for families. Enjoy being close to parks, shops, and excellent schools.",
    agent_id: 9
  },
  {
    type: "Villa",
    image: "villa_image2.jpg",
    bedRooms: 4,
    bathRooms: 3,
    address: "303 Palm Drive, Palm Beach",
    id: 10,
    description: "Live in luxury in our stunning villa in Palm Beach. This home offers a spacious layout, private pool, and beautiful garden. Enjoy the peaceful surroundings and the convenience of being close to the beach and local amenities.",
    agent_id: 10
  },
  {
    type: "Condo",
    image: "condo_image3.jpg",
    bedRooms: 3,
    bathRooms: 3,
    address: "404 Maple Street, Maple City",
    id: 11,
    description: "Our luxurious condo in Maple City offers everything you need for modern living. With high-end finishes, a spacious layout, and access to exclusive amenities like a fitness center and swimming pool, you'll love calling this place home. Enjoy being close to shops, restaurants, and entertainment.",
    agent_id: 11
  },
  {
    type: "House",
    image: "house_image3.jpg",
    bedRooms: 5,
    bathRooms: 4,
    address: "505 Oak Lane, Oaktown",
    id: 12,
    description: "This beautiful house in Oaktown offers a perfect blend of luxury and comfort. Featuring a spacious layout, modern kitchen, and a large backyard, it's perfect for families. Enjoy the peaceful neighborhood and the convenience of being close to parks and schools.",
    agent_id: 12
  },
  {
    type: "Apartment",
    image: "apartment_image3.jpg",
    bedRooms: 2,
    bathRooms: 2,
    address: "606 Pine Street, Pineville",
    id: 13,
    description: "Discover urban living at its finest in our stylish apartment in Pineville. With easy access to shopping, dining, and entertainment, you'll never have to go far to find what you need. Our apartments offer modern finishes, a fitness center, and a rooftop lounge with stunning city views.",
    agent_id: 13
  },
  {
    type: "Townhouse",
    image: "townhouse_image3.jpg",
    bedRooms: 3,
    bathRooms: 3,
    address: "707 Birch Road, Birch City",
    id: 14,
    description: "Live in comfort and style in our charming townhouse in Birch City. This home features a spacious open floor plan, modern kitchen, and a private patio perfect for outdoor dining. Enjoy the convenience of being close to parks, schools, and shopping centers.",
    agent_id: 14
  },
  {
    type: "Villa",
    image: "villa_image3.jpg",
    bedRooms: 5,
    bathRooms: 4,
    address: "808 Palm Drive, Palm City",
    id: 15,
    description: "Indulge in luxury living in our exquisite villa in Palm City. This home boasts a large garden, private pool, and a spacious interior perfect for entertaining. Enjoy the serene surroundings and privacy while being close to all the amenities you need.",
    agent_id: 15
  },
  {
    type: "Condo",
    image: "condo_image4.jpg",
    bedRooms: 2,
    bathRooms: 2,
    address: "909 Maple Street, Maple Grove",
    id: 16,
    description: "Welcome to our elegant condo in Maple Grove, where modern living meets comfort. This condo offers a sleek design, state-of-the-art appliances, and access to exclusive amenities like a fitness center and a rooftop terrace. Enjoy the convenience of being close to shops, restaurants, and public transport.",
    agent_id: 1
  },
  {
    type: "House",
    image: "house_image4.jpg",
    bedRooms: 4,
    bathRooms: 3,
    address: "1010 Willow Lane, Willow Park",
    id: 17,
    description: "This beautiful house in Willow Park offers the perfect blend of luxury and comfort. Featuring a spacious layout, modern kitchen, and a large backyard, it's perfect for families. Enjoy the peaceful neighborhood and the convenience of being close to parks and schools.",
    agent_id: 2
  },
  {
    type: "Apartment",
    image: "apartment_image4.jpg",
    bedRooms: 1,
    bathRooms: 1,
    address: "1111 Elm Street, Elm Grove",
    id: 18,
    description: "Experience the best of city living in our contemporary apartment in Elm Grove. With stylish interiors, a fitness center, and a communal lounge, this apartment offers everything you need for a comfortable lifestyle. Enjoy being in the heart of the city, close to all amenities.",
    agent_id: 3
  },
  {
    type: "Townhouse",
    image: "townhouse_image4.jpg",
    bedRooms: 3,
    bathRooms: 3,
    address: "1212 Spruce Avenue, Spruce Grove",
    id: 19,
    description: "Our beautiful townhouse in Spruce Grove offers a perfect blend of modern design and cozy living. Featuring a spacious living area, a modern kitchen, and a private patio, it's perfect for families. Enjoy being close to parks, shops, and excellent schools.",
    agent_id: 4
  },
  {
    type: "Villa",
    image: "villa_image4.jpg",
    bedRooms: 4,
    bathRooms: 3,
    address: "1313 Palm Drive, Palm Valley",
    id: 20,
    description: "Live in luxury in our stunning villa in Palm Valley. This home offers a spacious layout, private pool, and beautiful garden. Enjoy the peaceful surroundings and the convenience of being close to the beach and local amenities.",
    agent_id: 5
  },
  {
    type: "Condo",
    image: "condo_image5.jpg",
    bedRooms: 3,
    bathRooms: 3,
    address: "1414 Maple Street, Maple Hills",
    id: 21,
    description: "Our luxurious condo in Maple Hills offers everything you need for modern living. With high-end finishes, a spacious layout, and access to exclusive amenities like a fitness center and swimming pool, you'll love calling this place home. Enjoy being close to shops, restaurants, and entertainment.",
    agent_id: 6
  },
  {
    type: "House",
    image: "house_image5.jpg",
    bedRooms: 5,
    bathRooms: 4,
    address: "1515 Oak Lane, Oakwood",
    id: 22,
    description: "This beautiful house in Oakwood offers a perfect blend of luxury and comfort. Featuring a spacious layout, modern kitchen, and a large backyard, it's perfect for families. Enjoy the peaceful neighborhood and the convenience of being close to parks and schools.",
    agent_id: 7
  },
  {
    type: "Apartment",
    image: "apartment_image5.jpg",
    bedRooms: 2,
    bathRooms: 2,
    address: "1616 Pine Street, Pine Forest",
    id: 23,
    description: "Discover urban living at its finest in our stylish apartment in Pine Forest. With easy access to shopping, dining, and entertainment, you'll never have to go far to find what you need. Our apartments offer modern finishes, a fitness center, and a rooftop lounge with stunning city views.",
    agent_id: 8
  },
  {
    type: "Townhouse",
    image: "townhouse_image5.jpg",
    bedRooms: 3,
    bathRooms: 3,
    address: "1717 Birch Road, Birchwood",
    id: 24,
    description: "Live in comfort and style in our charming townhouse in Birchwood. This home features a spacious open floor plan, modern kitchen, and a private patio perfect for outdoor dining. Enjoy the convenience of being close to parks, schools, and shopping centers.",
    agent_id: 9
  },
  {
    type: "Villa",
    image: "villa_image5.jpg",
    bedRooms: 5,
    bathRooms: 4,
    address: "1818 Palm Drive, Palm Beach Gardens",
    id: 25,
    description: "Indulge in luxury living in our exquisite villa in Palm Beach Gardens. This home boasts a large garden, private pool, and a spacious interior perfect for entertaining. Enjoy the serene surroundings and privacy while being close to all the amenities you need.",
    agent_id: 10
  },
  {
    type: "Condo",
    image: "condo_image6.jpg",
    bedRooms: 2,
    bathRooms: 2,
    address: "1919 Maple Street, Maple Town",
    id: 26,
    description: "Welcome to our elegant condo in Maple Town, where modern living meets comfort. This condo offers a sleek design, state-of-the-art appliances, and access to exclusive amenities like a fitness center and a rooftop terrace. Enjoy the convenience of being close to shops, restaurants, and public transport.",
    agent_id: 11
  },
  {
    type: "House",
    image: "house_image6.jpg",
    bedRooms: 4,
    bathRooms: 3,
    address: "2020 Willow Lane, Willow Creek",
    id: 27,
    description: "This beautiful house in Willow Creek offers the perfect blend of luxury and comfort. Featuring a spacious layout, modern kitchen, and a large backyard, it's perfect for families. Enjoy the peaceful neighborhood and the convenience of being close to parks and schools.",
    agent_id: 12
  },
  {
    type: "Apartment",
    image: "apartment_image6.jpg",
    bedRooms: 1,
    bathRooms: 1,
    address: "2121 Elm Street, Elm Heights",
    id: 28,
    description: "Experience the best of city living in our contemporary apartment in Elm Heights. With stylish interiors, a fitness center, and a communal lounge, this apartment offers everything you need for a comfortable lifestyle. Enjoy being in the heart of the city, close to all amenities.",
    agent_id: 13
  },
  {
    type: "Townhouse",
    image: "townhouse_image6.jpg",
    bedRooms: 3,
    bathRooms: 3,
    address: "2222 Spruce Avenue, Spruce City",
    id: 29,
    description: "Our beautiful townhouse in Spruce City offers a perfect blend of modern design and cozy living. Featuring a spacious living area, a modern kitchen, and a private patio, it's perfect for families. Enjoy being close to parks, shops, and excellent schools.",
    agent_id: 14
  },
  {
    type: "Villa",
    image: "villa_image6.jpg",
    bedRooms: 4,
    bathRooms: 3,
    address: "2323 Palm Drive, Palm Shores",
    id: 30,
    description: "Live in luxury in our stunning villa in Palm Shores. This home offers a spacious layout, private pool, and beautiful garden. Enjoy the peaceful surroundings and the convenience of being close to the beach and local amenities.",
    agent_id: 15
  }
]


export default forRent;
