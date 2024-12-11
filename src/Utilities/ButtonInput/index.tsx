interface ButtonInput {
    value: string,
    width?: string;
    height?: string;
}

function ButtonInput({  value, width, height  }: ButtonInput) {
    return (
        <button className={` border-black shadow-md bg-foodHubOrange rounded-md hover:cursor-pointer ${width} ${height}`}>{value}</button>
    )
}

export default ButtonInput