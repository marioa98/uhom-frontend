import React from 'react'
import { Card, Placeholder } from 'semantic-ui-react'
import '../../../assets/styles/General/properties.css'
import '../../../assets/styles/General/grid.css'




const url = `https://randomuser.me/api/portraits/thumb/men/0.jpg`;

const ProperiesList = () => (
    
    <Card.Group itemsPerRow={3} className="propertisList-container">
        <Card className="grid">                                       
            <img src={url} alt=""/>                 
        </Card>  
        <Card className="grid">                                       
            <img src={url} alt=""/>                 
        </Card>  
        <Card className="grid">                                       
            <img src={url} alt=""/>                 
        </Card>  
        <Card className="grid">                                       
            <img src={url} alt=""/>                 
        </Card>  
        <Card className="grid">                                       
            <img src={url} alt=""/>                 
        </Card>  
        <Card className="grid">                                       
            <img src={url} alt=""/>                 
        </Card>  
        <Card className="grid">                                       
            <img src={url} alt=""/>                 
        </Card>  
        <Card className="grid">                                       
            <img src={url} alt=""/>                 
        </Card>  
        <Card className="grid">                                       
            <img src={url} alt=""/>                 
        </Card>  
        
        
        
        
         
    </Card.Group>
  )  
  
export default ProperiesList;

