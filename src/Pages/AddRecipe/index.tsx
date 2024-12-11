import { useState } from "react";
import NumberInput from "../../Utilities/NumberInput";
import Textarea from "../../Utilities/Textarea";
import TextInput from "../../Utilities/TextInput";
import SubmitInput from "../../Utilities/SubmitInput";

export default function AddRecipe() {

  const [recipeName, setRecipeName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault(); 

  
    const formData = {
      recipeName,
      instructions,
      prepTime,
      cookTime,
    };
    console.log(formData);
    
  }


  return (
    <>
      <form action="" method="post" onSubmit={handleSubmit}>
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
            <NumberInput title="Prep time" name="preptime" id="preptime" />
            <NumberInput title="Cook time" name="cooktime" id="cooktime" />
          </div>
          <SubmitInput value="add recipe" />
        </div>
      </form>
    </>
  );
}

