interface TextareaProps {
  name: string;
  id: string;
}

export default function Textarea({ name, id }: TextareaProps) {
  return (
    <>
      <textarea name={name} id={id} className="w-full border-2 rounded-lg px-2 py-2 text-sm mt-1"></textarea>
    </>
  );
}
