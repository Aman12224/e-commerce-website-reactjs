import { useRouteError, Link } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <main className="grid min-h-screen place-items-center">
        <div className="text-center">
          <p className="font-semibold text-9xl text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            page not found
          </h1>
          <p className="mt-6 text-lg leading-7">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10">
            <Link to="/" className="btn btn-secondary">
              go back home
            </Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="grid min-h-screen place-items-center">
      <div className="grid gap-5 place-content-center">
        <p>There was an error while loading...</p>
        <Link to="/" className="btn btn-secondary">
          go back home
        </Link>
      </div>
    </main>
  );
};

export default Error;
