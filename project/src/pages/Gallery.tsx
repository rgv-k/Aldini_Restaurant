import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Restaurant Interior - Main Dining Area',
      category: 'interior'
    },
    {
      src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Deconstructed Samosa Chaat',
      category: 'food'
    },
    {
      src: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Tandoor Lamb Chops',
      category: 'food'
    },
    {
      src: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Elegant Table Setting',
      category: 'interior'
    },
    {
      src: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Saffron Kheer Brûlée',
      category: 'food'
    },
    {
      src: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Modern Biryani Bowl',
      category: 'food'
    },
    {
      src: 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Bar Area',
      category: 'interior'
    },
    {
      src: 'https://images.pexels.com/photos/1438669/pexels-photo-1438669.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Traditional Indian Curry',
      category: 'food'
    },
    {
      src: 'https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Private Dining Room',
      category: 'interior'
    },
    {
      src: 'https://images.pexels.com/photos/1410236/pexels-photo-1410236.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Naan Bread Selection',
      category: 'food'
    },
    {
      src: 'https://images.pexels.com/photos/761794/pexels-photo-761794.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Chef at Work',
      category: 'experience'
    },
    {
      src: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Guests Enjoying Dinner',
      category: 'experience'
    }
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif text-gray-800 mb-4">Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a visual journey through The Saffron Table - from our exquisite dishes to our elegant ambiance
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => openLightbox(image.src)}
            >
              <div className="aspect-w-16 aspect-h-12 relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:brightness-75 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif text-gray-800 mb-4">Ready to Experience This in Person?</h3>
            <p className="text-gray-600 mb-6">
              Join us at The Saffron Table and create your own memorable dining experience
            </p>
            <a
              href="/book-table"
              className="inline-block bg-yellow-500 text-black px-8 py-3 font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-200"
            >
              Reserve Your Table
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-screen object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;