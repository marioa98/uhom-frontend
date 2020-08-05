import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import '../../../../assets/styles/General/showcase.css'

const options = [
  { key: 1, text: 'Mostrar todas', value: 1 },
  { key: 2, text: 'Mejor valoradas', value: 2 },
  { key: 3, text: 'Mas recientes', value: 3 },
  { key: 4, text: 'Mas economicas', value: 4 },
  { key: 5, text: 'Mas valiosas', value: 5 },
]

const SelectiveFilter = () => (
  <Dropdown options={options} selection placeholder='Mostrar todas' className='dropdown-selective'/>
)

export default SelectiveFilter
