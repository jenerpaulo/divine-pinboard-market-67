
const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-cream to-sage/10 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-playfair font-bold text-deep-brown mb-6">
          Sacred Treasures for
          <span className="text-sage block">Faithful Hearts</span>
        </h2>
        <p className="text-lg md:text-xl text-deep-brown/80 mb-8 max-w-2xl mx-auto">
          Discover beautiful Catholic gifts, devotional items, and spiritual treasures 
          to deepen your faith journey. Each piece is chosen with love and prayer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-sage text-white rounded-lg hover:bg-sage/90 transition-colors font-medium">
            Shop Collection
          </button>
          <button className="px-8 py-3 border-2 border-sage text-sage rounded-lg hover:bg-sage hover:text-white transition-colors font-medium">
            Read Devotions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
