import "../styles/globals.css";
import type { AppProps } from "next/app";
import UserProvider from "../lib/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component className="bg-white" {...pageProps} />;
    </UserProvider>
  );
}

export default MyApp;
