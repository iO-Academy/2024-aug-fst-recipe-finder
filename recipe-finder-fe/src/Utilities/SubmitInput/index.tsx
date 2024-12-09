interface SubmitInput {
  value: string;
}

function SubmitInput({ value }: SubmitInput) {
  return (
    <input
      type="submit"
      className="border bg-amber-600 rounded-md"
      value={value}
    />
  );
}

export default SubmitInput;
