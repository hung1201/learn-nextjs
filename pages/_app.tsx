import axiosCLient from "@/api-client/axios-client";
import { EmptyLayout } from "@/components/layout";
import { AppPropsWithLayout } from "@/models";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "@/utils/theme";
import createEmotionCache from "@/utils/create-emotion-cache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component?.Layout ?? EmptyLayout;
  return (
    <SWRConfig
      value={{
        fetcher: (url) => axiosCLient.get(url),
        shouldRetryOnError: false,
      }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

