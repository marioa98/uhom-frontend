import React from 'react'
import { Card, Placeholder } from 'semantic-ui-react'
import '../../../assets/styles/General/properties.css'
var img =0;
while (img<10) {
    img++
}
const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

const ProperiesList = () => (
    
    <Card.Group itemsPerRow={3} className="propertisList-container">
        <Card>                                       
            <img src={url} alt=""/>                 
        </Card>  
        <Card>                                       
            <img src={url} alt=""/>                 
        </Card>  
        <Card>                                       
            <img src={url} alt=""/>                 
        </Card>  
        <Card>                                       
            <img src={url} alt=""/>                 
        </Card>  
        <Card>                                       
            <img src={url} alt=""/>                 
        </Card>  
        <Card>                                       
            <img src={url} alt=""/>                 
        </Card>  
        <Card>                                       
            <img src={url} alt=""/>                 
        </Card>  
        <Card>                                       
            <img src={url} alt=""/>                 
        </Card>  
        <Card>                                       
            <img src={url} alt=""/>                 
        </Card>  
        
         
    </Card.Group>
  )  
  
export default ProperiesList;

