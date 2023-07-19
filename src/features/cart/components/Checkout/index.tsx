import { CheckoutHeader } from "./CheckoutHeader";
import { OrderSummary } from "./OrderSummary";
import { PaymentDetailsForm } from "./PaymentDetailsForm";

export function Checkout() {
  return (
    <div>
      <CheckoutHeader />

      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <OrderSummary />
        <PaymentDetailsForm />
      </div>
    </div>
  );
}
