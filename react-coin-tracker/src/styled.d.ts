import 'styled-components';

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    cardColor: string;
    cardBorderColor?: string;
    headerColor: string;
    headerBtnBg: string;
    headerBtnAccent: string;
    headerBtnShadow: string;
  }
}