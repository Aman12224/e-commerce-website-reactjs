import { useRouteError, Link } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  return (
    <main className="grid place-items-center">
      <div className="grid gap-5 place-content-center">
        <p>There was an error...</p>
        <Link to="/" className="btn btn-secondary">
          go back home
        </Link>
      </div>
    </main>
  );
};

export default ErrorElement;
