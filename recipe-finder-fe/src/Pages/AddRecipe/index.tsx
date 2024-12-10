import TextInput from "../../Utilities/TextInput";


export default function AddRecipe() {
  return (
    <>
      <div className="my-auto mx-auto max-w-md px-4">
        <TextInput
          type="text"
          name="addrecipe"
          id="addrecipe"
          placeholder="enter recipe name"
        />
      </div>
    </>
  );
}
