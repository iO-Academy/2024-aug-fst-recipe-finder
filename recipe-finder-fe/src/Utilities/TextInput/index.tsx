export interface TextInputProps {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  title: string;
  required?: boolean;
}

export default function TextInput({
  name,
  id,
  title,
  required,
}: TextInputProps) {
  return (
    <>
      <div>
        <label htmlFor={id}>
          {title}:
          <input
            type="text"
            name={name}
            id={id}
            className="w-full border-2 rounded-lg px-2 py-2 mb-2"
            required={required}
          />
        </label>
      </div>
    </>
  );
}
