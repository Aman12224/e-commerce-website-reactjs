import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";

const feturedProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch(url),
};

const url = "/products?featured=true";
export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(feturedProductsQuery);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
