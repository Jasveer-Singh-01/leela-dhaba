// import React, { useState } from 'react';
// import { useCart } from '../context/CartContext';

// const menuItems = [
//   {
//     id: 1,
//     name: 'Paneer Butter Masala',
//     description: 'Creamy and rich paneer curry with aromatic spices.',
//     price: '₹250',
//     image:
//       'https://platetopalateblog.com/wp-content/uploads/2020/07/20200506_131905-750x1000.jpg',
//   },
//   {
//     id: 2,
//     name: 'Tandoori Chicken',
//     description: 'Juicy chicken marinated in spices and grilled to perfection.',
//     price: '₹350',
//     image:
//       'https://www.kitchensanctuary.com/wp-content/uploads/2025/07/Tandoori-Chicken-Tall2.jpg',
//   },
//   {
//     id: 3,
//     name: 'Veg Biryani',
//     description: 'Fragrant basmati rice with mixed vegetables and spices.',
//     price: '₹200',
//     image:
//       'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=387',
//   },
//   {
//     id: 4,
//     name: 'Gulab Jamun',
//     description: 'Soft and sweet Indian dessert soaked in sugar syrup.',
//     price: '₹120',
//     image:
//       'https://www.cadburydessertscorner.com/hubfs/dc-website-2022/articles/soft-gulab-jamun-recipe-for-raksha-bandhan-from-dough-to-syrup-all-you-need-to-know/soft-gulab-jamun-recipe-for-raksha-bandhan-from-dough-to-syrup-all-you-need-to-know.webp',
//   },
// ];

// function Menu() {
//   const { addToCart, cart } = useCart();
//   const [search, setSearch] = useState('');
//   const [sortOrder, setSortOrder] = useState('asc');

//   const filteredItems = menuItems
//     .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
//     .sort((a, b) => {
//       const priceA = parseInt(a.price.replace('₹', ''));
//       const priceB = parseInt(b.price.replace('₹', ''));
//       return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
//     });

//   return (
//     <section className="py-20 bg-gray-50 min-h-screen">
//       <div className="container mx-auto px-4">
//         {/* Search + Sort Controls */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-8">
//           <h2 className="text-3xl font-bold text-center md:text-left mb-4 md:mb-0">
//             Our Menu
//           </h2>
//           <div className="flex flex-col sm:flex-row gap-4 items-center">
//             <input
//               type="text"
//               placeholder="Search menu..."
//               className="border border-gray-300 rounded-lg p-2 w-64 focus:ring-2 focus:ring-green-400"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             <select
//               value={sortOrder}
//               onChange={(e) => setSortOrder(e.target.value)}
//               className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400"
//             >
//               <option value="asc">Sort by: Price (Low → High)</option>
//               <option value="desc">Sort by: Price (High → Low)</option>
//             </select>
//           </div>
//         </div>

//         {/* Cart Summary */}
//         <div className="flex justify-end mb-6">
//           <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
//             <span className="text-green-800 font-semibold">
//               🛒 Cart: {cart.length} item{cart.length !== 1 && 's'}
//             </span>
//           </div>
//         </div>

//         {/* Menu Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {filteredItems.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-lg shadow hover:shadow-xl transform hover:scale-105 transition duration-300 overflow-hidden"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4 flex flex-col justify-between h-52">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
//                   <p className="text-gray-600 text-sm mb-4">
//                     {item.description}
//                   </p>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <p className="text-green-600 font-bold">{item.price}</p>
//                   <button
//                     onClick={() => addToCart(item)}
//                     className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition text-sm"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {filteredItems.length === 0 && (
//           <p className="text-center text-gray-500 mt-10">
//             No dishes found. Try a different search.
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }

// export default Menu;

import React, { useState } from 'react';
import Modal from 'react-modal';
import { useCart } from '../context/CartContext';

Modal.setAppElement('#root'); // Important for accessibility

const menuItems = [
  {
    id: 1,
    name: 'Paneer Butter Masala',
    description: 'Creamy and rich paneer curry with aromatic spices.',
    price: '₹250',
    image:
      'https://platetopalateblog.com/wp-content/uploads/2020/07/20200506_131905-750x1000.jpg',
    ingredients: 'Paneer, Tomato, Cream, Butter, Spices, Cashew paste',
  },
  {
    id: 2,
    name: 'Tandoori Chicken',
    description: 'Juicy chicken marinated in spices and grilled to perfection.',
    price: '₹350',
    image:
      'https://www.kitchensanctuary.com/wp-content/uploads/2025/07/Tandoori-Chicken-Tall2.jpg',
    ingredients: 'Chicken, Yogurt, Garlic, Ginger, Chili, Garam Masala',
  },
  {
    id: 3,
    name: 'Veg Biryani',
    description: 'Fragrant basmati rice with mixed vegetables and spices.',
    price: '₹200',
    image:
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=387',
    ingredients: 'Rice, Mixed Veggies, Saffron, Spices, Mint, Ghee',
  },
  {
    id: 4,
    name: 'Gulab Jamun',
    description: 'Soft and sweet Indian dessert soaked in sugar syrup.',
    price: '₹120',
    image:
      'https://www.cadburydessertscorner.com/hubfs/dc-website-2022/articles/soft-gulab-jamun-recipe-for-raksha-bandhan-from-dough-to-syrup-all-you-need-to-know/soft-gulab-jamun-recipe-for-raksha-bandhan-from-dough-to-syrup-all-you-need-to-know.webp',
    ingredients: 'Milk solids, Flour, Sugar syrup, Cardamom, Rose water',
  },
];

function Menu() {
  const { addToCart, cart } = useCart();
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  // Modal State
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedItem(null);
  };

  const filteredItems = menuItems
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      const priceA = parseInt(a.price.replace('₹', ''));
      const priceB = parseInt(b.price.replace('₹', ''));
      return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
    });

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Search + Sort Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-center md:text-left mb-4 md:mb-0">
            Our Menu
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="Search menu..."
              className="border border-gray-300 rounded-lg p-2 w-64 focus:ring-2 focus:ring-green-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400"
            >
              <option value="asc">Sort by: Price (Low → High)</option>
              <option value="desc">Sort by: Price (High → Low)</option>
            </select>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="flex justify-end mb-6">
          <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
            <span className="text-green-800 font-semibold">
              🛒 Cart: {cart.length} item{cart.length !== 1 && 's'}
            </span>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow hover:shadow-xl transform hover:scale-105 transition duration-300 overflow-hidden cursor-pointer"
              onClick={() => openModal(item)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-52">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-green-600 font-bold">{item.price}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // prevent modal open
                      addToCart(item);
                    }}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No dishes found. Try a different search.
          </p>
        )}

        {/* Modal */}
        {selectedItem && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Menu Details"
            className="bg-white rounded-lg shadow-lg max-w-2xl mx-auto mt-24 p-6 outline-none"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50"
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 text-xl"
            >
              ✖
            </button>
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{selectedItem.name}</h3>
            <p className="text-gray-700 mb-2">{selectedItem.description}</p>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Ingredients:</strong> {selectedItem.ingredients}
            </p>
            <p className="text-lg text-green-600 font-bold mb-4">
              {selectedItem.price}
            </p>
            <button
              onClick={() => {
                addToCart(selectedItem);
                closeModal();
              }}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Add to Cart
            </button>
          </Modal>
        )}
      </div>
    </section>
  );
}

export default Menu;

