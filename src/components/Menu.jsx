// Menu.jsx
import React, { useState, useMemo } from 'react';
import Modal from 'react-modal';
import { useCart } from '../context/CartContext';
import frenchFries from '../assets/images/menu/fast_food/french-fries.jpg';
import veggieBurger from '../assets/images/menu/fast_food/veggie-burger.jpg';
import cheeseBurger from '../assets/images/menu/fast_food/cheese-burger.png';
import paneerBurger from '../assets/images/menu/fast_food/paneer-burger.png';
import vegSlaw from '../assets/images/menu/fast_food/veg-slaw.jpg';
import grilledSandwich from '../assets/images/menu/fast_food/grill-sandwich.jpg';
import clubSandwich from '../assets/images/menu/fast_food/club-sandwich.png';
import paneerSlaw from '../assets/images/menu/fast_food/paneer-slaw.jpg';
import periPeriFries from '../assets/images/menu/fast_food/peri-peri-fries.jpg';
import doubleAalooTikki from '../assets/images/menu/fast_food/tii.jpeg';

Modal.setAppElement('#root');

/* --------------------------------------------------------------
   MENU DATA (same as you had)
   -------------------------------------------------------------- */
const menuItems = {
  continental: {
    fastFood: [
      { id: 1, name: "French Fries", description: "Crispy golden potato fries served with ketchup.", price: "₹100", image:  frenchFries },
      { id: 2, name: "Peri Peri Fries", description: "Crispy fries coated with spicy peri-peri seasoning.", price: "₹120", image: periPeriFries},
      { id: 3, name: "Veg Burger", description: "Classic burger with fresh vegetables and cheese.", price: "₹100", image: veggieBurger },
      { id: 4, name: "Veg Burger With Cheese", description: "Juicy veggie patty topped with melted cheese and sauces.", price: "₹120", image: cheeseBurger },
      { id: 5, name: "Paneer Burger", description: "Grilled paneer patty with lettuce, onion and spicy sauce.", price: "₹120", image: paneerBurger },
      { id: 6, name: "Double Aloo Tikki Burger", description: "Loaded double aloo tikki burger with creamy mayo.", price: "₹130", image: doubleAalooTikki },
      { id: 7, name: "Lettuce Grilled Sandwich", description: "Grilled sandwich layered with lettuce and veggies.", price: "₹120", image: grilledSandwich },
      { id: 8, name: "Veg Club Sandwich", description: "Triple-layered sandwich stuffed with veggies and sauces.", price: "₹130", image: clubSandwich },
      { id: 9, name: "Veg Slaw", description: "Fresh vegetable coleslaw with creamy dressing.", price: "₹110", image: vegSlaw },
      { id: 10, name: "Paneer Slaw", description: "Creamy coleslaw with marinated paneer chunks.", price: "₹130", image: paneerSlaw }
    ],
    pizza: [
      { id: 11, name: "Cheese Pizza", description: "Classic mozzarella cheese pizza with soft crust.", price: "₹120", image: "https://images.unsplash.com/photo-1601924582971-b8d8e07a7a1b" },
      { id: 12, name: "Onion, Capsicum, Tomato Pizza (6 Inch)", description: "Loaded with fresh onion, tomato and bell peppers.", price: "₹130", image: "https://images.unsplash.com/photo-1601924582971-b8d8e07a7a1b" },
      { id: 13, name: "Paneer Pizza", description: "Spicy paneer topping with cheese and herbs.", price: "₹150", image: "https://images.unsplash.com/photo-1628840042765-356c8cf9a654" },
      { id: 14, name: "Mushroom Pizza", description: "Cheesy pizza topped with sautéed mushrooms.", price: "₹150", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be5b" },
      { id: 15, name: "Veg Mix Pizza", description: "A mix of vegetables, cheese and oregano on thin crust.", price: "₹160", image: "https://images.unsplash.com/photo-1564936281403-23b8dd93b07f" },
      { id: 16, name: "Italian Pizza", description: "Authentic Italian herbs and cheese on crispy base.", price: "₹170", image: "https://images.unsplash.com/photo-1628840042765-356c8cf9a654" },
      { id: 17, name: "Onion Pizza", description: "Simple and cheesy pizza topped with fresh onions.", price: "₹140", image: "https://images.unsplash.com/photo-1628840042765-356c8cf9a654" }
    ],
    southIndian: [
      { id: 18, name: "Masala Dosa", description: "Crispy dosa stuffed with spicy potato filling.", price: "₹120", image: "https://images.unsplash.com/photo-1603894584373-5a6d66f47a5e" },
      { id: 19, name: "Paper Dosa", description: "Extra crispy and thin dosa served with chutney.", price: "₹130", image: "https://images.unsplash.com/photo-1659424210973-86e5e4b448a3" },
      { id: 20, name: "Plain Dosa", description: "Classic dosa served with coconut chutney and sambar.", price: "₹120", image: "https://images.unsplash.com/photo-1619252584172-971d1f9d7e04" },
      { id: 21, name: "Rawa Dosa", description: "Crispy dosa made with semolina and spices.", price: "₹130", image: "https://images.unsplash.com/photo-1603894584373-5a6d66f47a5e" },
      { id: 22, name: "Onion Rawa Dosa", description: "Semolina dosa topped with chopped onions and chili.", price: "₹140", image: "https://images.unsplash.com/photo-1626072913592-4b2e3e8c911b" },
      { id: 23, name: "Paneer Masala Dosa", description: "Stuffed dosa with spiced paneer filling.", price: "₹150", image: "https://images.unsplash.com/photo-1631891397442-86f8d13d85b3" },
      { id: 24, name: "Mysore Masala Dosa", description: "Spicy red chutney spread dosa with potato filling.", price: "₹140", image: "https://images.unsplash.com/photo-1626072913592-4b2e3e8c911b" },
      { id: 25, name: "Onion Masala Dosa", description: "Masala dosa layered with onions and spices.", price: "₹140", image: "https://images.unsplash.com/photo-1603894584373-5a6d66f47a5e" },
      { id: 26, name: "Plain Uttapam", description: "Soft and fluffy South Indian pancake.", price: "₹120", image: "https://images.unsplash.com/photo-1659424210973-86e5e4b448a3" },
      { id: 27, name: "Mix Veg Uttapam", description: "Uttapam topped with mixed vegetables and chili.", price: "₹130", image: "https://images.unsplash.com/photo-1626072913592-4b2e3e8c911b" },
      { id: 28, name: "Onion Uttapam", description: "Soft uttapam topped with onions and coriander.", price: "₹130", image: "https://images.unsplash.com/photo-1659424210973-86e5e4b448a3" },
      { id: 29, name: "Paneer Uttapam", description: "Loaded with grated paneer and spices.", price: "₹140", image: "https://images.unsplash.com/photo-1626072913592-4b2e3e8c911b" },
      { id: 30, name: "Butter Paneer Dosa", description: "Rich dosa stuffed with butter and paneer filling.", price: "₹150", image: "https://images.unsplash.com/photo-1631891397442-86f8d13d85b3" },
      { id: 31, name: "Butter Masala Dosa", description: "Classic masala dosa enriched with butter.", price: "₹140", image: "https://images.unsplash.com/photo-1603894584373-5a6d66f47a5e" },
      { id: 32, name: "Butter Paper Dosa", description: "Ultra-thin dosa brushed with butter and crisped.", price: "₹150", image: "https://images.unsplash.com/photo-1659424210973-86e5e4b448a3" },
      { id: 33, name: "Set Dosa", description: "Soft mini dosas served in a set of three.", price: "₹150", image: "https://images.unsplash.com/photo-1619252584172-971d1f9d7e04" },
      { id: 34, name: "Leela Giri Dosa", description: "Special dosa recipe with signature masala blend.", price: "₹190", image: "https://images.unsplash.com/photo-1631891397442-86f8d13d85b3" }
    ]
  },
  chinese: {
    soups: [
      { id: 35, name: "Veg Manchow Soup", description: "Spicy soup with vegetables and crispy noodles.", price: "₹110", image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f" },
      { id: 36, name: "Hot & Sour Soup", description: "Tangy and spicy soup loaded with flavors.", price: "₹110", image: "https://images.unsplash.com/photo-1546069901-eacef0df6022" },
      { id: 37, name: "Sweet Corn Soup", description: "Creamy sweet corn soup with soft kernels.", price: "₹100", image: "https://images.unsplash.com/photo-1625944230942-b4b511bdbd49" },
      { id: 38, name: "Lemon Coriander Soup", description: "Refreshing soup with lemon zest and herbs.", price: "₹100", image: "https://images.unsplash.com/photo-1546069901-eacef0df6022" },
      { id: 39, name: "Tomato Soup", description: "Classic tomato soup topped with cream.", price: "₹100", image: "https://images.unsplash.com/photo-1617196034796-37f07b95c1f0" }
    ],
    snacks: [
      { id: 40, name: "Veg Chowmein", description: "Stir-fried noodles with mixed vegetables.", price: "₹130", image: "https://images.unsplash.com/photo-1634381724649-3f8c3e8a0951" },
      { id: 41, name: "Hakka Noodles", description: "Authentic Hakka noodles tossed in soy sauce.", price: "₹130", image: "https://images.unsplash.com/photo-1617196034796-37f07b95c1f0" },
      { id: 42, name: "Chilli Garlic Noodles", description: "Noodles tossed with spicy chilli-garlic sauce.", price: "₹130", image: "https://images.unsplash.com/photo-1625944230942-b4b511bdbd49" },
      { id: 43, name: "Singapore Noodles", description: "Aromatic noodles with curry flavor and veggies.", price: "₹150", image: "https://images.unsplash.com/photo-1634381724649-3f8c3e8a0951" },
      { id: 44, name: "Paneer Salt & Pepper", description: "Crispy fried paneer tossed with peppers.", price: "₹170", image: "https://images.unsplash.com/photo-1606755962773-0f13b9b5fba0" },
      { id: 45, name: "American Chopsuey", description: "Crispy noodles topped with tangy gravy.", price: "₹180", image: "https://images.unsplash.com/photo-1617196034796-37f07b95c1f0" },
      { id: 46, name: "Chinese Chilly Soup", description: "Hot Chinese soup with a punch of spice.", price: "₹130", image: "https://images.unsplash.com/photo-1546069901-eacef0df6022" }
    ],
    friedRice: [
      { id: 47, name: "Fried Rice", description: "Classic veg fried rice with soy sauce and veggies.", price: "₹180", image: "https://images.unsplash.com/photo-1617196034796-37f07b95c1f0" },
      { id: 48, name: "Schezwan Fried Rice", description: "Spicy rice tossed in Schezwan sauce.", price: "₹210", image: "https://images.unsplash.com/photo-1634381724649-3f8c3e8a0951" },
      { id: 49, name: "Manchurian Gravy", description: "Veg balls in rich Indo-Chinese gravy.", price: "₹210", image: "https://images.unsplash.com/photo-1617196034796-37f07b95c1f0" },
      { id: 50, name: "Manchurian Dry", description: "Crispy veg balls tossed in spicy sauce.", price: "₹210", image: "https://images.unsplash.com/photo-1617196034796-37f07b95c1f0" },
      { id: 51, name: "Chilly Paneer Gravy", description: "Paneer in tangy chilli garlic sauce.", price: "₹230", image: "https://images.unsplash.com/photo-1606755962773-0f13b9b5fba0" },
      { id: 52, name: "Chilly Paneer Dry", description: "Dry version of chilli paneer appetizer.", price: "₹230", image: "https://images.unsplash.com/photo-1606755962773-0f13b9b5fba0" },
      { id: 53, name: "Chilly Veg Noodles", description: "Hot and spicy noodles with vegetables.", price: "₹210", image: "https://images.unsplash.com/photo-1634381724649-3f8c3e8a0951" },
      { id: 54, name: "Honey Chilly Potato", description: "Crispy potatoes glazed with honey and chilli.", price: "₹180", image: "https://images.unsplash.com/photo-1625944230942-b4b511bdbd49" },
      { id: 55, name: "Spring Roll", description: "Crispy rolls filled with spiced veggies.", price: "₹160", image: "https://images.unsplash.com/photo-1590080875831-c8c12a989a3d" }
    ],
    pasta: [
      { id: 56, name: "White Sauce Pasta", description: "Creamy pasta in rich white sauce.", price: "₹160", image: "https://images.unsplash.com/photo-1625944230942-b4b511bdbd49" },
      { id: 57, name: "Red Sauce Pasta", description: "Tangy tomato-based Italian pasta.", price: "₹150", image: "https://images.unsplash.com/photo-1572449043416-55f4685c9bbf" },
      { id: 58, name: "Pink Sauce Pasta", description: "Fusion of red and white sauces with herbs.", price: "₹170", image: "https://images.unsplash.com/photo-1625944230942-b4b511bdbd49" }
    ]
  }
};

const beverages = [
  { id: 1, name: "Cold Coffee", price: 180, description: "Chilled blend of coffee, milk, and sugar topped with whipped cream.", image: "/images/beverages/cold-coffee.jpg" },
  { id: 2, name: "Fresh Lime Soda", price: 120, description: "Refreshing mix of lime juice, soda, and mint — sweet or salty as you prefer.", image: "/images/beverages/fresh-lime-soda.jpg" },
  { id: 3, name: "Mojito", price: 200, description: "Cool and zesty combination of mint, lime, and soda — the perfect refresher.", image: "/images/beverages/mojito.jpg" },
  { id: 4, name: "Hot Chocolate", price: 160, description: "Smooth, rich hot chocolate topped with whipped cream and cocoa dust.", image: "/images/beverages/hot-chocolate.jpg" },
  { id: 5, name: "Iced Tea", price: 150, description: "Chilled tea with lemon and a hint of sweetness, served over ice.", image: "/images/beverages/iced-tea.jpg" }
];

/* --------------------------------------------------------------
   Helper – strip ₹ and convert to number
   -------------------------------------------------------------- */
const parsePrice = (price) => Number(String(price).replace(/[^0-9.-]+/g, '')) || 0;

/* --------------------------------------------------------------
   Flatten categories for tabs
   -------------------------------------------------------------- */
const allCategories = [
  ...Object.entries(menuItems.continental).map(([key, items]) => ({
    key: `continental-${key}`,
    label:
      key === 'fastFood' ? 'Fast Food' :
      key === 'pizza' ? 'Pizza' :
      key === 'southIndian' ? 'South Indian' : key,
    items
  })),
  ...Object.entries(menuItems.chinese).map(([key, items]) => ({
    key: `chinese-${key}`,
    label:
      key === 'soups' ? 'Soups' :
      key === 'snacks' ? 'Snacks' :
      key === 'friedRice' ? 'Fried Rice' :
      key === 'pasta' ? 'Pasta' : key,
    items
  })),
  { key: 'beverages', label: 'Beverages', items: beverages }
];

/* --------------------------------------------------------------
   MAIN COMPONENT
   -------------------------------------------------------------- */
export default function Menu() {
  const { addToCart, cart } = useCart();

  // UI state
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedCategory, setSelectedCategory] = useState(allCategories[0].key);

  // Modal state
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

  /* ----------------------------------------------------------
     Current items (filter + sort)
     ---------------------------------------------------------- */
  const currentItems = useMemo(() => {
    const cat = allCategories.find(c => c.key === selectedCategory);
    if (!cat) return [];

    return cat.items
      .filter(i => i.name?.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => {
        const pa = parsePrice(a.price);
        const pb = parsePrice(b.price);
        return sortOrder === 'asc' ? pa - pb : pb - pa;
      });
  }, [selectedCategory, search, sortOrder]);

  /* ----------------------------------------------------------
     Card component
     ---------------------------------------------------------- */
  const Card = ({ item }) => (
    <div
      key={item.id}
      className="bg-white rounded-lg shadow hover:shadow-xl transform hover:scale-105 transition duration-300 overflow-hidden cursor-pointer"
      onClick={() => openModal(item)}
    >
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col justify-between h-52">
        <div>
          <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
          <p className="text-gray-600 text-sm mb-4">{item.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-green-600 font-bold">₹{parsePrice(item.price)}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(item);
            }}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-center md:text-left mb-4 md:mb-0">
            Our Menu
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="Search in this category..."
              className="border border-gray-300 rounded-lg p-2 w-64 focus:ring-2 focus:ring-green-400 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400 outline-none"
            >
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Cart badge */}
        <div className="flex justify-end mb-6">
          <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
            <span className="text-green-800 font-semibold">
              Cart: {cart?.length ?? 0} item{cart?.length !== 1 && 's'}
            </span>
          </div>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap gap-3 mb-10">
          {allCategories.map(cat => (
            <button
              key={cat.key}
              onClick={() => {
                setSelectedCategory(cat.key);
                setSearch('');   // optional: clear search when switching
              }}
              className={`px-5 py-2 rounded-full font-medium transition ${
                selectedCategory === cat.key
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Current category title */}
        <h3 className="text-2xl font-bold capitalize border-b-2 border-green-400 inline-block pb-1 mb-6">
          {allCategories.find(c => c.key === selectedCategory)?.label}
        </h3>

        {/* Grid */}
        {currentItems.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentItems.map(item => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-12">
            {search
              ? `No items match “${search}” in this category.`
              : 'This category is empty.'}
          </p>
        )}

        {/* Modal */}
        {selectedItem && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Menu Item"
            className="relative bg-white rounded-lg shadow-lg max-w-2xl mx-auto mt-20 p-6 outline-none"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50"
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl"
              aria-label="Close"
            >
              x
            </button>

            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-64 object-cover rounded mb-4"
            />

            <h3 className="text-2xl font-bold mb-2">{selectedItem.name}</h3>
            <p className="text-gray-700 mb-3">{selectedItem.description}</p>

            {selectedItem.ingredients && (
              <p className="text-sm text-gray-500 mb-3">
                <strong>Ingredients:</strong> {selectedItem.ingredients}
              </p>
            )}

            <p className="text-lg text-green-600 font-bold mb-5">
              ₹{parsePrice(selectedItem.price)}
            </p>

            <button
              onClick={() => {
                addToCart(selectedItem);
                closeModal();
              }}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Add to Cart
            </button>
          </Modal>
        )}
      </div>
    </section>
  );
}