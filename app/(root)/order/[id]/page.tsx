import { getOrderById } from "@/lib/actions/order.action";
import { notFound, redirect } from "next/navigation";
import { ShippingAddress } from "@/types";
import OrderDetailsTable from "./order-details-table";
import { auth } from "@/auth";
export const metadata = {
  title: "Order Details",
};

const OrderDetailsPage = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await props.params;
  const order = await getOrderById(id);

  const session = await auth();
  const userId = session?.user?.id;
  const userRole = session?.user?.role;

  if (!userId) throw new Error("No User ID");
  // Redirect other user expect admin
  if (order.userId !== userId && userRole !== "admin") {
    return redirect("/unauthorized");
  }

  if (!order) notFound();

  return (
    <OrderDetailsTable
      order={{
        ...order,
        shippingAddress: order.shippingAddress as ShippingAddress,
      }}
      paypalClientId={process.env.PAYPAL_CLIENT_ID || "sb"} //sandbox account
    />
  );
};

export default OrderDetailsPage;
