import { useContext, useEffect, useState } from "react";
import Header from "../../Components/Header";
import BASE_URL from "../../settings";
import UserContext from "../../Contexts/UserContext";

interface Recipes {
  id: number;
  name: string;
  duration: number;
}

export default function AllRecipes() {
  const [recipes, setRecipes] = useState<Recipes[]>([]);
  const { userId } = useContext(UserContext);

  async function getRecipe(
    stateSetter: React.Dispatch<React.SetStateAction<Recipes[]>>
  ) {
    const json = await fetch(`${BASE_URL}/users/${userId}/recipes`);
    const recipe = await json.json();
    stateSetter(recipe.data);
  }

  useEffect(() => {
    getRecipe(setRecipes);
  });

  console.log(recipes);

  return (
    <>
      <Header title="All Recipes" />
    </>
  );
}
