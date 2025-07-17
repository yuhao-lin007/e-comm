import React from "react";
import { cn } from "@/lib/utils";

// Displays the checkout progress steps
const CheckoutSteps = ({ current = 0 }: { current?: number }) => {
  const steps = [
    "User Login",
    "Shipping Address",
    "Payment Method",
    "Place Order",
  ];

  return (
    <div className="flex-between flex-col md:flex-row items-center mb-10 space-y-2 md:space-y-0 md:space-x-2">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div
            className={cn(
              "p-2 w-56 rounded-full text-center text-sm",
              index === current ? "bg-secondary font-bold" : "bg-muted"
            )}
          >
            {step}
          </div>
          {index < steps.length - 1 && (
            <hr className="w-16 border-t border-gray-300 mx-2 hidden md:block" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CheckoutSteps;
