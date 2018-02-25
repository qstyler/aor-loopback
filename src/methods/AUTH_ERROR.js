import storage from '../storage';

export const AUTH_ERROR =  (params) => {
  const status = params.message.status;
  if (status === 401 || status === 403) {
    storage.remove('lbtoken');
    return Promise.reject();
  }
  return Promise.resolve();
};