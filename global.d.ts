type Messages = typeof import('./messages/en.json');

declare global {
  interface IntlMessages extends Messages {}
}
