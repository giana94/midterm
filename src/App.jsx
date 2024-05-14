import './App.css';
import { Outlet} from 'react-router-dom';
import ToggleSwitch from './components/ToggleSwitch';
import { ThemeContext, themes } from './context/themeContext';
import { useState, useEffect } from 'react';


function App() {

  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme((prevValue) =>
      prevValue === themes.dark ? themes.light : themes.dark
    );
  };
  useEffect(() => {
    document.body.style.background = theme.background;
  }, [theme]);



  return (
    <ThemeContext.Provider value={{ theme: theme }}>
      <div className="App" style={{ backgroundColor: theme.background, color:theme.foreground }}>
        <h6 >Dark Mode</h6>
        <ToggleSwitch onToggle={() => {toggleTheme()}} />
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
