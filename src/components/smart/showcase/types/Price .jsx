import React, { Component } from 'react'
import { Dropdown, Container, Button} from 'semantic-ui-react'
import LessPrice from './price/LessPrice'
import MorePrice from './price/MorePrice'


export default class Price extends Component{
    
    render(){
        return(
            <Dropdown text='Precio' floating labeled button className='icon'>
                <Dropdown.Menu className="price-dropdow-menu">
                        <Container className="price-section">
                            <div>
                                <p>Precio minimo</p>
                                <LessPrice/>
                                <p>Precio mayor</p>
                                <MorePrice/>   
                                <div className="bar-make-filter-price-button">
                                    <Button className="make-filter-price-button">Listo</Button>  
                                </div>                         
                            </div>
                        </Container>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}
