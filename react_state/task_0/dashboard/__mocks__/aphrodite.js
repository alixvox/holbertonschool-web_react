module.exports = {
  StyleSheet: {
    create: styles => styles,
  },
  css: () => '',
};

export const StyleSheetTestUtils = {
  suppressStyleInjection: jest.fn(),
};
