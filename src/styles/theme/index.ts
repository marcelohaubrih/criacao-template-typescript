export const colors = {
  black10: '#000',
  gray10: '#666666',
  white10: '#FFF',
};

const defaultFontStyle = {
  fontWeight: 300,
};

export const fontStyles = {
  default: {
    ...defaultFontStyle,
  },
  title: {
    ...defaultFontStyle,
    fontSize: 48,
  },
};

export default { colors, fontStyles };
