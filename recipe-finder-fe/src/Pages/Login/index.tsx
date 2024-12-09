import SubmitInput from "../../Utilities/SubmitInput";

function Login() {
  return (
    <div>
      <p>Welcome to the FoodHub. This app is designed to help you match the ingredients in your home to recipes you enjoy! Create an account and login to save your ingredients and recipes.</p>
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
  );
}

export default Login;
