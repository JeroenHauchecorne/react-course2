export function themeStyles(
  isDarkTheme: boolean
): React.CSSProperties | undefined {
  return {
    backgroundColor: isDarkTheme ? "#241f1f" : "#fff",
    color: isDarkTheme ? "#fff" : "#241f1f",
  };
}
