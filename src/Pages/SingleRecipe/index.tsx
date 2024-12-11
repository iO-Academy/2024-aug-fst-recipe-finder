import Header from "../../Components/Header";
import ButtonInput from "../../Utilities/ButtonInput";

  
  function SingleRecipe(){
    return ( 
      <><Header title="Single Recipe" /><div className="border-4 border-solid border-black rounded-lg w-screen mt-20 file:my-auto mx-auto max-w-md px-4">
        <div className="">
          <a href="/"><ButtonInput value={"Back"} width={"w-20"} height={"h-10"}></ButtonInput></a>
          {/* <a href="/"><button className="inline-flex rounded-lg bg-[#e27d08] w-1/8 p-2 text-center font-bold mx-2">Back</button></a> */}
          <div className="inline-flex border-2 border-solid border-black rounded-lg mx-16 p-2 text-center font-bold my-4">Single Recipe</div>
        </div>
        <div id="recipecard" className=" p-2 text-center font-bold my-4">
          <div className="border-2 border-solid border-black rounded-lg p-2 text-center font-bold my-4">Recipe Name</div>
          <div id="times" className="flex flex-row justify-between text-center font-bold my-4">
            <div id="preptime" className="border-2 border-solid border-black rounded-lg px-5 py-2 text-center font-bold my-4">Prep Time: 30 mins</div>
            <div id="cooktime" className="border-2 border-solid border-black rounded-lg px-5 py-2 text-center font-bold my-4">Cook Time: 30 mins</div>
          </div>
          <div id="ingredients" className="border-2 border-solid border-black rounded-lg p-2 text-center font-bold my-4">Ingredient1</div>
          <div id="instructions" className="border-2 border-solid border-black rounded-lg p-2 text-center font-bold my-4">Instructions</div>
        </div>
      </div></>
    );
  }
  
  export default SingleRecipe;