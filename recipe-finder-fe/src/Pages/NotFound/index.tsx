import { Link } from "react-router";
import Header from "../../Components/Header";

function NotFound() {
  return (
    <>
      <Header title="FoodHub" />
      <div className="text-center flex flex-col items-end flex-grow justify-center bg-[url('../public/img/icecream.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="w-6/12 text-center mr-4 lg:mr-20">
          <h1 className="text-3xl lg:text-6xl font-semibold">404</h1>
          <h2 className="text-xl lg:text-3xl">Page not found</h2>
          <p className="text-md lg:text-xl">
            Try going back to the previous page, or go home{" "}
            <Link to="/" className="text-foodHubOrange">
              here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default NotFound;
