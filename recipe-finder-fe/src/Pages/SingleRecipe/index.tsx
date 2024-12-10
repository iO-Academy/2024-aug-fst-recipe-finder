// import SubmitInput from "../../Utilities/SubmitInput";

function SingleRecipe() {
  return ( 
    <div className="border-4 border-solid border-black rounded-lg w-screen mt-40 file:my-auto mx-auto max-w-md px-4">
      <div className="flex flex-row">
        <button className="border-2 border-solid border-black rounded justify-self-center w-1/2 p-2 text-center font-bold my-4">Back</button>
        <div className="border-2 border-solid border-black rounded justify-self-center w-1/2 p-2 text-center font-bold my-4">Single Recipe</div>
      </div>
      <div id="recipecard" className=" p-2 text-center font-bold my-4">
        <div className="border-2 border-solid border-black rounded p-2 text-center font-bold my-4">Recipe Name</div>
        <div id="times" className="flex flex-row justify-between text-center font-bold my-4">
          <div id="preptime" className="border-2 border-solid border-black rounded px-5 py-2 text-center font-bold my-4">Prep Time: 30 mins</div>
          <div id="cooktime" className="border-2 border-solid border-black rounded px-5 py-2 text-center font-bold my-4">Cook Time: 30 mins</div>
        </div>
        <div id="ingredients" className="border-2 border-solid border-black rounded p-2 text-center font-bold my-4">Ingredient1</div>
        <div id="instructions" className="border-2 border-solid border-black rounded p-2 text-center font-bold my-4">Instructions</div>
      </div>
    </div>
  );
}

export default SingleRecipe;



{/* <h2 className="text-center font-bold my-4">Welcome to the FoodHub.</h2>
      <p className="text-center my-4"> This app is designed to help you match the ingredients in your home to recipes you enjoy! Create an account and login to save your ingredients and recipes.</p>
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
        <SubmitInput value="Log In" /> */}