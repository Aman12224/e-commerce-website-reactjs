import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsList = () => {
  const { products } = useLoaderData();
  return (
    <div className="grid mt-12 gap-y-8">
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        const dollarsAmount = formatPrice(price);
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="flex flex-col flex-wrap p-8 duration-200 rounded-lg shadow-xl sm:flex-row gap-y-8 bg-base-100 hover:shadow-2xl group"
          >
            <img
              src={image}
              alt={title}
              className="object-cover w-24 h-24 transition duration-300 rounded-lg sm:h-32 group-hover:scale-105"
            />
            <div className="ml-0 sm:ml-16">
              <h3 className="text-lg font-medium capitalize">{title}</h3>
              <h4 className="capitalize text-md text-neutral-content">
                {company}
              </h4>
            </div>
            <p className="ml-0 text-lg font-medium sm:ml-auto">
              {dollarsAmount}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;
