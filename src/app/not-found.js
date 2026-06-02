import Link from "next/link";

export const metadata={
    title:"Invalid page"
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-red-500">404</h1>

        <h2 className="text-3xl font-semibold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-2 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="btn btn-primary"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}