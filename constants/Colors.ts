export type ColorThemeType = {
  primary: string;
  text: string;
  textSecondary: string;
  background: string;
  border: string;
  card: string;
  input: string;
  danger: string;
  warning: string;
  success: string;
}

export type ColorsType = {
  light: ColorThemeType;
  dark: ColorThemeType;
}

export const Colors = {
  light: {
    primary: "#1f58db",
    text: "#000000",
    textSecondary: "#8c8c8c",
    background: "#f7f7f7",
    border: "#e8e8e8",
    card: "#ffffff",
    input: "#f2f2f2",
    danger: "#f83030",
    warning: '#f4d112',
    success: '#42f14f'
  },
  dark: {
    primary: "#1f58db",
    text: "#f0f0f0",
    textSecondary: "#b0b0b0",
    background: "#2b2b2d",
    border: "#3a3a3c",
    card: "#323234",
    input: "#323234",
    danger: "#f83030",
    warning: '#f4d112',
    success: '#42f14f'
  }
} satisfies ColorsType;