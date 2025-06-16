
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-deep-brown text-cream py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-playfair font-bold mb-4">Sacred Grace</h3>
            <p className="text-cream/80 mb-6 max-w-md">
              Sharing the beauty of our Catholic faith through carefully curated gifts, 
              devotional items, and spiritual content. Every piece is chosen with prayer 
              and love to help you grow closer to God.
            </p>
            <div className="flex items-center gap-2 text-cream/80">
              <Heart className="h-4 w-4 text-gold" />
              <span className="italic">Made with love and prayer</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-cream/80 hover:text-gold transition-colors">Shop All</a></li>
              <li><a href="#" className="text-cream/80 hover:text-gold transition-colors">Prayer Books</a></li>
              <li><a href="#" className="text-cream/80 hover:text-gold transition-colors">Jewelry</a></li>
              <li><a href="#" className="text-cream/80 hover:text-gold transition-colors">Home Decor</a></li>
              <li><a href="#" className="text-cream/80 hover:text-gold transition-colors">Devotions</a></li>
              <li><a href="#" className="text-cream/80 hover:text-gold transition-colors">About Me</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Connect</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold" />
                <span className="text-cream/80">hello@sacredgrace.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold" />
                <span className="text-cream/80">1-800-PRAYERS</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gold" />
                <span className="text-cream/80">Made with love in the USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-12 pt-8 text-center">
          <p className="text-cream/60">
            © 2024 Sacred Grace. All rights reserved. | 
            <span className="text-gold"> Blessed be God forever.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
