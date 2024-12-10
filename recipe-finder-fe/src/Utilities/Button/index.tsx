interface ButtonInput {
    value: string, // button text
    onPress: () => void, // not 100% on this type function returns void
    width: string; // Will be a string due to tailwind
    height: string;
}

function ButtonInput({  value, onPress, width, height  }: ButtonInput) {
    return (
        <Button title={value} onPress={onPress} className={`border bg-foodHubOrange rounded-md hover:cursor-pointer ${width} ${height}`}></Button>
    )
}

export default ButtonInput