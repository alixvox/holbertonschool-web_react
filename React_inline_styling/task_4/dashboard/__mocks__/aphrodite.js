export const StyleSheet = {
  create: styles => styles,
};

export const css = jest.fn(style => style);

export const StyleSheetTestUtils = {
  suppressStyleInjection: jest.fn(),
  clearBufferAndResumeStyleInjection: jest.fn()
};

export const keyframes = jest.fn();
