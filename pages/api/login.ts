import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy, { ProxyResCallback } from "http-proxy";
import Cookies from "cookies";

const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    bodyParser: false,
  },
};
// Save token in httponly cookie
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method != "POST") {
    return res.status(404).json({ message: "Method not support" });
  }
  return new Promise((resolve, reject) => {
    // don't send cookie to API Server

    req.headers.cookie = "";

    const handleLoginRes: ProxyResCallback = (proxyRes, req, res) => {
      let body = "";
      proxyRes.on("data", (chunk) => {
        body += chunk;
      });
      proxyRes.on("end", () => {
        try {
          const { accessToken, expiredAt } = JSON.parse(body);

          // Convert token to cookies

          const cookies = new Cookies(req, res, {
            secure: process.env.NODE_ENV != "development",
          });
          cookies.set("accessToken", accessToken, {
            httpOnly: true,
            sameSite: "lax",
            expires: new Date(expiredAt),
          });
          (res as NextApiResponse).status(200).json({
            message: "Login successfully",
          });
        } catch (error) {
          (res as NextApiResponse).status(500).json({
            message: "Login failed",
          });
        }
        resolve(true);
      });
    };

    proxy.once("proxyRes", handleLoginRes);
    proxy.web(req, res, {
      target: "https://js-post-api.herokuapp.com",
      changeOrigin: true,
      selfHandleResponse: true,
    });
  });
}
