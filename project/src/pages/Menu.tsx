import React, { useState } from 'react';
import { Leaf, Flame, WheatOff } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const categories = [
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'soups-salads', name: 'Soups & Salads' },
    { id: 'tandoor', name: 'From the Tandoor' },
    { id: 'veg-mains', name: 'Vegetarian Mains' },
    { id: 'nonveg-mains', name: 'Non-Vegetarian Mains' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const menuItems = {
    appetizers: [
      {
        name: 'Deconstructed Samosa Chaat',
        price: '₹450',
        description: 'Crispy phyllo cups filled with spiced potato mousse, topped with chutneys and pomegranate',
        dietary: ['vegetarian']
      },
      {
        name: 'Tandoor Scallops',
        price: '₹750',
        description: 'Pan-seared scallops with curry leaf oil and coconut foam',
        dietary: ['spicy']
      },
      {
        name: 'Beetroot Tikki Trio',
        price: '₹395',
        description: 'Three varieties of beetroot patties with mint chutney and date tamarind sauce',
        dietary: ['vegetarian', 'vegan']
      },
      {
        name: 'Lamb Galouti Sliders',
        price: '₹650',
        description: 'Melt-in-mouth lamb patties with saffron aioli on mini naan buns',
        dietary: ['spicy']
      }
    ],
    'soups-salads': [
      {
        name: 'Tomato Shorba Cappuccino',
        price: '₹325',
        description: 'Roasted tomato soup with aromatic spices, served with curry leaf foam',
        dietary: ['vegetarian']
      },
      {
        name: 'Quinoa Chaat Salad',
        price: '₹485',
        description: 'Protein-rich quinoa with seasonal vegetables, pomegranate, and tamarind dressing',
        dietary: ['vegetarian', 'gluten-free']
      },
      {
        name: 'Mulligatawny Reimagined',
        price: '₹375',
        description: 'Classic Anglo-Indian soup with lentils, vegetables, and coconut milk',
        dietary: ['vegetarian', 'vegan']
      }
    ],
    tandoor: [
      {
        name: 'Tandoor Lamb Chops',
        price: '₹1,250',
        description: 'Tender lamb chops marinated in yogurt and spices, grilled to perfection',
        dietary: ['spicy']
      },
      {
        name: 'Malai Broccoli',
        price: '₹525',
        description: 'Chargrilled broccoli in creamy cashew and cheese marinade',
        dietary: ['vegetarian']
      },
      {
        name: 'Tandoori Prawns',
        price: '₹875',
        description: 'Jumbo prawns with green chutney marinade and mint yogurt',
        dietary: ['spicy']
      },
      {
        name: 'Paneer Tikka Reinvented',
        price: '₹595',
        description: 'House-made paneer with bell peppers in three different marinades',
        dietary: ['vegetarian']
      }
    ],
    'veg-mains': [
      {
        name: 'Truffle Dal Makhani',
        price: '₹725',
        description: 'Slow-cooked black lentils with butter, cream, and truffle oil',
        dietary: ['vegetarian']
      },
      {
        name: 'Jackfruit Biryani',
        price: '₹695',
        description: 'Fragrant basmati rice with tender jackfruit and aromatic spices',
        dietary: ['vegetarian', 'vegan']
      },
      {
        name: 'Paneer Butter Masala Deconstructed',
        price: '₹650',
        description: 'House paneer with tomato espuma and cashew cream, served with garlic naan',
        dietary: ['vegetarian']
      },
      {
        name: 'Mushroom Tikka Masala',
        price: '₹585',
        description: 'Wild mushrooms in creamy tomato gravy with fenugreek and cream',
        dietary: ['vegetarian']
      }
    ],
    'nonveg-mains': [
      {
        name: 'Butter Chicken 2.0',
        price: '₹850',
        description: 'Our signature dish with tender chicken in velvety tomato-cashew gravy',
        dietary: []
      },
      {
        name: 'Goan Fish Curry Modern',
        price: '₹925',
        description: 'Fresh catch of the day in coconut curry with curry leaves and kokum',
        dietary: ['spicy']
      },
      {
        name: 'Lamb Rogan Josh',
        price: '₹1,150',
        description: 'Slow-braised lamb in Kashmiri spices with yogurt and saffron',
        dietary: ['spicy']
      },
      {
        name: 'Duck Vindaphos',
        price: '₹1,050',
        description: 'Goan-inspired duck curry with palm vinegar and traditional spices',
        dietary: ['spicy']
      }
    ],
    desserts: [
      {
        name: 'Saffron Kheer Brûlée',
        price: '₹425',
        description: 'Traditional rice pudding with a caramelized sugar crust and pistachios',
        dietary: ['vegetarian']
      },
      {
        name: 'Chocolate Samosa',
        price: '₹385',
        description: 'Crispy samosa filled with dark chocolate ganache and cardamom ice cream',
        dietary: ['vegetarian']
      },
      {
        name: 'Gulab Jamun Tiramisu',
        price: '₹450',
        description: 'Italian classic with an Indian twist using gulab jamun and masala chai',
        dietary: ['vegetarian']
      },
      {
        name: 'Coconut Kulfi Sphere',
        price: '₹395',
        description: 'Molecular gastronomy coconut kulfi that melts in your mouth',
        dietary: ['vegetarian', 'gluten-free']
      }
    ],
    beverages: [
      {
        name: 'Saffron Lassi',
        price: '₹285',
        description: 'Traditional yogurt drink infused with saffron and cardamom',
        dietary: ['vegetarian']
      },
      {
        name: 'Masala Chai Martini',
        price: '₹485',
        description: 'Innovative cocktail blending premium vodka with chai spices',
        dietary: []
      },
      {
        name: 'Fresh Lime Soda',
        price: '₹195',
        description: 'House-made lime cordial with sparkling water and fresh mint',
        dietary: ['vegetarian', 'vegan']
      },
      {
        name: 'Mumbai Cutting Chai',
        price: '₹125',
        description: 'Authentic street-style tea served in traditional glasses',
        dietary: ['vegetarian']
      }
    ]
  };

  const getDietaryIcon = (dietary: string) => {
    switch (dietary) {
      case 'vegetarian':
        return <Leaf size={16} className="text-green-600" />;
      case 'vegan':
        return <Leaf size={16} className="text-green-800" />;
      case 'spicy':
        return <Flame size={16} className="text-red-500" />;
      case 'gluten-free':
        return <WheatOff size={16} className="text-blue-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif text-gray-800 mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully crafted dishes that blend traditional Indian flavors with contemporary culinary techniques
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center mb-12 space-x-2 space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-yellow-500 text-black shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-gray-800 mb-8 text-center">
            {categories.find(cat => cat.id === activeCategory)?.name}
          </h2>
          <div className="space-y-6">
            {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <span className="text-xl font-bold text-yellow-600">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-3 leading-relaxed">{item.description}</p>
                <div className="flex items-center space-x-2">
                  {item.dietary.map((diet, dietIndex) => (
                    <div key={dietIndex} className="flex items-center space-x-1">
                      {getDietaryIcon(diet)}
                      <span className="text-sm text-gray-500 capitalize">{diet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif text-gray-800 mb-4">Ready to Experience Our Cuisine?</h3>
            <p className="text-gray-600 mb-6">Book your table now and embark on a culinary journey like no other.</p>
            <a
              href="/book-table"
              className="inline-block bg-yellow-500 text-black px-8 py-3 font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-200"
            >
              Reserve Your Table
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;