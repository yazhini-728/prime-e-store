import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Import product images
import phoneImage from "@/assets/product-phone.jpg";
import headphonesImage from "@/assets/product-headphones.jpg";
import laptopImage from "@/assets/product-laptop.jpg";
import watchImage from "@/assets/product-watch.jpg";

const products = [
  {
    id: "1",
    name: "Premium Smartphone with 5G",
    price: 799.99,
    originalPrice: 999.99,
    rating: 4.5,
    reviewCount: 1234,
    image: phoneImage,
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "Wireless Noise-Cancelling Headphones",
    price: 249.99,
    originalPrice: 349.99,
    rating: 4.8,
    reviewCount: 892,
    image: headphonesImage,
    badge: "Top Rated",
  },
  {
    id: "3",
    name: "Ultra-Thin Laptop 15.6\" Display",
    price: 1299.99,
    originalPrice: 1599.99,
    rating: 4.6,
    reviewCount: 567,
    image: laptopImage,
    badge: "New Arrival",
  },
  {
    id: "4",
    name: "Smart Fitness Watch with GPS",
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.4,
    reviewCount: 445,
    image: watchImage,
    badge: "Limited Time",
  },
  {
    id: "5",
    name: "Professional Camera Smartphone",
    price: 899.99,
    originalPrice: 1099.99,
    rating: 4.7,
    reviewCount: 678,
    image: phoneImage,
  },
  {
    id: "6",
    name: "Gaming Laptop with RTX Graphics",
    price: 1899.99,
    originalPrice: 2299.99,
    rating: 4.9,
    reviewCount: 234,
    image: laptopImage,
    badge: "Gaming",
  },
  {
    id: "7",
    name: "Studio Quality Headphones",
    price: 399.99,
    originalPrice: 499.99,
    rating: 4.8,
    reviewCount: 156,
    image: headphonesImage,
  },
  {
    id: "8",
    name: "Smartwatch with Heart Monitor",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.5,
    reviewCount: 789,
    image: watchImage,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Categories />
      
      {/* Featured Products */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Featured Products
              </h2>
              <p className="text-muted-foreground">
                Discover our most popular items with amazing deals
              </p>
            </div>
            <Button variant="outline" className="hidden sm:flex">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary-hover">
              Load More Products
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Subscribe to our newsletter and get exclusive deals and early access to new products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-input-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <Button className="bg-accent hover:bg-accent-hover">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">ShopHub</h3>
              <p className="text-background/80 mb-4">
                Your one-stop destination for amazing products at unbeatable prices.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-background/80">
                <li>Electronics</li>
                <li>Fashion</li>
                <li>Home & Garden</li>
                <li>Sports</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-background/80">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Shipping Info</li>
                <li>Returns</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-background/80">
                <li>About Us</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 ShopHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
