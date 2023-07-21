import axios from "axios";

const http = (url, type) => {
  return new Promise((resolve, reject) => {
    axios[type](`${url}`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default http;
