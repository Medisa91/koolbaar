export const rtkQueryErrorLogger = () => {
  return (next) => (action) => {
    const result = next(action);
    if (result?.payload?.status === 401) {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("expire");
      window.localStorage.removeItem("refreshToken");
      window.localStorage.removeItem("tokenType");
      const isBrowser = typeof window !== "undefined";
      if (isBrowser) {
        const win: Window = window;
        win.location = "/";
      }
    }
    return result;
  };
};
