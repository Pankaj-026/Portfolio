import { useState, useEffect } from "react";
import {Sun, Moon} from "lucide-react"

const ThemeSwitcher = () => {

    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }else{
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    },[darkMode])


    return (
        <button onClick={() => setDarkMode(!darkMode)} className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg transition duration-300 ease-in-out">
            {darkMode ? <Sun /> : <Moon />}
        </button>
    )

}

export default ThemeSwitcher;