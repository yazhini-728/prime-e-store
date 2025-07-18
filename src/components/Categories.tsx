import { Smartphone, Headphones, Laptop, Watch, Gamepad2, Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { name: "Smartphones", icon: Smartphone, count: "2,341 items" },
  { name: "Audio", icon: Headphones, count: "1,829 items" },
  { name: "Laptops", icon: Laptop, count: "953 items" },
  { name: "Wearables", icon: Watch, count: "1,247 items" },
  { name: "Gaming", icon: Gamepad2, count: "2,156 items" },
  { name: "Cameras", icon: Camera, count: "487 items" },
];

const Categories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our wide range of categories to find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="group cursor-pointer hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <category.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.count}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;