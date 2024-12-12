import { useContext, useEffect, useState } from "react";
import Header from "../../Components/Header";
import BASE_URL from "../../settings";
import UserContext from "../../Contexts/UserContext";
import { Link, useParams } from "react-router";
import Button from "../../Utilities/Button";

interface Recipe{
    name: string,
    instructions: string,
    prep_time: number,
    cook_time: number
}
  
  function SingleRecipe(){
  const [recipe,setRecipe] = useState({name:'',instructions: '',prep_time: 0, cook_time:0 })
  const {userId}=useContext(UserContext);
  const {recipeId} = useParams();

    async function getSingleRecipe(
      stateSetter: React.Dispatch<React.SetStateAction<Recipe>>
    ) {
      const data = await fetch(`${BASE_URL}/users/${userId}/recipes/${recipeId}`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const recipe = await data.json();
      const name = recipe.data.name
      const instructions = recipe.data.instructions
      const prep = recipe.data.prep_time
      const cook = recipe.data.cook_time
      stateSetter({name:name,instructions:instructions, prep_time:prep, cook_time:cook});
    }
  
    useEffect(() => {
      getSingleRecipe(setRecipe);
    },[]) ;
    return ( 
      <><Header title="FoodHub" /><div className="border-4 border-solid border-black rounded-lg w-screen mt-20 file:my-auto mx-auto max-w-md px-4">
        <div className="">
          <Link to="/"><Button value={"Back"} width={"w-20"} height={"h-10"}></Button></Link>
          <div className="inline-flex border-2 border-solid border-black rounded-lg mx-16 p-2 text-center font-bold my-4">Single Recipe</div>
        </div>
        <div id="recipecard" className=" p-2 text-center font-bold my-4">
          <div className="border-2 border-solid border-black rounded-lg p-2 text-center font-bold my-4">{recipe.name}</div>
          <div id="times" className="flex flex-row justify-between text-center font-bold my-4">
            <div id="preptime" className="border-2 border-solid border-black rounded-lg px-5 py-2 text-center font-bold my-4">Prep Time: {recipe.cook_time}</div>
            <div id="cooktime" className="border-2 border-solid border-black rounded-lg px-5 py-2 text-center font-bold my-4">Cook Time: {recipe.prep_time}</div>
          </div>
          <div id="instructions" className="border-2 border-solid border-black rounded-lg p-2 text-center font-bold my-4">{recipe.instructions}</div>
        </div>
      </div></>
    );
  }
  
  export default SingleRecipe;