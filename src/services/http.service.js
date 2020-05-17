import { CONFIG } from "../constants/constants";

export const GET = (url) => {
  url = CONFIG.HOST + url;
  return fetch(url).then((res) => res.json());
};

export const POST = (url, payload) => {
  url = CONFIG.HOST + url;
  return fetch(url, {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(payload),
  }).then((res) => res.json());
};
