import { signal } from "@preact/signals";

export interface CartItem {
   id: number;
   name: string;
   price: number;
   quantity: number;
   image: string;
}

export const cart = signal<CartItem[]>(loadCartFromStorage());
export const countItemCart = signal<number>(0);
calculateCountItems();

function calculateCountItems() {
   if (cart.value.length === 0) {
      countItemCart.value = 0;
      return;
   }
   let count = 0;
   cart.value.forEach((x) => {
      count += x.quantity;
   });
   countItemCart.value = count;
}

function loadCartFromStorage(): CartItem[] {
   try {
      const data = localStorage.getItem("cart");
      return data ? JSON.parse(data) : [];
   } catch {
      return [];
   }
}

function saveCartToStorage(items: CartItem[]) {
   localStorage.setItem("cart", JSON.stringify(items));
}

export function addToCart(product: Omit<CartItem, "quantity">) {
   const existing = cart.value.find((p) => p.id === product.id);
   if (existing) {
      existing.quantity += 1;
   } else {
      cart.value = [...cart.value, { ...product, quantity: 1 }];
   }
   saveCartToStorage(cart.value);
   calculateCountItems();
}

export function removeFromCart(productId: number) {
   cart.value = cart.value.filter((item) => item.id !== productId);
   saveCartToStorage(cart.value);
   calculateCountItems();
}

export function clearCart() {
   cart.value = [];
   saveCartToStorage([]);
   calculateCountItems();
}

export function getItemsCart(): CartItem[] {
   const data = loadCartFromStorage();
   return data;
}

export function joinCartWithDb(dbItems: CartItem[]) {
   const localItems = getItemsCart();
   localItems.forEach((item) => {
      const dbItem = dbItems.find((dbItem) => dbItem.id === item.id);
      if (dbItem) {
         dbItem.quantity += item.quantity;
      } else {
         dbItems.push(item);
      }
   });
}
