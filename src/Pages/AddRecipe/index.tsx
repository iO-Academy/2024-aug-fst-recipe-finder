import { FormEvent, useState } from "react";
import NumberInput from "../../Utilities/NumberInput";
import Textarea from "../../Utilities/Textarea";
import TextInput from "../../Utilities/TextInput";
import SubmitInput from "../../Utilities/SubmitInput";
import Header from "../../Components/Header";
import BASE_URL from "../../settings";

async function addRecipe(formData: FormData) {
  let data = {
    name: formData.get("name"),
    instructions: formData.get("instructions"),
    prep_time: formData.get("prep_time"),
    cook_time: formData.get("cook_time"),
  };
  try {
    const response = await fetch(`${BASE_URL}/users/recipes`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData.message);
    } else {
      console.error("Error:", response.status, response.statusText);
    }
  } catch (error) {
    console.log("error");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    return formData;
  }

  return (
    <>
      <Header title="Add Recipe" />
      <form action="" method="post" onSubmit={handleSubmit}>
        <div className="w-full px-5 mt-4">
          <TextInput
            title="Recipe name"
            name="name"
            id="addrecipe"
            placeholder="enter recipe name"
          />
          <Textarea
            title="Cooking instructions"
            name="intructions"
            id="instructions"
          />
          <div className="flex space-x-4">
            <NumberInput title="Prep time" name="prep_time" id="preptime" />
            <NumberInput title="Cook time" name="cook_time" id="cooktime" />
          </div>
          <SubmitInput value="add recipe" />
        </div>
      </form>
    </>
  );
}

export default addRecipe;
