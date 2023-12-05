import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { Header, Navbar, Loading } from "../components";
import { useEffect } from "react";
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="py-20 align-element">
          <Outlet />
        </section>
      )}
    </>
  );
};

export default HomeLayout;
