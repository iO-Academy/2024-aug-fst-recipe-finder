import { useContext, useEffect, useState } from "react";
import Header from "../../Components/Header";
import BASE_URL from "../../settings";
import UserContext from "../../Contexts/UserContext";
import RecipeCard from "../../Components/RecipeCard";
import { Link } from "react-router";
import Button from "../../Utilities/Button";


interface RecipeSummary {
  id: number;
  name: string;
  duration: number;
}

export default function AllRecipes() {
  const [recipes, setRecipes] = useState<RecipeSummary[]>([]);
  const { userId } = useContext(UserContext);

  async function getRecipes(
    setRecipes: React.Dispatch<React.SetStateAction<RecipeSummary[]>>
  ) {
    const json = await fetch(`${BASE_URL}/users/${userId}/recipes`);
    const recipe = await json.json();
    setRecipes(recipe.data);
  }

  useEffect(() => {
    getRecipes(setRecipes);
  }, [userId]);

  return (
    <>
      <Header title="All Recipes" />
      <Link className="my-4 mx-auto" to={`/addrecipe/${userId}`}><Button value={"Add Recipe"} width="md:w-96 w-48" height="md:h-20 h-10" /></Link>
        {
          recipes.map((recipe) =>
            <Link to={`/recipe/${recipe.id}`} ><RecipeCard key={recipe.id} name={recipe.name} time={recipe.duration} /></Link>
          )
        }
    </>
  );
}