import { useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import cartBikini1 from "@/assets/cart-bikini-1.png";
import cartBikini2 from "@/assets/cart-bikini-2.png";
import CheckoutButton from "@/components/ui/CheckoutButton";

interface CartItem {
  id: number;
  name: string;
  sku: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Orange Pink Wellness Competition Suit",
      sku: "BM151-29",
      originalPrice: 426.00,
      salePrice: 379.00,
      discount: 11,
      quantity: 1,
      image: cartBikini1,
    },
    {
      id: 2,
      name: "Orange Pink Wellness Competition Suit",
      sku: "BM151-29",
      originalPrice: 379.00,
      salePrice: 329.00,
      discount: 13,
      quantity: 1,
      image: cartBikini2,
    },
  ]);

  const [discountCode, setDiscountCode] = useState("");

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.salePrice * item.quantity,
    0
  );
  const deliveryFee = 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-background font-montserrat">
      <Header />
      
      <main className="container-main pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-24 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-20">

          {/* Left Column - Shopping Bag */}
          <div className="lg:col-span-2">
            <h1 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6 md:mb-8">Shopping Bag</h1>
            
            <div className="space-y-4 sm:space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-border">
                  {/* Product Image */}
                  <div className="w-16 h-20 sm:w-20 sm:h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 mb-2">
                      <div className="min-w-0">
                        <h3 className="text-xs sm:text-sm font-medium text-foreground truncate">
                          {item.name} ({item.sku})
                        </h3>
                        <div className="flex items-center gap-1 sm:gap-2 mt-1 flex-wrap">
                          <span className="bg-primary text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded">
                            {item.discount}% OFF
                          </span>
                          <span className="text-primary text-[10px] sm:text-xs">Savings on this order</span>
                        </div>
                      </div>
                      <div className="text-left sm:text-right flex sm:flex-col items-center sm:items-end gap-2 sm:gap-0">
                        <p className="text-xs sm:text-sm text-muted-foreground line-through order-2 sm:order-1">
                          $ {item.originalPrice.toFixed(2)}
                        </p>
                        <p className="text-sm sm:text-base font-semibold text-foreground order-1 sm:order-2">
                          $ {item.salePrice.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-3 sm:mt-4">
                      <div className="flex items-center border border-border rounded-none">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center hover:bg-muted transition-colors"
                        >
                          <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        <span className="w-8 h-7 sm:w-10 sm:h-9 flex items-center justify-center text-xs sm:text-sm font-medium border-x border-border">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center hover:bg-muted transition-colors"
                        >
                          <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-foreground transition-colors p-1"
                      >
                        <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {cartItems.length === 0 && (
                <div className="text-center py-8 sm:py-12">
                  <p className="text-muted-foreground text-sm sm:text-base">Your shopping bag is empty</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            {/* Discount Code */}
            <div className="mb-6">
  <h3 className="text-sm font-medium mb-2">Discount</h3>

  <div className="flex gap-2">
    {/* Discount Input */}
    <input
      type="text"
      placeholder="Enter discount code"
      className="
        flex-1
        h-10
        px-3
        rounded-md
        border
        border-pink-300
        bg-pink-50
        text-sm
        placeholder:text-pink-400
        focus:outline-none
        focus:ring-1
        focus:ring-pink-400
        focus:border-pink-400
      "
    />

    {/* Apply Button */}
    <button
      className="
        h-10
        px-4
        rounded-md
        bg-pink-500
        text-white
        text-sm
        font-medium
        hover:bg-pink-600
        transition-colors
      "
    >
      Apply
    </button>
  </div>
</div>


            {/* Payment Summary */}
            <div>
              <h3 className="text-sm sm:text-base font-medium text-foreground mb-3 sm:mb-4">Payment Summary</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-muted-foreground">Delivery fee</span>
                  <span className="text-foreground">$ {deliveryFee.toFixed(2)}</span>
                </div>
                <div className="h-px bg-border my-2 sm:my-3" />
                <div className="flex justify-between">
                  <span className="text-foreground font-medium text-sm sm:text-base">Total</span>
                  <span className="text-foreground font-semibold text-sm sm:text-base">$ {total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <div className="flex justify-end mt-8">
  <CheckoutButton onClick={() => console.log("Checkout")} />
</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
