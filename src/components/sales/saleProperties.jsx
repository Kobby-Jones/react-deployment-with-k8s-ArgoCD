import retirementHome_Image from "../../img/luxury_villa.jpg";
import townHouse_Image from '../../img/rent_img_1.jpg'
import mobileHouse_Image from '../../img/rent_img_2.jpg'
import houseBoat_Image from '../../img/luxury_villa_2.jpg'
import coHouse_Image from '../../img/rent_img_3.jpg'
import earthSheltered_Image from '../../img/luxury_villa_3.jpg'

const forSale = [
      {
    type: "Town House",
    image: townHouse_Image,
    bedRooms: 3,
    bathRooms: 2,
    address: "1234 Main Street, Kumasi",
    id: 36,
    description:
      "Our townhouse is the perfect choice for families, with plenty of space for everyone to live and play. With multiple bedrooms and bathrooms, you'll have all the room you need to accommodate your growing family. Plus, with a variety of community amenities available, including a pool and playground, your kids will always have something fun to do. This house offers the perfect blend of city living and suburban comfort. Located in the heart of the city, you'll be just steps away from some of the best restaurants, shops, and entertainment venues. With a spacious and modern design, our townhouse provides all the comfort and convenience of urban living. This townhouse boasts a sleek and modern design, with features like high ceilings and an open floor plan. Enjoy the latest in home design trends, with top-of-the-line appliances and luxurious finishes throughout. Experience the ultimate in modern living in our townhouse.",
      agent_id: 6
  },
  {
    type: "Mobile House",
    image: mobileHouse_Image,
    bedRooms: 3,
    bathRooms: 2,
    address: "5678 Park Avenue, Sunyani",
    id: 37,
    description:
      " Our mobile house is the perfect choice for those looking to downsize and simplify their lives. With a compact and efficient design, our tiny home offers all the essentials without any unnecessary frills. Experience the freedom that comes with living in a minimalist and mobile home, where you can focus on the things that truly matter.  Our mobile house offers the ultimate in flexibility, allowing you to live wherever and whenever you want. Whether you're looking to travel the country or simply move from place to place, our mobile house makes it easy to pick up and go. With all the comforts of a traditional home, including a full kitchen and bathroom, you'll never have to sacrifice comfort for mobility.This mobile house is an affordable housing option that allows you to own your own home without breaking the bank. With a lower cost than traditional homes, our mobile house offers an opportunity to achieve the dream of homeownership without the burden of a large mortgage. Experience the pride of owning your own home, wherever you choose to park it.",
      agent_id: 3
  },
  {
    type: "Retirement Home",
    image: retirementHome_Image,
    bedRooms: 1,
    bathRooms: 1,
    address: "100-B4 Berlin Street, Sunyani",
    id: 38,
    description:
      " Our retirement home offers the ultimate in resort-style living, with a variety of amenities and activities available on-site. From a swimming pool and fitness center to daily activities and outings, there's always something fun to do. Plus, with a dedicated staff to handle all your needs, you'll have everything you need right at your fingertips. This home offers specialized memory care services for those with dementia or Alzheimer's disease. With a dedicated staff trained in memory care, you'll have peace of mind knowing your loved one is in good hands. Plus, with a variety of activities and therapies designed to support memory function, your loved one can continue to thrive. Our retirement home offers a variety of independent living options, including apartments and townhouses, allowing you to maintain your independence while still enjoying the benefits of a supportive community. With a variety of services available, including housekeeping and transportation, you'll have everything you need to live comfortably.",
      agent_id: 10
  },
  {
    type: "Co-Housing",
    image: coHouse_Image,
    bedRooms: 1,
    bathRooms: 1,
    address: "2-B44 BS-Rd, Achimota",
    id: 39,
    description:
      "This Co-housing is designed to accommodate individuals and families of all ages, making it a great choice for multi-generational living. With a variety of housing options available, including apartments and townhouses, you'll have plenty of choices when it comes to finding the perfect living space for your family. Our Co-housing emphasizes sustainability and eco-friendliness, with features like shared gardens and energy-efficient homes. You'll be doing your part to reduce your carbon footprint while living in a beautiful and supportive community. Co-housing offers a unique opportunity to live in a tight-knit community of like-minded individuals. With a focus on sharing resources and building connections, co-housing is a great choice for those looking to build meaningful relationships and live in a supportive environment.",
      agent_id : 12
  },
  {
    type: "House Boat",
    image: houseBoat_Image,
    bedRooms: 2,
    bathRooms: 2,
    address: "KT-45 Paradise-Ave, Koforidua",
    id: 40,
    description:
      " Our houseboat offers a low-maintenance lifestyle, with features like a compact design and easy-to-clean surfaces. Spend less time worrying about home repairs and more time enjoying life on the water. With a variety of amenities available, including a rooftop deck and a built-in grill, you'll have everything you need to enjoy life to the fullest. Our houseboat offers the ultimate in mobile living, allowing you to explore different parts of the water and experience new sights and sounds. With a variety of amenities available on board, including a kitchen and bathroom, you'll have everything you need for a comfortable and convenient lifestyle. Our houseboat offers the ultimate in waterfront living, with stunning views of the water and easy access to boating and water sports. Enjoy the peace and tranquility of life on the water, with all the comforts of home at your fingertips.",
      agent_id : 4
  },
  {
    type: "Earth-Sheltered House",
    image: earthSheltered_Image,
    bedRooms: 5,
    bathRooms: 5,
    address: "SNY-34 Area 1, Sunyani",
    id: 41,
    description:
      "Our earth-sheltered house offers a resilient living option, with protection from natural disNatural Insulation: Our earth-sheltered house offers natural insulation, keeping you warm in the winter and cool in the summer. Enjoy lower energy bills and a comfortable living environment year-round.asters like tornadoes and hurricanes. With a sturdy and durable design, you can enjoy peace of mind knowing that your home is built to withstand even the most extreme weather conditions. Our earth-sheltered house offers a low environmental impact, with features like natural lighting and ventilation systems to minimize your energy usage. Enjoy a sustainable lifestyle while living in harmony with the natural environment. ",
      agent_id: 13
  },
    {
      type: "Apartment",
      image: "apartment_image7.jpg",
      bedRooms: 2,
      bathRooms: 2,
      address: "333 Pine Street, Pinehurst",
      id: 1,
      description: "Embrace urban living in our contemporary apartment located in the vibrant neighborhood of Pinehurst. This stylish apartment features modern amenities, including a fitness center and rooftop lounge with panoramic city views. With its convenient location near restaurants, shops, and entertainment, you'll experience the best of city life.",
      agent_id: 1
    },
    {
      type: "Condo",
      image: "condo_image7.jpg",
      bedRooms: 3,
      bathRooms: 2,
      address: "444 Birch Road, Birchfield",
      id: 2,
      description: "Welcome to Birchfield's finest condo living. This spacious condo features three bedrooms, two bathrooms, and modern finishes throughout. Enjoy access to amenities such as a fitness center, swimming pool, and community lounge. Conveniently located near parks, schools, and shopping centers.",
      agent_id: 2
    },
    {
      type: "House",
      image: "house_image7.jpg",
      bedRooms: 4,
      bathRooms: 3,
      address: "555 Cedar Lane, Cedarville",
      id: 3,
      description: "Experience the epitome of luxury in our stunning house located in the picturesque town of Cedarville. This spacious home boasts four bedrooms, three bathrooms, and a host of high-end amenities. Relax in the expansive backyard oasis or entertain guests in the gourmet kitchen. Conveniently situated near top-rated schools and recreational facilities.",
      agent_id: 3
    },
    {
      type: "Townhouse",
      image: "townhouse_image7.jpg",
      bedRooms: 3,
      bahRooms: 2,
      address: "666 Oak Street, Oakdale",
      id: 4,
      description: "Live in style in our chic townhouse nestled in the heart of Oakdale. This modern residence features three bedrooms, two bathrooms, and an open-concept living space. Enjoy the convenience of nearby amenities, including parks, shopping centers, and restaurants.",
      agent_id: 4
    },
    {
      type: "Villa",
      image: "villa_image7.jpg",
      bedRooms: 5,
      bathRooms: 4,
      adress: "777 Palm Avenue, Palmdale",
      id: 5,
      description: "Escape to luxury in our magnificent villa situated in the serene surroundings of Palmdale. This exquisite property boasts five bedrooms, four bathrooms, and breathtaking views of the surrounding landscape. Enjoy resort-style living with amenities such as a private pool, spa, and outdoor entertainment area.",
      agent_id: 5
    },
    {
      type: "Apartment",
      image: "apartment_image8.jpg",
      bedRooms: 1,
      bathRooms: 1,
      adress: "888 Elm Street, Elmdale",
      id: 6,
      description: "Discover the pinnacle of urban living in our stylish one-bedroom apartment located in the heart of Elmdale. This modern residence offers sleek finishes, ample natural light, and access to amenities such as a fitness center and rooftop terrace. With its central location, you'll have easy access to dining, shopping, and entertainment options.",
      agent_id: 6
    },
    {
      type: "Condo",
      image: "condo_image8.jpg",
      bedRooms: 2,
      bathRooms: 2,
      adress: "999 Maple Avenue, Maplefield",
      id: 7,
      description: "Welcome to Maplefield's premier condo community. This elegant two-bedroom condo features luxurious finishes and panoramic views of the surrounding landscape. Residents enjoy access to a range of amenities, including a fitness center, swimming pool, and landscaped gardens.",
      agent_id: 7
    },
    {
      type: "House",
      image: "house_image8.jpg",
      bedRooms: 3,
      bathRooms: 2,
      adress: "1010 Willow Lane, Willowdale",
      id: 8,
      description: "Nestled in the heart of Willowdale, this charming house offers three bedrooms, two bathrooms, and a warm, inviting atmosphere. Featuring a spacious backyard and modern amenities, it's the perfect place to call home. Conveniently located near schools, parks, and shopping centers.",
      agent_id: 8
    },
    {
      type: "Townhouse",
      image: "townhouse_image8.jpg",
      bedRooms: 4,
      bathRooms: 3,
      adress: "1111 Birch Street, Birchville",
      id: 9,
      description: "Experience contemporary living in our stylish townhouse located in the vibrant community of Birchville. This spacious residence boasts four bedrooms, three bathrooms, and an open-concept layout. Enjoy the convenience of nearby amenities, including parks, schools, and recreational facilities.",
      agent_id: 9
    },
    {
      type: "Villa",
      image: "villa_image8.jpg",
      bedRooms: 6,
      bathRooms: 5,
      address: "1212 Palm Lane, Palmtree",
      id: 10,
      description: "Live the life of luxury in our expansive villa nestled in the lush surroundings of Palmtree. This grand estate features six bedrooms, five bathrooms, and opulent amenities throughout. Enjoy the tranquility of the landscaped gardens or entertain guests in the spacious living areas. Conveniently located near top-rated schools and recreational facilities.",
      agent_id: 10
    },
    {
      type: "Apartment",
      image: "apartment_image9.jpg",
      bedRooms: 2,
      bathRooms: 2,
      adress: "1313 Pine Street, Pinewood",
      id: 11,
      description: "Discover modern living in our contemporary two-bedroom apartment located in the sought-after neighborhood of Pinewood. This stylish residence offers sleek finishes, spacious living areas, and access to amenities such as a fitness center and outdoor terrace. With its central location, you'll have easy access to dining, shopping, and entertainment options.",
      agent_id: 11
    },
    {
      type: "Condo",
      image: "condo_image9.jpg",
      bedRooms: 3,
      bahRooms: 2,
      address: "1414 Maple Avenue, Mapleton",
      id: 12,
      description: "Experience luxury living in our spacious three-bedroom condo located in the vibrant community of Mapleton. This elegant residence boasts high-end finishes, panoramic views, and access to amenities such as a fitness center and swimming pool. Enjoy the convenience of nearby shops, restaurants, and recreational facilities.",
      agent_id: 12
},
{
type: "House",
image: "house_image9.jpg",
bedRooms: 4,
bathRooms: 3,
address: "1515 Willow Street, Willowwood",
id: 13,
description: "Welcome to Willowwood's finest family home. This spacious house offers four bedrooms, three bathrooms, and an abundance of natural light. Featuring a modern kitchen, large backyard, and open-concept living areas, it's perfect for entertaining. Conveniently located near parks, schools, and shopping centers.",
agent_id: 13
},
{
type: "Townhouse",
image: "townhouse_image9.jpg",
bedRooms: 3,
bathRoom: 2,
address: "1616 Cedar Avenue, Cedartown",
id: 14,
description: "Live in style in our chic townhouse located in the desirable community of Cedartown. This modern residence features three bedrooms, two bathrooms, and an open-concept layout. Enjoy the convenience of nearby amenities, including parks, shopping centers, and restaurants.",
agent_id: 14
},
{
type: "Villa",
image: "villa_image9.jpg",
bedRooms: 5,
bathRooms: 4,
address:"1717 Palm Street, Palmwood",
id: 15,
description: "Escape to luxury in our stunning villa situated in the tranquil surroundings of Palmwood. This exquisite property boasts five bedrooms, four bathrooms, and a range of opulent amenities. Relax in the private pool, entertain guests in the outdoor living areas, or simply enjoy the breathtaking views. Conveniently located near top-rated schools and recreational facilities.",
agent_id: 15
},
{
type: "Apartment",
image: "apartment_image10.jpg",
bedRooms: 1,
bathRooms: 1,
adress: "1818 Elm Avenue, Elmdale Heights",
id: 16,
description: "Experience urban living at its finest in our stylish one-bedroom apartment located in Elmdale Heights. This modern residence offers sleek finishes, ample natural light, and access to amenities such as a fitness center and rooftop terrace. With its central location, you'll have easy access to dining, shopping, and entertainment options.",
agent_id: 6
},
{
type: "Condo",
image: "condo_image10.jpg",
bedRooms: 2,
bahRooms: 2,
address: "1919 Maple Street, Maplewood Heights",
id: 17,
description: "Welcome to Maplewood Heights' premier condo community. This elegant two-bedroom condo features luxurious finishes and panoramic views of the surrounding landscape. Residents enjoy access to a range of amenities, including a fitness center, swimming pool, and landscaped gardens.",
agent_id: 7
},
{
type: "House",
image: "house_image10.jpg",
bedRooms: 3,
bahRooms: 2,
address: "2020 Willow Lane, Willow Grove",
id: 18,
description: "Nestled in the heart of Willow Grove, this charming house offers three bedrooms, two bathrooms, and a warm, inviting atmosphere. Featuring a spacious backyard and modern amenities, it's the perfect place to call home. Conveniently located near schools, parks, and shopping centers.",
agent_id: 10
},
{
type: "Townhouse",
image: "townhouse_image10.jpg",
bedRooms: 4,
bathRooms: 3,
adress: "2121 Birch Street, Birchwood Park",
id: 19,
description: "Experience contemporary living in our stylish townhouse located in the vibrant community of Birchwood Park. This spacious residence boasts four bedrooms, three bathrooms, and an open-concept layout. Enjoy the convenience of nearby amenities, including parks, schools, and recreational facilities.",
agent_id: 9
},
{
type: "Villa",
image: "villa_image10.jpg",
bedRooms: 6,
bathRooms: 5,
address: "2222 Palm Avenue, Palmdale Park",
id: 20,
description: "Live the life of luxury in our expansive villa nestled in the lush surroundings of Palmdale Park. This grand estate features six bedrooms, five bathrooms, and opulent amenities throughout. Enjoy the tranquility of the landscaped gardens or entertain guests in the spacious living areas. Conveniently located near top-rated schools and recreational facilities.",
agent_id: 2
},
{
type: "Apartment",
image: "apartment_image11.jpg",
bedRooms: 2,
bathRooms: 2,
adress: "2323 Pine Street, Pineville Place",
id: 21,
description: "Discover modern living in our contemporary two-bedroom apartment located in the sought-after neighborhood of Pineville Place. This stylish residence offers sleek finishes, spacious living areas, and access to amenities such as a fitness center and outdoor terrace. With its central location, you'll have easy access to dining, shopping, and entertainment options.",
agent_id: 1
},
{
type: "Condo",
image: "condo_image11.jpg",
bedRooms: 3,
bahRooms: 2,
address: "2424 Maple Avenue, Mapleton Manor",
id: 22,
description: "Experience luxury living in our spacious three-bedroom condo located in the vibrant community of Mapleton Manor. This elegant residence boasts high-end finishes, panoramic views, and access to amenities such as a fitness center and swimming pool. Enjoy the convenience of nearby shops, restaurants, and recreational facilities.",
agent_id: 15
},
{
type: "House",
image: "house_image11.jpg",
bedRooms: 4,
bahRooms: 3,
address: "2525 Willow Lane, Willowwood Estates",
id: 23,
description: "Welcome to Willowwood Estates' finest family home. This spacious house offers four bedrooms, three bathrooms, and an abundance of natural light. Featuring a modern kitchen, large backyard, and open-concept living areas, it's perfect for entertaining. Conveniently located near parks, schools, and shopping centers.",
agent_id: 3
},
{
type: "Townhouse",
image: "townhouse_image11.jpg",
bedRooms: 3,
bathRooms: 2,
adress: "2626 Cedar Avenue, Cedar Creek",
id: 24,
description: "Live in style in our chic townhouse located in the desirable community of Cedar Creek. This modern residence features three bedrooms, two bathrooms, and an open-concept layout. Enjoy the convenience of nearby amenities, including parks, shopping centers, and restaurants.",
agent_id: 4
},
{
type: "Villa",
image: "villa_image11.jpg",
bedRooms: 5,
bathRooms: 4,
address: "2727 Palm Street, Palmwood Place",
id: 25,
"description": "Escape to luxury in ourstunning villa situated in the tranquil surroundings of Palmwood Place. This exquisite property boasts five bedrooms, four bathrooms, and a range of opulent amenities. Relax in the private pool, entertain guests in the outdoor living areas, or simply enjoy the breathtaking views. Conveniently located near top-rated schools and recreational facilities.",
agent_id: 5
},
{
type: "Apartment",
image: "apartment_image12.jpg",
bedRooms: 1,
bathRooms: 1,
address: "2828 Elm Avenue, Elmtree Heights",
id: 26,
description: "Experience urban living at its finest in our stylish one-bedroom apartment located in Elmtree Heights. This modern residence offers sleek finishes, ample natural light, and access to amenities such as a fitness center and rooftop terrace. With its central location, you'll have easy access to dining, shopping, and entertainment options.",
agent_id: 6
},
{
type: "Condo",
image: "condo_image12.jpg",
bedRooms: 2,
bathRooms: 2,
address: "2929 Maple Street, Maplewood Estates",
id: 27,
description: "Welcome to Maplewood Estates' premier condo community. This elegant two-bedroom condo features luxurious finishes and panoramic views of the surrounding landscape. Residents enjoy access to a range of amenities, including a fitness center, swimming pool, and landscaped gardens.",
 agent_id: 7
},
{
type: "House",
image: "house_image12.jpg",
bedRooms: 3,
bathRooms: 2,
address: "3030 Willow Lane, Willowwood Hills",
id: 28,
description: "Nestled in the heart of Willowwood Hills, this charming house offers three bedrooms, two bathrooms, and a warm, inviting atmosphere. Featuring a spacious backyard and modern amenities, it's the perfect place to call home. Conveniently located near schools, parks, and shopping centers.",
 agent_id: 14
},
{
type: "Townhouse",
image: "townhouse_image12.jpg",
bedRooms: 4,
bathRooms: 3,
address: "3131 Birch Street, Birchwood Gardens",
id: 29,
description: "Experience contemporary living in our stylish townhouse located in the vibrant community of Birchwood Gardens. This spacious residence boasts four bedrooms, three bathrooms, and an open-concept layout. Enjoy the convenience of nearby amenities, including parks, schools, and recreational facilities.",
 agent_id: 9
},
{
type: "Villa",
image: "villa_image12.jpg",
bedRooms: 6,
bathRooms: 5,
address: "3232 Palm Avenue, Palmdale Heights",
id: 30,
description: "Live the life of luxury in our expansive villa nestled in the lush surroundings of Palmdale Heights. This grand estate features six bedrooms, five bathrooms, and opulent amenities throughout. Enjoy the tranquility of the landscaped gardens or entertain guests in the spacious living areas. Conveniently located near top-rated schools  nd recretional facilities.",
agent_id: 10
},
{
type: "Apartment",
image: "apartment_image13.jpg",
bedRooms: 2,
bathRooms: 2,
address: "3333 Pine Street, Pinewood Place",
id: 31,
description: "Discover modern living in our contemporary two-bedroom apartment located in the sought-after neighborhood of Pinewood Place. This stylish residence offers sleek finishes, spacious living areas, and access to amenities such as a fitness center and outdoor terrace. With its central location, you'll have easy access to dining,  hopping,and entertainment options.",
agent_id: 1
},
{
type: "Condo",
image: "condo_image13.jpg",
bedRooms: 3,
bathRooms: 2,
address: "3434 Maple Avenue, Mapleton Heights",
id: 32,
description: "Experience luxury living in our spacious three-bedroom condo located in the vibrant community of Mapleton Heights. This elegant residence boasts high-end finishes, panoramic views, and access to amenities such as a fitness center and swimming pool. Enjoy the convenience of nearby shops, restaurants, and recreational facilities.",
 agent_id: 2
},
{
type: "House",
image: "house_image13.jpg",
bedRooms: 4,
bathRooms: 3,
address: "3535 Willow Lane, Willowwood Meadows",
id: 33,
description: "Welcome to Willowwood Meadows' finest family home. This spacious house offers four bedrooms, three bathrooms, and an abundance of natural light. Featuring a modern kitchen, large backyard, and open-concept living areas, it's perfect for entertaining. Conveniently located near parks, schools, and shopping centers.",
 agent_id: 3
},
{
type: "Townhouse",
image: "townhouse_image13.jpg",
bedRooms: 3,
bathRooms: 2,
address: "3636 Cedar Avenue, Cedar Heights",
id: 34,
description: "Live in style in our chic townhouse located in the desirable community of Cedar Heights. This modern residence features three bedrooms, two bathrooms, and an open-concept layout. Enjoy the convenience of nearby amenities, including parks, shopping centers, and restaurants.",
 agent_id: 4
},
{
type: "Villa",
image: "villa_image13.jpg",
bedRooms: 5,
bathRooms: 4,
address: "3737 Palm Street, Palmwood Gardens",
id: 35,
description: "Escape to luxury in our stunning villa situated in the tranquil surroundings of Palmwood Gardens. This exquisite property boasts five bedrooms, four bathrooms, and a range of opulent amenities. Relax in the private pool, entertain guests in the outdoor living areas, or simply enjoy the breathtaking views. Conveniently located near  op-ratedschools and recreational facilities.",
agent_id: 5
}
]
  


export default forSale