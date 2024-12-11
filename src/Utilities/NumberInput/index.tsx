interface NumberInputProps {
    name: string;
    id: string;
    placeholder?: string;
    title: string;
    required?: boolean;
  }
  
  export default function NumberInput({
    name,
    id,
    title,
  }: NumberInputProps) {
    return (
      <>
      <input type="textarea" name="" id="" />
        <label htmlFor={id}>
          {title}
          <input
            type="number"
            name={name}
            id={id}
            className="w-full border-2 rounded-lg px-2 py-2 text-sm mt-1"
          />
        </label>
      </>
    );
  }
  