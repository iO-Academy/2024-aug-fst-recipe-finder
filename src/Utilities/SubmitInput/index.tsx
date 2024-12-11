interface SubmitInput {
  value: string;
}

function SubmitInput({ value }: SubmitInput) {
  return (
    <input
      type="submit"
      className="border bg-foodHubOrange rounded-md hover:cursor-pointer py-2 px-3"
      value={value}
    />
  );
}

export default SubmitInput;
