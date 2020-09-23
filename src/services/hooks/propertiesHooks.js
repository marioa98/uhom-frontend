import useSWR from "swr";
import fetcher from "../../config/axiosSetup";

const usePropertiesIndex = (url, params) => {
  const { data, error, mutate } = useSWR(url, url => fetcher(url, params))
  const { headers={} } = data || {};
  const [totalItems, itemsPerPage] = getPageHeaders(headers)

  return { data, itemsPerPage, totalItems, error, mutate, fetcher }
}

const getPageHeaders = headers => {
  if(headers) return [ headers["total"], headers["per-page"] ]

  return [0, 0]
}

export const usePropertyShow = (url, params) => {
  const { data: response, error } = useSWR(url, url => fetcher(url, params))
  const { data: property } = response || {};

  return { property, error, response }
}

export default usePropertiesIndex