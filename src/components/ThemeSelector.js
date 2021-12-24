import { useTheme } from '../hooks/useTheme';

export const ThemeSelector = () => {
  const { changeColor } = useTheme();

  const themeColors = ['crimson', 'blue', 'pink', 'green'];

  return (
    <div className='theme-selector'>
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
