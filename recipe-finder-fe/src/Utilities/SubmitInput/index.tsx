interface SubmitInput {
  value: string;
}

function SubmitInput({ value }: SubmitInput) {
  return (
    <input
      type="submit"
      className="border bg-foodHubOrange rounded-md hover:cursor-pointer"
      value={value}
    />
  );
}

export default SubmitInput;
