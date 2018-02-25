import storage from '../storage';

export const AUTH_CHECK = (noAccessPage) => {
  const token = storage.load('lbtoken');
  if (token && token.id) {
    return Promise.resolve();
  } else {
    storage.remove('lbtoken');
    return Promise.reject({ redirectTo: noAccessPage });
  }
};