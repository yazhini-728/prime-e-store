import { Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  badge,
}: ProductCardProps) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="group relative overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
      {/* Badge */}
      {badge && (
        <div className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground px-2 py-1 rounded-md text-xs font-medium">
          {badge}
        </div>
      )}

      {/* Wishlist Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3 z-10 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Heart className="h-4 w-4" />
      </Button>

      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <CardContent className="p-4">
        {/* Product Name */}
        <h3 className="font-medium text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? "fill-rating text-rating"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-lg font-bold text-price">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <>
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
              <span className="text-sm font-medium text-discount">
                -{discount}%
              </span>
            </>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-accent hover:bg-accent-hover" size="sm">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;