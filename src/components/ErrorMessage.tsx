import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 text-neutral-200 px-4">
      <h1 className="text-6xl font-bold mb-4 text-emerald-400">404</h1>
      <h2 className="text-2xl mb-6">Page Not Found</h2>
      <p className="text-center mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-emerald-400 text-neutral-900 font-semibold rounded-md hover:bg-emerald-500 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
