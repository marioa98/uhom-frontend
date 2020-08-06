import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import '../../../../../assets/styles/General/showcase.css'

const options = [
  { key: 1, text: '$1,000,000', value: 1 },
  { key: 2, text: '$1,500,000', value: 2 },
  { key: 3, text: '$2,00,000', value: 3 },
  { key: 4, text: '$Cualquier precio', value: 4 },

]

const MorePrice = () => (
  <Dropdown options={options} selection placeholder='Selecciona precio' className='dropdown-selective'/>
)

export default MorePrice