import storage from '../storage';

export const AUTH_GET_PERMISSIONS = () => {
  const lbtoken = storage.load('lbtoken');
  return Promise.resolve(lbtoken);
};