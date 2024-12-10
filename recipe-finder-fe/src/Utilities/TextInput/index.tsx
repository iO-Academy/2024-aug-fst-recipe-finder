export interface TextInputProps {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  title: string;
}

export default function TextInput({
  type,
  name,
  id,
  placeholder,
  title,
}: TextInputProps) {
  return (
    <>
      <label htmlFor={id}>
        {title}:
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className="w-full border-2 rounded-lg px-2 py-2 text-sm mt-1"
        />
      </label>
    </>
  );
}
