import { DefaultTheme } from "styled-components";

export const darkTheme:DefaultTheme = {
  bgColor: '#2f3640',
  textColor: 'whitesmoke',
  accentColor: '#00a8ff',
  cardColor: '#2f3640',
  cardBorderColor: 'whitesmoke',
  headerColor: '#293039',
  headerBtnBg: 'rgba(0, 0, 0, 0.1)',
  headerBtnAccent: 'rgba(255, 255, 255, 0.1)',
  headerBtnShadow: 'inset 0 0 10px rgba(0,0,0,0.3)',
}

export const lightTheme:DefaultTheme = {
  bgColor: 'whitesmoke',
  textColor: 'black',
  accentColor: '#00a8ff',
  cardColor: 'white',
  cardBorderColor: 'transparent',
  headerColor: '#fff',
  headerBtnBg: 'rgba(0, 0, 0, 0.02)',
  headerBtnAccent: '#fff',
  headerBtnShadow: 'inset 0 0 10px rgba(0,0,0,0.12)',
}