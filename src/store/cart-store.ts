import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { toast, Bounce } from 'react-toastify';

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
  AddToCart: (product: CartInterface) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
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
              cart: [...state.cart, { ...product, quantity: product.quantity ? product.quantity : 1, total: product.productPrice }],
            }));
          }
          toast.success('Product added!', {
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
              backgroundColor: '#22c55e', // Custom background color
              color: '#ffffff' // Custom text color
            }
          });
        },
        updateQuantity: (productId, quantity) => {
          set((state) => ({
            cart: state.cart.map((item) =>
              item.productId === productId
                ? { ...item, quantity, total: item.productPrice * quantity }
                : item
            ),
          }));
        },
        removeFromCart: (productId) => {
          set((state) => ({
            cart: state.cart.filter((item) => item.productId !== productId),
          }));
          toast.error('Item removed!', {
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
              color: '#ffffff' // Custom text color
            }
          });
        },
      }),
      { name: 'cart-store' }
    )
  )
);
