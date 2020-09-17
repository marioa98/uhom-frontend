import useSWR from "swr";
import fetcher from "../../config/axiosSetup";

const usePropertiesIndex = (url, params) => {
  
  const { data: response, error } = useSWR(url, url => fetcher(url, 'get', params))
  const { headers={}, data: properties } = response || {}
  const itemsPerPage = headers["per-page"] || 0;
  const totalItems = headers["total"] || 0
  
  return { properties, itemsPerPage, totalItems, error }
}

export const usePropertyShow = (url, params) => {
  const { data: response, error } = useSWR(url, url => fetcher(url, 'get', params))
  const { data: property } = response || {};

  return { property, error, response }
}

export default usePropertiesIndex