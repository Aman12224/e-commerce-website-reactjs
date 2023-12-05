import { useSelector } from "react-redux";
import { CheckoutForm, SectionTitle, CartTotals } from "../components";
import { redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
export const loader = (store) => () => {
  // const user = useSelector((store) => store.userState.user);
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn("You must log in to checkout");
    return redirect("/login");
  }
  return null;
};

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="place your order" />
      <div className="grid items-start gap-8 mt-8 md:grid-cols-2">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};

export default Checkout;
