
import { useState } from "react";

interface PinItem {
  id: number;
  type: 'product' | 'blog' | 'video';
  title: string;
  description: string;
  image: string;
  price?: string;
  category: string;
}

const PinterestGrid = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const pins: PinItem[] = [
    {
      id: 1,
      type: 'product',
      title: 'Miraculous Medal Necklace',
      description: 'Beautiful sterling silver pendant with delicate chain',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=600&fit=crop',
      price: '$45.00',
      category: 'Jewelry'
    },
    {
      id: 2,
      type: 'blog',
      title: 'Morning Prayer for Peace',
      description: 'Start your day with this beautiful prayer for inner peace and guidance',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      category: 'Devotions'
    },
    {
      id: 3,
      type: 'video',
      title: 'Rosary Meditation',
      description: 'Join me in praying the Joyful Mysteries with peaceful music',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=500&fit=crop',
      category: 'Prayer'
    },
    {
      id: 4,
      type: 'product',
      title: 'Handcrafted Wooden Rosary',
      description: 'Made from olive wood from the Holy Land',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=650&fit=crop',
      price: '$65.00',
      category: 'Prayer Items'
    },
    {
      id: 5,
      type: 'blog',
      title: 'Saint Teresa of Avila\'s Wisdom',
      description: 'Reflections on the Interior Castle and spiritual growth',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop',
      category: 'Saints'
    },
    {
      id: 6,
      type: 'product',
      title: 'Sacred Heart Candle Set',
      description: 'Hand-poured candles with sacred imagery',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=550&fit=crop',
      price: '$28.00',
      category: 'Home Decor'
    },
    {
      id: 7,
      type: 'video',
      title: 'Daily Examen Prayer',
      description: 'Learn this Ignatian prayer practice for spiritual reflection',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=450&fit=crop',
      category: 'Prayer'
    },
    {
      id: 8,
      type: 'product',
      title: 'Guardian Angel Bracelet',
      description: 'Delicate charm bracelet with angel protection',
      image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=350&fit=crop',
      price: '$32.00',
      category: 'Jewelry'
    },
    {
      id: 9,
      type: 'blog',
      title: 'Advent Wreath Blessing',
      description: 'Traditional prayers and customs for your Advent season',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=600&fit=crop',
      category: 'Liturgical'
    },
    {
      id: 10,
      type: 'product',
      title: 'Vintage Holy Water Font',
      description: 'Blessed ceramic font for your home entrance',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=500&fit=crop',
      price: '$38.00',
      category: 'Home Decor'
    },
    {
      id: 11,
      type: 'video',
      title: 'Stations of the Cross',
      description: 'Meditative journey through Christ\'s passion',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=550&fit=crop',
      category: 'Prayer'
    }
  ];

  const getPinHeight = (index: number) => {
    const heights = ['h-64', 'h-72', 'h-80', 'h-96', 'h-64', 'h-88'];
    return heights[index % heights.length];
  };

  return (
    <section className="py-16 px-4 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-playfair font-bold text-deep-brown mb-4">
            Discover Sacred Treasures
          </h3>
          <p className="text-lg text-deep-brown/70 max-w-2xl mx-auto">
            Explore our curated collection of Catholic gifts, devotional content, and spiritual inspiration
          </p>
        </div>

        <div className="masonry-grid">
          {pins.map((pin, index) => (
            <div
              key={pin.id}
              className={`masonry-item bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:scale-105 ${getPinHeight(index)}`}
              onMouseEnter={() => setHoveredItem(pin.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative h-full">
                <img
                  src={pin.image}
                  alt={pin.title}
                  className="w-full h-3/4 object-cover"
                />
                
                {/* Overlay for video pins */}
                {pin.type === 'video' && (
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-sm">
                    ▶ Video
                  </div>
                )}
                
                {/* Content */}
                <div className="p-4 h-1/4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-sage font-medium uppercase tracking-wide">
                        {pin.category}
                      </span>
                      {pin.price && (
                        <span className="text-gold font-bold">
                          {pin.price}
                        </span>
                      )}
                    </div>
                    <h4 className="font-playfair font-semibold text-deep-brown text-sm mb-1 line-clamp-2">
                      {pin.title}
                    </h4>
                    <p className="text-xs text-deep-brown/70 line-clamp-2">
                      {pin.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover overlay */}
                {hoveredItem === pin.id && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300">
                    <button className="bg-white text-deep-brown px-4 py-2 rounded-lg font-medium hover:bg-sage hover:text-white transition-colors">
                      {pin.type === 'product' ? 'View Product' : pin.type === 'video' ? 'Watch Now' : 'Read More'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PinterestGrid;
