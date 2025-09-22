import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin } from 'lucide-react';

const Home = () => {
  const menuHighlights = [
    {
      name: 'Deconstructed Samosa Chaat',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Modern twist on the classic street food favorite'
    },
    {
      name: 'Tandoor Lamb Chops',
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Perfectly spiced and grilled to perfection'
    },
    {
      name: 'Saffron Kheer Brûlée',
      image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Traditional dessert with a contemporary presentation'
    },
    {
      name: 'Modern Biryani Bowl',
      image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Aromatic basmati rice with your choice of protein'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      review: 'An absolutely incredible dining experience. The ambiance is perfect and the food is outstanding!',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      review: 'The modern take on traditional Indian cuisine is brilliant. Every dish tells a story.',
      rating: 5
    },
    {
      name: 'Anita Desai',
      review: 'Perfect for special occasions. The staff is attentive and the presentation is beautiful.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black to-gray-800">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        ></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            The <span className="text-yellow-500">Saffron</span> Table
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            A Modern Taste of Tradition
          </p>
          <Link
            to="/book-table"
            className="inline-flex items-center space-x-2 bg-yellow-500 text-black px-8 py-4 text-lg font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105"
          >
            <span>Book a Table</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-gray-800 mb-8">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At The Saffron Table, we believe that food is not just sustenance—it's an art form, a cultural bridge, and a celebration of tradition. Our chefs masterfully blend time-honored Indian recipes with innovative culinary techniques, creating dishes that honor the past while embracing the future.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Located in the heart of Koramangala, we offer an intimate fine-dining experience where every meal is a journey through the diverse flavors of India, reimagined for the contemporary palate. Each dish tells a story, each spice has a purpose, and every visit creates lasting memories.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-800 mb-4">Signature Dishes</h2>
            <p className="text-xl text-gray-600">Experience our chef's most celebrated creations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuHighlights.map((dish, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-12">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{dish.name}</h3>
                  <p className="text-gray-600 text-sm">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-flex items-center space-x-2 bg-yellow-500 text-black px-6 py-3 font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-200"
            >
              <span>View Full Menu</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-800 mb-4">What Our Guests Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.review}"</p>
                <p className="font-semibold text-gray-800">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-6">Visit Us</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-yellow-500" size={24} />
                  <div>
                    <p className="text-lg font-medium">The Saffron Table</p>
                    <p className="text-gray-300">Koramangala, Bengaluru</p>
                  </div>
                </div>
                <div className="text-gray-300">
                  <p><strong>Hours:</strong></p>
                  <p>Monday - Thursday: 12:00 PM - 11:00 PM</p>
                  <p>Friday - Sunday: 12:00 PM - 12:00 AM</p>
                </div>
                <div className="pt-4">
                  <Link
                    to="/book-table"
                    className="inline-flex items-center space-x-2 bg-yellow-500 text-black px-6 py-3 font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-200"
                  >
                    <span>Reserve Your Table</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="aspect-w-16 aspect-h-12">
              <img 
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Restaurant Interior"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;