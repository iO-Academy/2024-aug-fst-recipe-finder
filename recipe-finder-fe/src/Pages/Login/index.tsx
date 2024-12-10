import { FormEvent, useContext } from "react";
import Header from "../../Components/Header";
import UserContext from "../../Contexts/UserContext";
import SubmitInput from "../../Utilities/SubmitInput";
import BASE_URL from "../../settings";

function Login() {
  const { userId, changeUserId } = useContext(UserContext);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    userSignIn(formData);
  }

  async function userSignIn(formData: FormData) {
    let data = {
      email: formData.get("email"),
    };
    try {
      const response = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (response.ok) {
        changeUserId(responseData.data.userId);
        console.log(userId);
      }
    } catch {}
  }
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
          onSubmit={handleSubmit}
        >
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            className="border border-slate-400 rounded-md"
            name="email"
          />
          <SubmitInput value="Log In" />
        </form>
      </div>
    </>
  );
}

export default Login;
