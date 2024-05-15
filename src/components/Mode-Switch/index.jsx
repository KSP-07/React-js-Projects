
import useLocalStorage from "./localStorage";

import './styles.css';

export default function LightSwitch() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");


  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  
  }

  return (
    <div className="light-dark-mode" data-theme = {theme}>
      <div className="container">
        <p>Hello World !</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}
