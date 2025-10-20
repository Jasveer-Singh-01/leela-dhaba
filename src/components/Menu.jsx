import React from 'react';

// Sample menu data
const menuItems = [
    {
        id: 1,
        name: 'Paneer Butter Masala',
        description: 'Creamy and rich paneer curry with aromatic spices.',
        price: '₹250',
        image: 'https://platetopalateblog.com/wp-content/uploads/2020/07/20200506_131905-750x1000.jpg',
    },
    {
        id: 2,
        name: 'Tandoori Chicken',
        description: 'Juicy chicken marinated in spices and grilled to perfection.',
        price: '₹350',
        image: 'https://www.kitchensanctuary.com/wp-content/uploads/2025/07/Tandoori-Chicken-Tall2.jpg',
    },
    {
        id: 3,
        name: 'Veg Biryani',
        description: 'Fragrant basmati rice with mixed vegetables and spices.',
        price: '₹200',
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387',
    },
    {
        id: 4,
        name: 'Gulab Jamun',
        description: 'Soft and sweet Indian dessert soaked in sugar syrup.',
        price: '₹120',
        image: 'https://www.cadburydessertscorner.com/hubfs/dc-website-2022/articles/soft-gulab-jamun-recipe-for-raksha-bandhan-from-dough-to-syrup-all-you-need-to-know/soft-gulab-jamun-recipe-for-raksha-bandhan-from-dough-to-syrup-all-you-need-to-know.webp',
    },
];

function Menu() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Menu</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {menuItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-lg shadow hover:shadow-xl transform hover:scale-105 transition duration-300 overflow-hidden"
                        >
                            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                                <p className="text-gray-600 mb-4">{item.description}</p>
                                <p className="text-green-600 font-bold">{item.price}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
}

export default Menu;
