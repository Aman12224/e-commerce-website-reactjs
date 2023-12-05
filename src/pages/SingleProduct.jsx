import { useLoaderData, Link } from "react-router-dom";
import { formatPrice, customFetch, generateAmountOptions } from "../utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const singleProductQuery = (id) => {
  return {
    queryKey: ["singleProduct", id],
    queryFn: () => customFetch(`/products/${id}`),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id)
    );
    return { product: response.data.data };
  };

const SingleProduct = () => {
  const { product } = useLoaderData();

  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollorsAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };
  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    company,
    productColor,
    amount,
  };
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* product */}
      <div className="grid mt-6 gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="object-cover rounded-lg w-96 h-96 lg:w-full"
        />
        <div>
          <h1 className="text-3xl font-bold capitalize">{title}</h1>
          <h4 className="mt-2 text-xl font-bold text-neutral-content">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollorsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>

          {/* color */}
          <div className="mt-6">
            <h4 className="font-medium tracking-wider capitalize text-md">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && "border-2 border-secondary"
                    }`}
                    style={{ backgroundColor: `${color}` }}
                    onClick={() => {
                      setProductColor(color);
                    }}
                  ></button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* amount */}
      <div className="w-full max-w-xs form-control">
        <label className="label" htmlFor="amount">
          <h4 className="font-medium tracking-wider capitalize text-md">
            amount
          </h4>
        </label>
        <select
          name="amount"
          id="amount"
          className="select select-secondary select-bordered select-md "
          value={amount}
          onChange={handleAmount}
        >
          {generateAmountOptions(3)}
        </select>
      </div>

      {/* cart */}
      <div className="mt-10">
        <button
          className="btn btn-secondary btn-md"
          onClick={() => addToCart()}
        >
          Add to cart
        </button>
      </div>
    </section>
  );
};

export default SingleProduct;
