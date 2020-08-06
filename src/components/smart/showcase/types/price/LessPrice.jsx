import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import '../../../../../assets/styles/General/showcase.css'

const options = [
  { key: 1, text: '$Cualquier precio', value: 1 },
  { key: 2, text: '$300,000', value: 2 },
  { key: 3, text: '$600,000', value: 3 },
  { key: 4, text: '$900,000', value: 4 },

]

const LessPrice = () => (
  <Dropdown options={options} selection placeholder='Selecciona precio' className='dropdown-selective'/>
)

export default LessPrice
