import axios from "axios";

let abc = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID I2wmpx2PkAmiI3LadzHvWnE2QnRG0a_l2eaQiIw0o8M"
  }
});

export default abc;
