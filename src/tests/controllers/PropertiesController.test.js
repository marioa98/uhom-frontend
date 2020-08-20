import axios from "axios";
import PropertiesController from "../../controllers/PropertiesController";
import {properties, singleProperty} from './defaults/propertyDefaults'
jest.mock('axios')

describe('index() method', () => {
  it('should fetch all properties', () =>{
    axios.get.mockResolvedValue(properties)
    return PropertiesController.index('/properties')
      .then(data => expect(data).toEqual(properties))
  });

  it('should fetch data with query params', async () => {
    axios.get.mockImplementationOnce(() =>  Promise.resolve(properties))
    
    await expect(PropertiesController.index('/properties?page=2'))
      .resolves.toEqual(properties)
    
    expect(axios.get).toHaveBeenCalledWith(
      '/properties?page=2'
    )
  })
})

describe('show() method', () => {
  it('should fetch a property by uuid', () => {
    axios.get.mockResolvedValue(singleProperty)
    
    return PropertiesController.show(singleProperty.uuid)
      .then(data => expect(data).toEqual(singleProperty))
  })
})