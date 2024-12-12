interface TextAreaProps {
  name: string;
  id: string;
  title: string;
  required?: boolean;
}

export default function TextAreaInput({ name, id, title, required }: TextAreaProps) {
  return (
    <>
      <label htmlFor={id}>
        {title}
        <textarea
          name={name}
          id={id}
          className="w-full border-2 rounded-lg px-2 py-2 text-sm mt-1"
          required={required}
        ></textarea>
      </label>
    </>
  );
}
