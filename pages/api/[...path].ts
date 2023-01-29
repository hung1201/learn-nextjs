import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from "http-proxy";
import Cookies from "cookies";

const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return new Promise((resolve, reject) => {
    // convert cookies to header Auth

    const cookies = new Cookies(req, res);
    const token = cookies.get("accessToken");
    if (token) {
      req.headers.authorization = `Bearer ${token}`;
    }
    // don't send cookie to API Server

    req.headers.cookie = "";

    //   api/products
    // https://js-post-api.herokuapp.com/api/products

    proxy.web(req, res, {
      target: "https://js-post-api.herokuapp.com",
      changeOrigin: true,
      selfHandleResponse: false,
    });
    proxy.once("proxyRes", () => {
      resolve(true);
    });
  });
}
