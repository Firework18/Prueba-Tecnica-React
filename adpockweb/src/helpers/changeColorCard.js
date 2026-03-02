
export const changeColorCard = (color) => {
    const gradientMap = {
        red: "from-red-200 to-red-700",
        blue: "from-blue-200 to-blue-700",
        green: "from-green-200 to-green-700",
        yellow: "from-yellow-200 to-yellow-600",
        purple: "from-purple-200 to-purple-700",
        pink: "from-pink-200 to-pink-600",
        brown: "from-amber-200 to-amber-800",
        black: "from-gray-200 to-gray-950",
        gray: "from-gray-400 to-gray-600",
        white: "from-gray-200 to-gray-400"
    }

    const gradient = gradientMap[color] || "from-indigo-500 to-indigo-700"
    return gradient
}