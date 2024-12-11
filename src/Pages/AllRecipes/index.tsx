import { useContext, useEffect, useState } from "react";
import Header from "../../Components/Header";
import BASE_URL from "../../settings";
import UserContext from "../../Contexts/UserContext";
import RecipeCard from "../../Components/RecipeCard";

interface Recipes {
  id: number;
  name: string;
  duration: number;
}

export default function AllRecipes() {
  const [recipes, setRecipes] = useState<Recipes[]>([]);
  const { userId } = useContext(UserContext);

  async function getRecipes(
    setRecipes: React.Dispatch<React.SetStateAction<Recipes[]>>
  ) {
    const json = await fetch(`${BASE_URL}/users/${userId}/recipes`);
    const recipe = await json.json();
    setRecipes(recipe.data);
  }

  useEffect(() => {
    getRecipes(setRecipes);
  }, []);
  
  return (
    <>
      <Header title="All Recipes" />
      {
        recipes.map( (recipe) => 
          <RecipeCard key={recipe.id} name={recipe.name} time={recipe.duration} />
        )
      } 
    </>
  );
}