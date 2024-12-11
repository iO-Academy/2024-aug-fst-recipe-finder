import { Link } from "react-router-dom";

interface ButtonInput {
    value: string,
    link: string,
    width?: string;
    height?: string;
}

function ButtonInput({  value, link, width, height  }: ButtonInput) {
    return (
        <Link to={link}><button className={`border bg-foodHubOrange rounded-md hover:cursor-pointer ${width} ${height}`}>{value}</button></Link>
    )
}

export default ButtonInput