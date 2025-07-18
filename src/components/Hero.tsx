import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Gift, Truck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-16 lg:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Amazing Deals
                <span className="block text-accent">Every Day</span>
              </h1>
              <p className="text-lg lg:text-xl text-primary-foreground/80 max-w-md">
                Discover millions of products from trusted sellers worldwide. 
                Shop with confidence and enjoy fast, free delivery.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Explore Categories
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="bg-primary-foreground/10 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <Truck className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium">Free Shipping</p>
                <p className="text-xs text-primary-foreground/60">On orders $50+</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-foreground/10 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <Zap className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium">Fast Delivery</p>
                <p className="text-xs text-primary-foreground/60">Same day available</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-foreground/10 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <Gift className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium">Daily Deals</p>
                <p className="text-xs text-primary-foreground/60">Up to 70% off</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative lg:flex justify-center hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-3xl opacity-20 transform scale-150"></div>
              <div className="relative bg-background/10 backdrop-blur rounded-2xl p-8 border border-primary-foreground/20">
                <div className="space-y-4">
                  <div className="h-4 bg-primary-foreground/20 rounded"></div>
                  <div className="h-4 bg-primary-foreground/20 rounded w-3/4"></div>
                  <div className="h-8 bg-accent rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;