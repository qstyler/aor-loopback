import storage from '../storage';

export const AUTH_LOGOUT =  () => {
  storage.remove('lbtoken');
  return Promise.resolve();
};