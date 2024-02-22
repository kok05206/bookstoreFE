import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

function ThemeSwicher() {
  const { themeName, togglTheme } = useContext(ThemeContext);
  return <button onClick={togglTheme}>{themeName}</button>;
}
export default ThemeSwicher;
