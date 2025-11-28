import React, { useState, useMemo, useRef, MouseEvent } from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2, MessageCircle, Search, Filter, SlidersHorizontal, Package, ArrowUpDown, Eye, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import Pic1 from "@/assets/Pic1.jpeg";
import Pic2 from "@/assets/Pic2.jpeg";
import Pic3 from "@/assets/Pic3.jpeg";
import Pic4 from "@/assets/Pic4.jpeg";
import Pic5 from "@/assets/Pic5.jpeg";
import Pic6 from "@/assets/Pic6.jpeg";
import Pic7 from "@/assets/Pic7.jpeg";
import Pic8 from "@/assets/Pic8.jpeg";
import Pic9 from "@/assets/Pic9.jpeg";
import Pic10 from "@/assets/Pic10.jpeg";
import Pic11 from "@/assets/Pic11.jpeg";
import Pic12 from "@/assets/Pic12.jpeg";
import Pic13 from "@/assets/Pic13.jpeg";
import Pic14 from "@/assets/Pic14.jpeg";
import Pic15 from "@/assets/Pic15.jpeg";
import Pic16 from "@/assets/Pic16.jpeg";
import Pic17 from "@/assets/Pic17.jpeg";
import Pic18 from "@/assets/Pic18.jpeg";
import Pic19 from "@/assets/Pic19.jpeg";
import Pic20 from "@/assets/Pic20.jpeg";
import Pic21 from "@/assets/Pic21.jpeg";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  badge?: string;
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Temperature Bottle",
    price: 350,
    originalPrice: 400,
    image: "https://images.pexels.com/photos/4210779/pexels-photo-4210779.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/4210779/pexels-photo-4210779.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4210778/pexels-photo-4210778.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/7262365/pexels-photo-7262365.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5591618/pexels-photo-5591618.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "Bottle",
    badge: "Trending",
    description: "5 Colours"
  },
  {
    id: 2,
    name: "Sipper Bottles 600ml",
    price: 450,
    image: "https://images.pexels.com/photos/4202481/pexels-photo-4202481.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/4202481/pexels-photo-4202481.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4202484/pexels-photo-4202484.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/7163619/pexels-photo-7163619.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "Bottle",
    description: "600ML"
  },
   {
    id: 1,
    name: "Temperature Bottle",
    price: 350,
    originalPrice: 400,
    image: Pic1,
    category: "Bottle",
    badge: "Trending",
    description: "5 Colours"
  },
  {
    id: 2,
    name: "Sipper Bottles 600ml",
    price: 450,
    image: Pic2,
    category: "Bottle",
    description: "600ML"
  },
  {
    id: 3,
    name: "Sipper Bottle 750ml",
    price: 550,
    image: Pic2,
    category: "Bottle",
    badge: "Best",
    description: "750ML"
  },
  {
    id: 4,
    name: "Heart Handle Mugs",
    price: 350,
    image: Pic3,
    category: "Mug",
    badge: "Best",
    description: "6 Colours"
  },
  {
    id: 5,
    name: "Regular Handle Mugs",
    price: 320,
    image: Pic4,
    category: "Mug",
    badge: "Trending",
    description: "3 Tones"
  },
   {
    id: 6,
    name: "Vaccum Flasks Sets",
    price: 450,
    image: Pic5,
    category: "Flasks",
   
    description: "3 Tones"
  },
  {
    id: 7,
    name: "Desk Table Clock Organizer",
    price: 600,
    image: Pic6,
    category: "Clock",
    description: "Clock Organizer"
  },
   {
    id: 8,
    name: "Metal Pen",
    price: 100,
    image: Pic7,
    category: "Pen",
    description: "Quality Depends on Price"
  },
   {
    id: 9,
    name: "Gold Foil Pen",
    price: 300,
    image: Pic8,
    category: "Pen",
    description: "With Individual Free Gift Box"
  },
    {
    id: 10,
    name: "Colour Mugs",
    price: 320,
    image: Pic9,
    category: "Mug",
    description: "Quantity depends on price"
  },
  {
    id: 11,
    name: "Wallet Engraving",
    price: 550,
    image: Pic10,
    category: "Wallet",
    description: "Wallet with names"
  },
   {
    id: 12,
    name: "2 in 1 Combo Set Doctor Special Gifts",
    price: 600,
    image: Pic11,
    category: "Combo",
    description: "2 in 1 Combo"
  },
     {
    id: 13,
    name: "Wallet Naming",
    price: 350,
    image: Pic12,
    category: "Wallet",
    description: "Name on wallet"
  },
     {
    id: 14,
    name: "Table Top Frame",
    price: 490,
    image: Pic13,
    category: "Frame",
    description: "Picture on Frame"
  },
   {
    id: 15,
    name: "White Mug",
    price: 250,
    image: Pic14,
    category: "Mug",
    description: "Quantity Depends On Price"
  },
    {
    id: 16,
    name: "Design Mug",
    price: 250,
    image: Pic15,
    category: "Mug",
    description: "Quantity Depends On Price"
  },
     {
    id: 17,
    name: "Sipper Bottle 750ml",
    price: 550,
    image: Pic16,
    category: "Bottle",
    description: "Quantity Depends On Price"
  },
   {
    id: 18,
    name: "Wallet Naming",
    price: 350,
    image: Pic17,
    category: "Wallet",
    description: "Name on Wallet"
  },
  {
    id: 19,
    name: "2 in 1 Combo",
    price: 550,
    image: Pic18,
    category: "Pen",
    description: "2in1 Combo "
  },
  {
    id: 20,
    name: "Imported Cushions",
    price: 300,
    image: Pic19,
    category: "Cushion",
    description: "Size: 8x8 Approx "
  },
   {
    id: 21,
    name: "MDF wall Hangling Frame Heart Edition ",
    price: 990,
    image: Pic20,
    category: "Frame",
    description: "Wall Hangling Frame "
  },
    {
    id: 22,
    name: "Illusion LED Lamp",
    price: 950,
    image: Pic21,
    category: "Lamp",
    description: "LED Lamp "
  },
];

export default function GiftStoreCart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const imageRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
    return ['All', ...uniqueCategories];
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (searchQuery.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product =>
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    const sorted = [...filtered];
    switch (sortBy) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return sorted;
  }, [searchQuery, selectedCategory, sortBy]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, change: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const getItemInCart = (productId: number) => {
    return cart.find(item => item.id === productId);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    const orderDetails = cart
      .map(item => `${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`)
      .join('%0A');

    const total = getTotalPrice();
    const message = `*New Order from Creative Print Zone*%0A%0A${orderDetails}%0A%0A*Total: ₹${total}*%0A%0APlease confirm my order. Thank you!`;

    const whatsappNumber = '919581195889';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappURL, '_blank');
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSortBy('featured');
  };

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (searchQuery.trim()) count++;
    if (selectedCategory !== 'All') count++;
    if (sortBy !== 'featured') count++;
    return count;
  }, [searchQuery, selectedCategory, sortBy]);

  const openQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setCurrentImageIndex(0);
    setIsZoomed(false);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
    setCurrentImageIndex(0);
    setIsZoomed(false);
  };

  const nextImage = () => {
    if (quickViewProduct?.images) {
      setCurrentImageIndex((prev) =>
        prev === quickViewProduct.images!.length - 1 ? 0 : prev + 1
      );
      setIsZoomed(false);
    }
  };

  const prevImage = () => {
    if (quickViewProduct?.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? quickViewProduct.images!.length - 1 : prev - 1
      );
      setIsZoomed(false);
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoomPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  return (
    <div id="products" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header with Brand */}
      <header className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Creative Print Zone
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Premium Gift Store</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-pink-50 to-purple-50 px-4 py-2 rounded-lg">
                <Package className="w-4 h-4 text-pink-600" />
                <span className="text-sm font-medium text-gray-700">{products.length} Products</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Search and Filter Section */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
          <div className="flex gap-2 sm:gap-3 mb-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Search className="text-gray-400 w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search by name, category, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent focus:bg-white text-sm sm:text-base transition-all duration-200 placeholder:text-gray-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden relative bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span className="hidden sm:inline text-sm font-medium">Filters</span>
              {activeFiltersCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center ring-2 ring-white">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          {/* Desktop Filters */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-3 flex-1">
                <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-600">
                  <Filter className="w-4 h-4" />
                  <span>Category:</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-md scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-600">
                  <ArrowUpDown className="w-4 h-4" />
                  <span>Sort:</span>
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-gray-100 border-0 rounded-lg text-sm font-medium text-gray-700 focus:ring-2 focus:ring-pink-500 focus:bg-white transition-all duration-200 cursor-pointer hover:bg-gray-200"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>

              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-pink-600 hover:text-pink-700 font-semibold whitespace-nowrap flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-pink-50 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear All
                </button>
              )}
            </div>
          </div>

          {/* Mobile Filter Panel */}
          {isFilterOpen && (
            <div className="lg:hidden mt-4 p-5 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 shadow-lg space-y-5 animate-fadeIn">
              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Filter className="w-4 h-4 text-pink-600" />
                  Category
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-md'
                          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <ArrowUpDown className="w-4 h-4 text-pink-600" />
                  Sort By
                </h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white transition-all"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>

              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="w-full text-sm text-pink-600 hover:text-pink-700 font-semibold py-3 border-2 border-pink-300 rounded-xl hover:bg-pink-50 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Clear All Filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-600">
              Showing <span className="font-bold text-gray-900 text-base">{filteredProducts.length}</span> of <span className="font-semibold">{products.length}</span> products
            </p>
            {activeFiltersCount > 0 && (
              <span className="px-2.5 py-1 bg-pink-100 text-pink-700 text-xs font-semibold rounded-full">
                {activeFiltersCount} {activeFiltersCount === 1 ? 'filter' : 'filters'}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full mb-6">
              <Package className="w-10 h-10 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">We couldn't find any products matching your filters. Try adjusting your search criteria.</p>
            <button
              onClick={clearFilters}
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map(product => {
              const itemInCart = getItemInCart(product.id);
              const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

              return (
                <div
                  key={product.id}
                  className="group bg-white overflow-hidden transition-all duration-300 border border-gray-100 hover:border-pink-200 hover:-translate-y-1 cursor-pointer"
                  onClick={() => openQuickView(product)}
                >
                  <div className="relative overflow-hidden h-48 sm:h-64">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openQuickView(product);
                        }}
                        className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
                      >
                        <Eye className="w-5 h-5" />
                        <span className="hidden sm:inline">Quick View</span>
                      </button>
                    </div>

                    {product.badge && (
                      <span
                        className={`absolute top-3 left-3 px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-lg backdrop-blur-sm ${
                          product.badge === 'Trending'
                            ? 'bg-gradient-to-r from-pink-500 to-pink-600'
                            : 'bg-gradient-to-r from-green-500 to-green-600'
                        }`}
                      >
                        {product.badge}
                      </span>
                    )}

                    {discount > 0 && (
                      <span className="absolute top-3 right-3 px-2.5 py-1.5 bg-red-500 text-white text-xs font-bold rounded-lg shadow-lg">
                        {discount}% OFF
                      </span>
                    )}
                  </div>

                  <div className="p-4 sm:p-5" onClick={(e) => e.stopPropagation()}>
                    <p className="text-xs font-bold text-pink-600 uppercase tracking-wider mb-2">
                      {product.category}
                    </p>

                    <h3 className="text-sm sm:text-base font-bold text-gray-900 min-h-[40px] sm:min-h-[48px] line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-500 mb-3 line-clamp-2 hidden sm:block">
                      {product.description}
                    </p>

                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-xl sm:text-2xl font-bold bg-black to-purple-600 bg-clip-text text-transparent">
                        ₹{product.price.toLocaleString()}
                      </span>

                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    {itemInCart ? (
                      <div className="flex items-center justify-center bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-300 rounded-xl overflow-hidden">
                        <button
                          onClick={() => updateQuantity(product.id, -1)}
                          className="p-3 hover:bg-pink-100 transition-colors flex-1"
                        >
                          <Minus className="w-5 h-5 text-pink-600 mx-auto" />
                        </button>

                        <span className="px-4 font-bold text-pink-600 text-lg min-w-[60px] text-center border-x-2 border-pink-300">
                          {itemInCart.quantity}
                        </span>

                        <button
                          onClick={() => updateQuantity(product.id, 1)}
                          className="p-3 hover:bg-pink-100 transition-colors flex-1"
                        >
                          <Plus className="w-5 h-5 text-pink-600 mx-auto" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(product)}
                        className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-3 px-4 font-semibold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Enhanced Quick View Modal with Zoom */}
      {quickViewProduct && (
        <>
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity animate-fadeIn"
            onClick={closeQuickView}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 pointer-events-none">
            <div
              className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-6xl max-h-[95vh] overflow-hidden pointer-events-auto animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col lg:flex-row h-full max-h-[95vh]">
                {/* Enhanced Image Gallery Section with Zoom */}
                <div className="lg:w-3/5 bg-gradient-to-br from-gray-50 to-gray-100 relative flex flex-col">
                  <button
                    onClick={closeQuickView}
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 bg-white/95 backdrop-blur-sm hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                  </button>

                  {/* Main Image with Zoom */}
                  <div className="flex-1 relative flex items-center justify-center p-4 sm:p-8 overflow-hidden">
                    <div
                      ref={imageRef}
                      className="relative w-96 h-96 flex items-center justify-center cursor-crosshair"
                      onMouseMove={handleMouseMove}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img
                        src={quickViewProduct.images?.[currentImageIndex] || quickViewProduct.image}
                        alt={quickViewProduct.name}
                        className="w-full h-full object-contain rounded-xl sm:rounded-2xl shadow-2xl transition-transform duration-200"
                        style={{
                          transform: isZoomed ? 'scale(2)' : 'scale(1)',
                          transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                        }}
                      />

                      {/* Zoom Indicator */}
                      {!isZoomed && (
                        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2">
                          <ZoomIn className="w-4 h-4" />
                          <span className="hidden sm:inline">Hover to zoom</span>
                        </div>
                      )}
                    </div>

                    {/* Navigation Arrows */}
                    {quickViewProduct.images && quickViewProduct.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all hover:scale-110 z-10"
                        >
                          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all hover:scale-110 z-10"
                        >
                          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                        </button>
                      </>
                    )}

                    {/* Image Counter */}
                    {quickViewProduct.images && quickViewProduct.images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium z-10">
                        {currentImageIndex + 1} / {quickViewProduct.images.length}
                      </div>
                    )}
                  </div>

                  {/* Thumbnail Gallery */}
                  {quickViewProduct.images && quickViewProduct.images.length > 1 && (
                    <div className="p-3 sm:p-4 bg-white border-t border-gray-200">
                      <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {quickViewProduct.images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setCurrentImageIndex(idx);
                              setIsZoomed(false);
                            }}
                            className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                              currentImageIndex === idx
                                ? 'border-pink-500 ring-2 ring-pink-200 scale-105'
                                : 'border-gray-200 hover:border-gray-300 opacity-60 hover:opacity-100'
                            }`}
                          >
                            <img
                              src={img}
                              alt={`${quickViewProduct.name} ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Product Details Section */}
                <div className="lg:w-2/5 p-5 sm:p-6 lg:p-8 overflow-y-auto">
                  <div className="space-y-4 sm:space-y-6">
                    {/* Badge and Category */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 sm:px-3 py-1 bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider rounded-full">
                        {quickViewProduct.category}
                      </span>
                      {quickViewProduct.badge && (
                        <span className="px-2.5 sm:px-3 py-1 bg-gradient-to-r from-pink-500 to-pink-600 text-white text-xs font-bold rounded-full">
                          {quickViewProduct.badge}
                        </span>
                      )}
                    </div>

                    {/* Product Name */}
                    <div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        {quickViewProduct.name}
                      </h2>
                      <p className="text-sm sm:text-base text-gray-600">{quickViewProduct.description}</p>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 sm:gap-3 py-3 sm:py-4 border-y border-gray-200">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                        ₹{quickViewProduct.price.toLocaleString()}
                      </span>
                      {quickViewProduct.originalPrice && (
                        <>
                          <span className="text-lg sm:text-xl text-gray-400 line-through">
                            ₹{quickViewProduct.originalPrice.toLocaleString()}
                          </span>
                          <span className="px-2 sm:px-2.5 py-1 bg-red-100 text-red-600 text-xs sm:text-sm font-bold rounded-lg">
                            {Math.round(((quickViewProduct.originalPrice - quickViewProduct.price) / quickViewProduct.originalPrice) * 100)}% OFF
                          </span>
                        </>
                      )}
                    </div>

                    {/* Add to Cart Section */}
                    <div className="space-y-3">
                      {(() => {
                        const itemInCart = getItemInCart(quickViewProduct.id);
                        return itemInCart ? (
                          <div className="flex items-center justify-center bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-300 rounded-xl overflow-hidden">
                            <button
                              onClick={() => updateQuantity(quickViewProduct.id, -1)}
                              className="p-3 sm:p-4 hover:bg-pink-100 transition-colors flex-1"
                            >
                              <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600 mx-auto" />
                            </button>
                            <span className="px-4 sm:px-6 font-bold text-pink-600 text-xl sm:text-2xl min-w-[60px] sm:min-w-[80px] text-center border-x-2 border-pink-300">
                              {itemInCart.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(quickViewProduct.id, 1)}
                              className="p-3 sm:p-4 hover:bg-pink-100 transition-colors flex-1"
                            >
                              <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600 mx-auto" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => {
                              addToCart(quickViewProduct);
                            }}
                            className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                          >
                            <ShoppingCart className="w-5 h-5" />
                            Add to Cart
                          </button>
                        );
                      })()}
                    </div>

                    {/* Additional Info */}
                    <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 space-y-2">
                      <p className="text-xs sm:text-sm text-gray-700 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                        Premium quality product
                      </p>
                      <p className="text-xs sm:text-sm text-gray-700 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                        Fast delivery available
                      </p>
                      <p className="text-xs sm:text-sm text-gray-700 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                        Secure checkout via WhatsApp
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 sm:bottom-8 right-2 sm:right-4 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-full p-4 shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 z-40 hover:scale-110"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center ring-4 ring-white animate-pulse">
            {getTotalItems()}
          </span>
        </button>
      )}

      {/* Cart Sidebar Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity animate-fadeIn"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[440px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-5 sm:p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-1">Shopping Cart</h2>
              <p className="text-pink-100 text-sm">{getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in your cart</p>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-5 sm:p-6 bg-gray-50">
          {cart.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full mb-6">
                <ShoppingCart className="w-10 h-10 text-pink-600" />
              </div>
              <p className="text-gray-900 text-lg font-semibold mb-2">Your cart is empty</p>
              <p className="text-gray-500 text-sm">Add items to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.id} className="bg-white rounded-2xl p-4 flex gap-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 mb-1 text-sm line-clamp-2">{item.name}</h3>
                    <p className="text-pink-600 font-bold mb-3 text-base">₹{item.price.toLocaleString()}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-2 hover:bg-gray-200 transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4 text-gray-700" />
                        </button>
                        <span className="px-4 font-bold text-gray-900 min-w-[40px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-2 hover:bg-gray-200 transition-colors"
                        >
                          <Plus className="w-4 h-4 text-gray-700" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 transition-all p-2 rounded-lg"
                        title="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-gray-200 p-5 sm:p-6 bg-white">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-4 mb-5">
              <div className="flex justify-between items-center">
                <span className="text-base sm:text-lg font-semibold text-gray-700">Subtotal</span>
                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  ₹{getTotalPrice().toLocaleString()}
                </span>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-xl font-bold text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Proceed to Checkout
            </button>
            <p className="text-xs text-gray-500 text-center mt-3 flex items-center justify-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Secure checkout via WhatsApp
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
