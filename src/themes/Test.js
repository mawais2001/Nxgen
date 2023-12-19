import React, {createContext, useContext, useEffect, useState} from 'react';
import {lightTheme, darkTheme} from './themeColors';
import {useColorScheme} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const defaultTheme = useColorScheme();
  const [saveTheme, setSaveTheme] = useState(null);

  const [isDarkMode, setIsDarkMode] = useState(
    saveTheme !== null ? saveTheme : defaultTheme == 'dark',
  );

  var mounted = false;
  const getThemeMode = async () => {
    try {
      const getsaveThemeValue = await AsyncStorage.getItem('themeMode');
      const currentSaveTheme = JSON.parse(getsaveThemeValue);
      console.log('save theme is: ', currentSaveTheme);
      setSaveTheme(currentSaveTheme);
    } catch (error) {
      console.log('error while getting theme mode from async storage: ', error);
    }
  };
  useEffect(() => {
    mounted = true;
    getThemeMode();
    return () => (mounted = false);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
    saveThemeMode();
  };

  const saveThemeMode = async () => {
    try {
      await AsyncStorage.setItem('themeMode', JSON.stringify(!isDarkMode));
    } catch (error) {
      console.log('error in saving theme mode in async storage: ', error);
    }
  };

  const theme = isDarkMode ? darkTheme : lightTheme; // Define your light and dark themes

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
