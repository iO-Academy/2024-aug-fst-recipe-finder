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

function AddRecipe() {
  const [message, setMessage] = useState("");
  const { userId } = useContext(UserContext);
  const navigate = useNavigate();

  async function addRecipeData(formData: FormData) {
    let data = {
      prep_time: 0,
      cook_time: 0,
      name: formData.get("name"),
      instructions: formData.get("instructions"),
      ingredients: [],
    };
    if (formData.get("prep_time") != "") {
      data.prep_time = Number(formData.get("prep_time"));
    }
    if (formData.get("cook_time") != "") {
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

  return (
    <>
      <Header title="Add Recipe" />
      <Link className="ml-5 mt-4" to={`/recipes/${userId}`}>
        <Button value="Back" width="w-20" height="h-10" />
      </Link>
      <form action="" method="post" onSubmit={handleSubmit}>
        <div className="w-full px-5 mt-4">
          <TextInput
            title="Recipe name:"
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
              title="Prep time mins:"
              name="prep_time"
              id="preptime"
            />
            <NumberInput
              title="Cook time mins:"
              name="cook_time"
              id="cooktime"
            />
          </div>
          <p className="text-red-600">{message}</p>
          <SubmitInput value="Add recipe" />
        </div>
      </form>
    </>
  );
}

export default AddRecipe;
