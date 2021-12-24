import { createContext, useReducer } from 'react';

const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        ...state,
        color: action.payload,
      };

    case 'CHANGE_MODE':
      return {
        ...state,
        mode: action.payload,
      };

    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, {
    color: 'default',
    mode: 'light',
  });

  const changeColor = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color });
  };

  const changeMode = (mode) => {
    dispatch({ type: 'CHANGE_MODE', payload: mode });
  };

  return (
    <ThemeContext.Provider
      value={{ color: state.color, mode: state.mode, changeColor, changeMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
