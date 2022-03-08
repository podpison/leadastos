import { createContext, useContext } from "react";
import React from "react";

type ThemeContextType = {
    theme: 'light' | 'dark'
    setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>
}
//0_0
export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const useTheme = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const useThemeClasses = (defaultClasses: string | Array<string | undefined>, darkThemeClass: string, lightThemeClass?: string) => {
        return `${typeof defaultClasses === 'string' ? defaultClasses : defaultClasses.join(' ')} ${theme === 'light' ? lightThemeClass : darkThemeClass}`;
    }
    const updateTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
    return {theme, updateTheme, useThemeClasses};
};