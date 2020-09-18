import useSWR from "swr"
import fetcher from "../../config/axiosSetup"

const useUserInfo =(url, headers) => {
  const { data: response={}, error } = useSWR(url, url => fetcher(url, null, headers))
  const { data: user } = response

  return { user, error }
}

export default useUserInfo