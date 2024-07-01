// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
class ResizeObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {
    // No-op
  }
  unobserve() {
    // No-op
  }
  disconnect() {
    // No-op
  }
}

global.ResizeObserver = ResizeObserver;
global.beforeEach(() => {
  console.log('Starting a new test');
});
global.afterEach(() => {
  console.log('Finished a test');
  jest.clearAllTimers();
  jest.resetAllMocks();
});
