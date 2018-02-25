import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_ERROR,
  AUTH_CHECK,
  AUTH_GET_PERMISSIONS
} from './methods';

export const authClient = (loginApiUrl, noAccessPage = '/login') => {

  return async (type, params) => {
    if (type === 'AUTH_LOGIN') return AUTH_LOGIN(params, loginApiUrl);

    if (type === 'AUTH_LOGOUT') return AUTH_LOGOUT();

    if (type === 'AUTH_ERROR') return AUTH_ERROR(params);

    if (type === 'AUTH_CHECK') return AUTH_CHECK(noAccessPage);

    if (type === 'AUTH_GET_PERMISSIONS') return AUTH_GET_PERMISSIONS();

    return Promise.resolve();
  };
};
