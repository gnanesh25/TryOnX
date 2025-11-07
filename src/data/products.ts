export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: string;
  gender: string;
  occasion: string;
  fabric: string;
  color: string;
  image: string;
  sizes: string[];
  fit: "Relaxed" | "Regular" | "Slim";
  description: string;
  careInstructions: string;
  delivery: string;
  returns: string;
  recommendations: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic White Button-Down Shirt",
    brand: "Urban Chic",
    price: 59.99,
    category: "Top",
    gender: "Unisex",
    occasion: "Formal",
    fabric: "Cotton",
    color: "White",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
    fit: "Regular",
    description: "A timeless white button-down shirt perfect for any formal occasion. Made with premium cotton for all-day comfort.",
    careInstructions: "Machine wash cold, tumble dry low, iron if needed",
    delivery: "Free shipping on orders over $50. Delivery in 3-5 business days.",
    returns: "30-day return policy. Items must be unworn with tags attached.",
    recommendations: ["2", "3", "4"]
  },
  {
    id: "2",
    name: "Slim Fit Black Trousers",
    brand: "Modern Edge",
    price: 79.99,
    category: "Bottom",
    gender: "Unisex",
    occasion: "Formal",
    fabric: "Polyester Blend",
    color: "Black",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=500&fit=crop",
    sizes: ["28", "30", "32", "34", "36"],
    fit: "Slim",
    description: "Sleek black trousers with a modern slim fit. Perfect for office wear or evening events.",
    careInstructions: "Dry clean only",
    delivery: "Free shipping on orders over $50. Delivery in 3-5 business days.",
    returns: "30-day return policy. Items must be unworn with tags attached.",
    recommendations: ["1", "5", "6"]
  },
  {
    id: "3",
    name: "Floral Summer Dress",
    brand: "Blossom & Co",
    price: 89.99,
    category: "Dress",
    gender: "Women",
    occasion: "Casual",
    fabric: "Cotton",
    color: "Floral",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
    fit: "Regular",
    description: "Breezy floral dress perfect for summer days. Features a comfortable fit and beautiful print.",
    careInstructions: "Machine wash cold, hang dry",
    delivery: "Free shipping on orders over $50. Delivery in 3-5 business days.",
    returns: "30-day return policy. Items must be unworn with tags attached.",
    recommendations: ["7", "8"]
  },
  {
    id: "4",
    name: "Navy Blue Blazer",
    brand: "Executive Style",
    price: 149.99,
    category: "Top",
    gender: "Men",
    occasion: "Formal",
    fabric: "Wool Blend",
    color: "Navy",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=500&fit=crop",
    sizes: ["S", "M", "L", "XL", "XXL"],
    fit: "Regular",
    description: "Sophisticated navy blazer perfect for business meetings and formal events.",
    careInstructions: "Dry clean only",
    delivery: "Free shipping on orders over $50. Delivery in 3-5 business days.",
    returns: "30-day return policy. Items must be unworn with tags attached.",
    recommendations: ["1", "2", "5"]
  },
  {
    id: "5",
    name: "Casual Denim Jeans",
    brand: "Street Vibe",
    price: 69.99,
    category: "Bottom",
    gender: "Unisex",
    occasion: "Casual",
    fabric: "Denim",
    color: "Blue",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
    sizes: ["28", "30", "32", "34", "36", "38"],
    fit: "Relaxed",
    description: "Classic denim jeans with a comfortable relaxed fit. Perfect for everyday wear.",
    careInstructions: "Machine wash cold, tumble dry low",
    delivery: "Free shipping on orders over $50. Delivery in 3-5 business days.",
    returns: "30-day return policy. Items must be unworn with tags attached.",
    recommendations: ["6", "7", "8"]
  },
  {
    id: "6",
    name: "Graphic Print T-Shirt",
    brand: "Youth Culture",
    price: 34.99,
    category: "Top",
    gender: "Unisex",
    occasion: "Casual",
    fabric: "Cotton",
    color: "Black",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    fit: "Regular",
    description: "Trendy graphic t-shirt with bold print. Soft cotton fabric for maximum comfort.",
    careInstructions: "Machine wash cold, tumble dry low",
    delivery: "Free shipping on orders over $50. Delivery in 3-5 business days.",
    returns: "30-day return policy. Items must be unworn with tags attached.",
    recommendations: ["5", "7"]
  },
  {
    id: "7",
    name: "Elegant Silk Scarf",
    brand: "Luxe Accents",
    price: 49.99,
    category: "Accessories",
    gender: "Women",
    occasion: "Formal",
    fabric: "Silk",
    color: "Red",
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=500&fit=crop",
    sizes: ["One Size"],
    fit: "Regular",
    description: "Luxurious silk scarf that adds elegance to any outfit. Perfect accessory for formal events.",
    careInstructions: "Hand wash only, air dry",
    delivery: "Free shipping on orders over $50. Delivery in 3-5 business days.",
    returns: "30-day return policy. Items must be unworn with tags attached.",
    recommendations: ["3", "4"]
  },
  {
    id: "8",
    name: "Traditional Kurta Set",
    brand: "Heritage Threads",
    price: 119.99,
    category: "Ethnic",
    gender: "Unisex",
    occasion: "Ethnic",
    fabric: "Cotton",
    color: "Cream",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e5?w=400&h=500&fit=crop",
    sizes: ["S", "M", "L", "XL", "XXL"],
    fit: "Relaxed",
    description: "Beautiful traditional kurta set perfect for cultural events and celebrations.",
    careInstructions: "Machine wash cold, hang dry",
    delivery: "Free shipping on orders over $50. Delivery in 3-5 business days.",
    returns: "30-day return policy. Items must be unworn with tags attached.",
    recommendations: ["3"]
  }
];
