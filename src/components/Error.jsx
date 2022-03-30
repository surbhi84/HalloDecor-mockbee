import { useEffect } from "react";

export const Error = ({ err, setError }) => {
  useEffect(() => {
    console.log("timer");
    const timer = setTimeout(() => {
      setError("");
      console.log("timer");
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return <div className="alert color-rp snackbar-center">{err}</div>;
};
