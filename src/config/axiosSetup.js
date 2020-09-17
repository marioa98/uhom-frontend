import axios from "axios";

const fetcher = (url, method, params={}, headers={}) =>
  axios({
    method: method,
    url: url,
    headers: headers,
    params: params,
    timeout: 1000
  })
  .then(res => res)
  .catch(err => err)
  
export default fetcher;