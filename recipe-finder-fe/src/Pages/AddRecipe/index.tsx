import { useState } from "react";
import NumberInput from "../../Utilities/NumberInput";
import Textarea from "../../Utilities/Textarea";
import TextInput from "../../Utilities/TextInput";
import SubmitInput from "../../Utilities/SubmitInput";

export default function AddRecipe() {
  const [ingredientsList, setIngredientsList] = useState([]);
  return (
    <>
      <form action="" method="post">
        <div className="w-full px-5 mt-4">
          <TextInput
            title="Recipe Name"
            type="text"
            name="addrecipe"
            id="addrecipe"
            placeholder="enter recipe name"
          />
          <Textarea
            title="Cooking instructions"
            name="intructions"
            id="instructions"
          />
          <div className="flex space-x-4">
            <NumberInput title="Prep time" name="preptime" id="preptime"  />
            <NumberInput title="Cook time" name="cooktime" id="cooktime" />
          </div>
        <SubmitInput value="add recipe" />
        </div>
      </form>
    </>
  );
}
