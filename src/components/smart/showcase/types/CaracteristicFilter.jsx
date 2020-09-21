import React, { useState } from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'
import '../../../../assets/styles/General/properties.css'

const locations = ['Todos', 'Armería', 'Colima', 'Comala', 'Coquimatlán', 'Cuauhtémoc',
  'Ixtlahuacán', 'Manzanillo', 'Minatitlan', 'Tecomán', 'Villa'].map((e, i) => ({ key: `location_${i}`, value: i, text: e }))

const square_meters = [0, 500, 1000, 5000, 10000].map((e) => ({ key: `square_${e}`, value: e, text: e === 0 ? "Todos" : e }))
const price = ["0", "500,000", "1,000,000", "1,500,500"].map((e) =>
 ({ key: `price_${e}`, value: parseInt(e.split(',').join('')), text: e == "0" ? "Todos" : e })
)

const rooms = [0, 1, 2, 3, 4, 5, 6].map((_p, i) => ({ key: `room_${i}`, value: i, text: i === 0 ? "Todos" : i }))
const bathrooms = [0, 1, 2, 3, 4, 5, 6].map((_p, i) => ({ key: `bath_${i}`, value: i, text: i === 0 ? "Todos" : i }))

const CaracteristicFilter = ({ getProperties }) => {
  const [query, setQuery] = useState({});
  const [showFilter, setShowFilter] = useState(false)

  const handleFilter = () => {
    getProperties({params: query})
  }

  const onChange = ({ value, name }) => {
    if (value > 0) setQuery({ ...query, [name]: value })
    else {
      const new_query = { ...query }
      delete new_query[name]
      setQuery(new_query)
    }
  }

  return (
    <div>
      <div className="property-filter-button">
        <button
          className="btn-primary"
          onClick={() => setShowFilter(!showFilter)}
        ><Icon name='filter' /> Filtrar</button>
      </div>

      { showFilter && <Filters onChange={onChange} handleFilter={handleFilter} />}
    </div>
  )
}

const Filters = ({ onChange, handleFilter }) => (
  <div className="property-filter">
    <div>
      <label>Ubicación</label>
      <Dropdown
        clearable
        placeholder='Ubicacion'
        search
        selection
        options={locations}
        onChange={(_e, { value }) => onChange({ value, name: 'location_id' })}
      />
    </div>

    <div>
      <label>Número de cuartos</label>
      <Dropdown
        clearable
        placeholder='Número de cuartos'
        search
        selection
        options={rooms}
        onChange={(_e, { value }) => onChange({ value, name: 'bedrooms' })}
      />
    </div>


    <div>
      <label>Número de baños</label>
      <Dropdown
        clearable
        placeholder='Número de baños'
        search
        selection
        options={bathrooms}
        onChange={(_e, { value }) => onChange({ value, name: 'bathrooms' })}
      />
    </div>

    <div>
      <label>Superficie mínima</label>
      <Dropdown
        clearable
        placeholder='Superficie mínima'
        search
        selection
        options={square_meters}
        onChange={(_e, { value }) => onChange({ value, name: 'greater_than' })}
      />
    </div>

    <div>
      <label>Superficie máxima</label>
      <Dropdown
        clearable
        placeholder='Superficie máxima'
        search
        selection
        options={square_meters}
        onChange={(_e, { value }) => onChange({ value, name: 'less_than' })}
      />
    </div>

    <div>
      <label>Precio máximo</label>
      <Dropdown
        clearable
        placeholder='Precio máximo'
        search
        selection
        options={price}
        onChange={(_e, { value }) => onChange({ value, name: 'price_max' })}
      />
    </div>

    <button className="btn-primary" onClick={handleFilter}>Buscar</button>
  </div>
)

export default CaracteristicFilter
