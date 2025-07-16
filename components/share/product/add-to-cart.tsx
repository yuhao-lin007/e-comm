"use client";
import { CartItem } from "@/types";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { addItemToCart } from "@/lib/actions/cart.action";

const AddToCart = ({ item }: { item: Omit<CartItem, "cartId"> }) => {
  const router = useRouter();

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);
    if (!res.success) {
      toast.error(res.message, {
        style: {
          backgroundColor: "red",
          color: "white",
        },
        description: res.message,
      });
      return;
    }

    toast.success('', {
      description: res.message,
      action: (
        <Button
          className="bg-primary text-white hover:bg-gray-800"
          onClick={() => router.push("/cart")}
        >
          Go to cart
        </Button>
      ),
    });
  };
  return (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      Add To Cart
    </Button>
  );
};

export default AddToCart;
