export interface TextInputProps {
  type: string;
  name: string;
  id: string;
  placeholder: string;
}

export default function TextInput({ type, name, id, placeholder }: TextInputProps) {
    return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="w-10/12 border-2 rounded-lg px-2 py-1"
      />
    </>
  );
}
