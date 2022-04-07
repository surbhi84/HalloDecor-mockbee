import { useEffect } from "react";

export const Error = ({ err, setError }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return <div className="alert color-rp snackbar-center">{err}</div>;
};
