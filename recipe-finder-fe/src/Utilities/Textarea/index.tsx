interface TextareaProps {
  name: string;
  id: string;
  title: string;
}

export default function Textarea({ name, id, title }: TextareaProps) {
  return (
    <>
      <div>
        <label htmlFor={id}>
          {title}
          <textarea
            name={name}
            id={id}
            className="w-full border-2 rounded-lg px-2 py-2 mb-2"
          ></textarea>
        </label>
      </div>
    </>
  );
}
