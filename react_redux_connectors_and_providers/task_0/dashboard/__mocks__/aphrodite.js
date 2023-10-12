module.exports = {
  StyleSheet: {
    create: styles => styles,
  },
  css: () => '',
  StyleSheetTestUtils: {
    suppressStyleInjection: jest.fn(),
    clearBufferAndResumeStyleInjection: jest.fn(),
  },
};
