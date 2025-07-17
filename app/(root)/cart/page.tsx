export const metadata = {
    title: 'Shopping Cart',
  };
import CartTable from "./cart-tabe";
import { getMyCart } from "@/lib/actions/cart.action";
const CartPage = async () => {
    const cart = await getMyCart();

    return (
      <>
        <CartTable cart={cart} />
      </>
    );
  };
 
export default CartPage;