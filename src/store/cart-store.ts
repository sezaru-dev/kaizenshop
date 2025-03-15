import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface CartInterface {
  productId: number;
  productName: string;
  productPrice: number;
  productImage: string;
  quantity: number;
  total: number;
}

interface CartState {
  cart: CartInterface[];
  subtotal: number,
  total: number,
  recalculateTotals: () => void,
  AddToCart: (product: CartInterface) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        subtotal: 0,
        total: 15, // Default total includes the shipping fee
        // Helper function to recalculate subtotal and total
        recalculateTotals: () => {
          const cart = get().cart;
          const subtotal = Number(cart.reduce((sum, item) => sum + item.total, 0).toFixed(2)); // Sum of all item totals
          const total = subtotal + 15; // Add shipping fee to subtotal
          set({
            subtotal, // Ensure two decimals for subtotal
            total: Number(total.toFixed(2))   ,       // Ensure two decimals for total
          });
        },
        AddToCart: (product) => {
          const cart = get().cart;
          const productExist = cart.find((item) => item.productId === product.productId);
          if (productExist) {
            set((state) => ({
              cart: state.cart.map((item) =>
                item.productId === product.productId
                  ? { ...item, quantity: item.quantity + product.quantity, total: item.total + item.productPrice }
                  : item
              ),
            }));
          } else {
            set((state) => ({
              cart: [...state.cart, { ...product, quantity: product.quantity || 1, total: product.productPrice }],
            }));
          }
          get().recalculateTotals(); // Update subtotal and total
          
        },
        updateQuantity: (productId, quantity) => {
          set((state) => ({
            cart: state.cart.map((item) =>
              item.productId === productId
                ? { ...item, quantity, total: item.productPrice * quantity }
                : item
            ),
          }));
          get().recalculateTotals(); // Update subtotal and total
        },
        removeFromCart: (productId) => {
          set((state) => ({
            cart: state.cart.filter((item) => item.productId !== productId),
          }));
          get().recalculateTotals(); // Update subtotal and total
/*           toast.error('Item removed!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            style: {
              backgroundColor: '#ef4444', // Custom background color
              color: '#ffffff', // Custom text color
            },
          }); */
        },
      }),
      { name: 'cart-store' }
    )
  )
);


