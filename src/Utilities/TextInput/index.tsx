interface TextInputProps {
  name: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  title: string;
}

export default function TextInput({
  name,
  id,
  required,
  placeholder,
  title,
}: TextInputProps) {
  return (
    <>
      <label htmlFor={id}>
        {title}
        <input
          name={name}
          id={id}
          className="w-full border-2 rounded-lg px-2 py-2 text-sm"
          required={required}
          placeholder={placeholder ?? ""}
        />
      </label>
    </>
  );
}
