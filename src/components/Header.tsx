
import { Button } from "@/components/ui/button";
import { ShoppingBag, Search, Menu, Heart, Book } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-cream shadow-sm border-b border-sage/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-playfair font-bold text-deep-brown">
              Sacred Grace
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-deep-brown hover:text-sage transition-colors">Shop</a>
            <a href="#" className="text-deep-brown hover:text-sage transition-colors">Devotions</a>
            <a href="#" className="text-deep-brown hover:text-sage transition-colors">Prayer Books</a>
            <a href="#" className="text-deep-brown hover:text-sage transition-colors">Jewelry</a>
            <a href="#" className="text-deep-brown hover:text-sage transition-colors">About</a>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-deep-brown hover:text-sage">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-deep-brown hover:text-sage">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-deep-brown hover:text-sage">
              <Book className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-deep-brown hover:text-sage">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-deep-brown hover:text-sage"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-sage/20 py-4">
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-deep-brown hover:text-sage transition-colors py-2">Shop</a>
              <a href="#" className="text-deep-brown hover:text-sage transition-colors py-2">Devotions</a>
              <a href="#" className="text-deep-brown hover:text-sage transition-colors py-2">Prayer Books</a>
              <a href="#" className="text-deep-brown hover:text-sage transition-colors py-2">Jewelry</a>
              <a href="#" className="text-deep-brown hover:text-sage transition-colors py-2">About</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
