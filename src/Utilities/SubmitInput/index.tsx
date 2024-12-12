interface SubmitInput {
  value: string;
}

function SubmitInput({ value }: SubmitInput) {
  return (
    <input
      type="submit"
      className="border bg-foodHubOrange rounded-md hover:cursor-pointer hover:bg-orange-400 py-2 px-3"
      value={value}
    />
  );
}

export default SubmitInput;
