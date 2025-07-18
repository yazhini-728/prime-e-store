import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="font-bold text-2xl text-primary">
            ShopHub
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 ml-8">
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Electronics
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Fashion
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Home & Garden
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Sports
          </Button>
        </nav>

        {/* Search Bar */}
        <div className="flex-1 mx-4 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              className="pl-10 border-input-border focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button className="hidden sm:inline-flex bg-accent hover:bg-accent-hover">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;