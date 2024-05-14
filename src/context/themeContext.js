import { createContext } from 'react'

export const themes = {
    light: {
        foreground: '#242526',
        background: '#fff',
        primaryColor: '#f0eded'
    },
    dark: {
        foreground: '#fff',
        background: '#242526',
        primaryColor: 'rgb(84, 83, 83)'
    },
};

// Let our context know what properties to expect
export const ThemeContext = createContext({
    theme: {},
});
