import PropertiesController from "../controllers/PropertiesController";

export const propertyList = path => {
  const response = PropertiesController.index(path)
    .then(res => {
      if(res.status === 200){
        return {
          data: res.data,
          totalPages: res.headers['total'],
          itemsPerPage: res.headers['per-page']
        }
      }
      return res.data
    })
    .catch(err => ({error: err}));
  
  return response;
}