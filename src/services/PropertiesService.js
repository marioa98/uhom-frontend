import PropertiesController from "../controllers/PropertiesController";

export const PropertiesShowcaseHandler = page => {
  PropertiesController.index(page)
    .then(res => {
      if(res.status === 200){
        return res.data;
      }
    })
    .catch(err => console.log(err));
}