function NotFound() {
  return (
    <div className="text-center flex flex-col flex-grow justify-center">
      <h1 className="text-6xl font-semibold">404</h1>
      <h2 className="text-3xl">Page not found</h2>
      <p className="text-xl">
        Try going back to the previous page, or go home{" "}
        <a href="/" className="text-amber-700">
          here
        </a>
      </p>
    </div>
  );
}

export default NotFound;
