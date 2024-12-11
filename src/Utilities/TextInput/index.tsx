interface TextInputProps {
  name: string;
  id: string;
  placeholder?: string;
  title: string;
  required?: boolean;
}

export default function TextInput({
  name,
  id,
  placeholder,
  title,
  required,
}: TextInputProps) {
  return (
    <>
      <label htmlFor={id}>
        {title}
        <input
          type="text"
          name={name}
          id={id}
          placeholder={placeholder ?? ""}
          className="w-full border-2 rounded-lg px-2 py-2 text-sm mt-1"
          required={required}
        />
      </label>
    </>
  );
}
