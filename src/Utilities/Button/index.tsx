import { Link } from "react-router";

interface ButtonProps {
  value: string;
  width?: string;
  height?: string;
  page: string;
}

function Button({ value, width, height, page }: ButtonProps) {
  return (
    <Link
      to={page}
      className={`border bg-foodHubOrange rounded-md hover:cursor-pointer py-2 px-3 ${width} ${height}`}
    >
      {value}
    </Link>
  );
}

export default Button;
