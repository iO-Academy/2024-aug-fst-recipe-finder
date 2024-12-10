interface ButtonInput {
    value: string,
    link: string,
    width: string; // Will be a string due to tailwind
    height: string;
}

function ButtonInput({  value, link, width, height  }: ButtonInput) {
    return (
        <a href={link}><button className={`border bg-foodHubOrange rounded-md hover:cursor-pointer ${width} ${height}`}>{value}</button></a>
    )
}

export default ButtonInput