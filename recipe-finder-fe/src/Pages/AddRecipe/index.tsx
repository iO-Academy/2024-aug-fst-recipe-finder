import TextInput from "../../Utilities/TextInput";

export default function AddRecipe() {
  return (
    <>
      <div className="mt-4 w-10/12 mx-auto max-w-sm">
        <TextInput
          title="Recipe Name"
          type="text"
          name="addrecipe"
          id="addrecipe"
          placeholder="enter recipe name"
        />
      </div>
    </>
  );
}
