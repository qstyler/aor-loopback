import storage from '../storage';

export const AUTH_LOGIN = async (params, loginApiUrl) => {
  const { username, password } = params;
  const request = new Request(loginApiUrl, {
    method: 'POST',
    body: JSON.stringify({ email: username, password }),
    headers: new Headers({ 'Content-Type': 'application/json' }),
  });

  const response = await fetch(request);

  if (response.status < 200 || response.status >= 300) {
    throw new Error(response.statusText);
  }
  const { ttl, ...data } = await response.json();

  storage.save('lbtoken', data, ttl);

  return Promise.resolve();
}