import Header from "../../Components/Header";
import SubmitInput from "../../Utilities/SubmitInput";

function Login() {
  return (
    <>
      <Header title="FoodHub" />
      <div className="my-auto mx-auto max-w-md px-4">
        <h2 className="text-center font-bold my-4">Welcome to the FoodHub.</h2>
        <p className="text-center my-4">
          {" "}
          This app is designed to help you match the ingredients in your home to
          recipes you enjoy! Create an account and login to save your
          ingredients and recipes.
        </p>
        <form
          action=""
          className="flex flex-col mx-auto border border-black rounded-md p-4 gap-2 max-w-sm"
        >
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            className="border border-slate-400 rounded-md"
          />
          <SubmitInput value="Log In" />
        </form>
      </div>
    </>
  );
}

export default Login;
