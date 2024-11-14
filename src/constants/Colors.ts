/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    // Old color scheme
    // text: '#ECEDEE',
    // background: '#151718',

    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,

    //Copy of foreground to text
    //Will need to review references before changing variable title 
    text: '#ffffff',
    background: '#121212',

    // secondaryBackground
    secondaryBackground: '#202020',
    // accentColor
    accentColor: '#226bed',
    // secondaryColor
    secondaryColor: '#a065ea',
    // positiveAccent
    positiveAccent: '#2a9a57',
    // foregroundColor
    foregroundColor: '#ffffff',
    // secondaryForegroundColor
    secondaryForegroundColor: '#c8b8b6',
  },
};
