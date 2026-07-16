function Button({ text, icon, variant }) {
    const baseStyle = "flex justify-center items-center gap-2 font-medium text-sm rounded-sm px-6 py-2 cursor-pointer";
    const colorVariants = {
        primary: "text-white bg-blue-800 hover:bg-blue-900  transition-colors",
        secondary: "bg-white text-gray-800 border border-gray-500",
        danger: "bg-white border border-red-700 text-red-700"
    }

    return (
        <button className={`${baseStyle} ${colorVariants[variant]}`}>
            {icon}
            {text}
        </button>
    )
}

export default Button;