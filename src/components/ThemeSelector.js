import { useTheme } from '../hooks/useTheme';
import modeIcon from '../assets/light-dark.svg';

export const ThemeSelector = () => {
  const { changeColor, changeMode, mode } = useTheme();

  const themeColors = ['crimson', 'blue', 'pink', 'green'];

  const handleToggleMode = () => {
    changeMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='theme-selector'>
      <div className='mode-toggle'>
        <img
          src={modeIcon}
          alt='Mode Icon'
          onClick={handleToggleMode}
          className={`${mode}`}
        />
      </div>
      <div className='theme-buttons'>
        {themeColors.map((color) => {
          return (
            <div
              key={color}
              className={`theme-button ${color}`}
              onClick={() => changeColor(color)}
            />
          );
        })}
      </div>
    </div>
  );
};
