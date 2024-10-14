

export const setToken = (token: string): void => {
  localStorage.setItem("accessToken", token);
};

export const getToken = (): string => {
  return localStorage.getItem("accessToken") || "";
};



export const setRefreshToken = (refreshToken: string) => {
  localStorage.setItem("refreshToken", refreshToken);
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem("refreshToken");
};

export const removeToken = (): void => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

export const logOut = (cb?: VoidFunction): void => {
  removeToken();
  cb?.();
};

export const isAuthenticated = () => {
  const userToken = getToken();
  if (userToken) {
    return true;
  } else {
    return false;
  }
};


