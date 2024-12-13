import { FormEvent, useContext, useState } from "react";
import NumberInput from "../../Utilities/NumberInput";
import TextInput from "../../Utilities/TextInput";
import SubmitInput from "../../Utilities/SubmitInput";
import Header from "../../Components/Header";
import BASE_URL from "../../settings";
import UserContext from "../../Contexts/UserContext";
import Button from "../../Utilities/Button";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
import TextAreaInput from "../../Utilities/TextArea";

interface Ingredients {
  id: number;
}

function AddRecipe() {
  const [message, setMessage] = useState("");
  const { userId } = useContext(UserContext);
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState<Ingredients[]>([]);

  async function addRecipeData(formData: FormData) {
    let data = {
      prep_time: 0,
      cook_time: 0,
      name: formData.get("name"),
      instructions: formData.get("instructions"),
      ingredients: ingredients,
    };
    if (
      formData.get("prep_time") != "" &&
      Number(formData.get("prep_time")) > 0
    ) {
      data.prep_time = Number(formData.get("prep_time"));
    }
    if (
      formData.get("cook_time") != "" &&
      Number(formData.get("cook_time")) > 0
    ) {
      data.cook_time = Number(formData.get("cook_time"));
    }

    try {
      const response = await fetch(`${BASE_URL}/users/${userId}/recipes`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("Successfully added recipe");
        navigate(`/recipes/${userId}`);
      } else {
        let data = await response.json();
        setMessage(data.message);
      }
    } catch (error) {
      console.log("Error adding recipe");
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    addRecipeData(formData);
  }

  async function addIngredientData(formData: FormData) {
    let data = {
      name: formData.get("ingredient"),
    };

    try {
      const response = await fetch(`${BASE_URL}/users/1/ingredients`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData = await response.json();
      if (response.ok) {
        console.log("Successfully added ingredient");
        setIngredients([...ingredients, responseData.data.id]);
        console.log(ingredients);
      } else {
        console.error("Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.log("Error adding ingredient");
    }
  }

  function handleIngredientSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    addIngredientData(formData);
  }

  return (
    <>
      <Header title="Add Recipe" />
      <Link className="ml-5 mt-4" to={`/recipes/${userId}`}>
        <Button value="Back" width="w-20" height="h-10" />
      </Link>
      <form action="" method="post" onSubmit={handleSubmit}>
        <div className="w-full px-5 mt-4">
          <p>Recipe Name:</p>
          <TextInput
            name="name"
            id="addrecipe"
            placeholder="enter recipe name"
            required={true}
          />
          <TextAreaInput
            title="Cooking instructions:"
            name="instructions"
            id="instructions"
            required={true}
          />
          <div className="flex space-x-4 mb-4">
            <NumberInput
              title="Prep time in minutes:"
              name="prep_time"
              id="preptime"
              min="0"
              max="5256000"
            />
            <NumberInput
              title="Cook time in minutes:"
              name="cook_time"
              id="cooktime"
              min="0"
              max="5256000"
            />
          </div>
          <p className="text-red-600">{message}</p>
          <SubmitInput value="Add recipe" />
        </div>
      </form>
      <div className="w-full px-5 mt-4">
        <p className="mb-2">Add Ingredient</p>
        <form action="" method="post" onSubmit={handleIngredientSubmit}>
          <div className="flex space-x-4">
            <TextInput
              name="ingredient"
              id="addingredient"
              placeholder="enter ingredient name"
              required={false}
            />
            <SubmitInput value="+" />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddRecipe;
