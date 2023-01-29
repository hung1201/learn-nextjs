import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy, { ProxyResCallback } from "http-proxy";
import Cookies from "cookies";

const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method != "POST") {
    return res.status(404).json({ message: "Method not support" });
  }
  return new Promise((resolve, reject) => {
    // convert cookies to header Auth

    const handleLogout: ProxyResCallback = (proxyRes, req, res) => {
      const cookies = new Cookies(req, res);
      try {
        cookies.set("accessToken");
        (res as NextApiResponse).status(200).json({
          message: "Login successfully",
        });
      } catch (error) {
        (res as NextApiResponse).status(500).json({
          message: "Login failed",
        });
      }
      resolve(true);
    };
    // don't send cookie to API Server

    req.headers.cookie = "";

    //   api/products
    // https://js-post-api.herokuapp.com/api/products

    proxy.once("proxyRes", handleLogout);
    proxy.web(req, res, {
      target: "https://js-post-api.herokuapp.com",
      changeOrigin: true,
      selfHandleResponse: true,
    });
  });
}
