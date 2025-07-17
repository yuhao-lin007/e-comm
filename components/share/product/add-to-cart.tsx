"use client";
import { CartItem, Cart } from "@/types";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart.action";
import { Plus, Minus, Loader } from "lucide-react";
import { useTransition } from "react";
const AddToCart = ({
  cart,
  item,
}: {
  cart?: Cart;
  item: Omit<CartItem, "cartId">;
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const handleAddToCart = async () => {
    startTransition(async () => {
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

      toast.success("", {
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
    });
  };

  const handleRemoveFromCart = async () => {
    startTransition(async () => {
      const res = await removeItemFromCart(item.productId);

      toast.success("Item Removed", {
        description: res?.message,
      });

      return;
    });
  };
  const existItem =
    cart && cart.items.find((x) => x.productId === item.productId);

  return existItem ? (
    <div>
      <Button
        type="button"
        variant="outline"
        disabled={isPending}
        onClick={handleRemoveFromCart}
      >
        {isPending ? (
          <Loader className="w-4 h-4 animate-spin" />
        ) : (
          <Minus className="w-4 h-4" />
        )}
      </Button>
      <span className="px-2">{existItem.qty}</span>
      <Button
        type="button"
        variant="outline"
        disabled={isPending}
        onClick={handleAddToCart}
      >
        {isPending ? (
          <Loader className="w-4 h-4 animate-spin" />
        ) : (
          <Plus className="w-4 h-4" />
        )}
      </Button>
    </div>
  ) : (
    <Button
      className="w-full"
      type="button"
      disabled={isPending}
      onClick={handleAddToCart}
    >
      {isPending ? (
        <Loader className="w-4 h-4 animate-spin" />
      ) : (
        <Plus className="w-4 h-4" />
      )}
      Add to cart
    </Button>
  );
};

export default AddToCart;
