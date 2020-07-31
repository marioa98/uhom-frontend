export const disableButton = errors => 
  Object.keys(errors).length !== 0 
    ? true
    : false