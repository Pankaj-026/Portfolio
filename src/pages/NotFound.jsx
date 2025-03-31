import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="mt-2 text-lg">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg">
        Go Back Home
      </Link>
    </div>
  );
}
