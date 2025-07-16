import { JSX } from "preact";
import { addToCart,removeFromCart } from "../services/cart-service.ts";

interface Product{
  id: number;
  name: string;
  image: string;
  price: number;

}

interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  action?: "buy" | "cart" | "back" | "goto" | "delete-item";
  product: Product;
  targetUrl?: string;
}

function cart(product: Product) {
  if (product.id === 0) {
    console.error("Product ID is required to add to cart");
  }
  addToCart({ id : product.id ,name:product.name, price:product.price, image:product.image});
}

function deleteItem(product: Product) {
  if (product.id === 0) {
    console.error("Product ID is required to add to cart");
  }
  removeFromCart(product.id);
}

export function Button({ action, product, targetUrl, children, ...rest }: ButtonProps) {
  const handleClick = () => {
    switch (action) {
      case "buy":
        console.log(`Producto ${product.name} comprado`);
        break;
      case "cart":
        cart(product);
        break;
      case "back":
        history.back();
        break;
      case "goto":
        if (targetUrl) globalThis.location.href = targetUrl;
        break;
      case "delete-item":
        deleteItem(product);
        break;
      default:
        return; // No action by default, just render the button
    }
  };

  return (
    <button class="btn btn-primary" onClick={handleClick} {...rest}>
      {children}
    </button>
  );
}

