import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'

const CaracteristicFilter = () => (
    
      <Dropdown text='Filtrar por caracteristicas' floating labeled button className='icon'>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Dropdown text='Metros cuadrados minimos' floating labeled button>
              <Dropdown.Menu>
                <Dropdown.Header>m2</Dropdown.Header>
                <Dropdown.Item>500</Dropdown.Item>
                <Dropdown.Item>1,000</Dropdown.Item>
                <Dropdown.Item>5,000</Dropdown.Item>
                <Dropdown.Item>10,000</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown text='Precio maximo' floating labeled button>
              <Dropdown.Menu>
                <Dropdown.Header>$mx</Dropdown.Header>
                <Dropdown.Item>500,000</Dropdown.Item>
                <Dropdown.Item>1,000,000</Dropdown.Item>
                <Dropdown.Item>1,500,000</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Dropdown.Item>         
          <Dropdown.Item>
            <Dropdown text='Baños' floating labeled button>
              <Dropdown.Menu>
                <Dropdown.Header>Completos</Dropdown.Header>
                <Dropdown.Item>1</Dropdown.Item>
                <Dropdown.Item>2</Dropdown.Item>
                <Dropdown.Item>3</Dropdown.Item>
                <Dropdown.Item>4</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Medios</Dropdown.Header>
                <Dropdown.Item>1</Dropdown.Item>
                <Dropdown.Item>2</Dropdown.Item>
                <Dropdown.Item>3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown text='Numero de habitaciones' floating labeled button>
              <Dropdown.Menu>
                <Dropdown.Item>1</Dropdown.Item>
                <Dropdown.Item>2</Dropdown.Item>
                <Dropdown.Item>3</Dropdown.Item>
                <Dropdown.Item>4</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown text='Numero de baños' floating labeled button>
              <Dropdown.Menu>
                <Dropdown.Item>1</Dropdown.Item>
                <Dropdown.Item>2</Dropdown.Item>
                <Dropdown.Item>3</Dropdown.Item>
                <Dropdown.Item>4</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown text='Ubicacion' floating labeled button>
              <Dropdown.Menu>
                <Dropdown.Header>Municipio</Dropdown.Header>
                <Dropdown.Item>Armería</Dropdown.Item>
                <Dropdown.Item>Colima</Dropdown.Item>
                <Dropdown.Item>Comala</Dropdown.Item>
                <Dropdown.Item>Coquimatlán</Dropdown.Item>
                <Dropdown.Item>Cuauhtémoc</Dropdown.Item>
                <Dropdown.Item>Ixtlahuacán</Dropdown.Item>
                <Dropdown.Item>Manzanillo</Dropdown.Item>
                <Dropdown.Item>Minatitlan</Dropdown.Item>
                <Dropdown.Item>Tecomán</Dropdown.Item>
                <Dropdown.Item>Villa de Álvarez</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    
  )
  
  export default CaracteristicFilter
  