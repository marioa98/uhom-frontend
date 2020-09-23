import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import PropertiesList from "../smart/Properties/PropertiesList";
import { getCurrentPageByQuery, getTotalPages, getValidPage } from "../../services/pagination/PaginationService";
import Banner from "../dumb/Banner";
import useNavigation from "../../services/hooks/historyNavigation";
import SearchPanel from "../smart/SearchPanel/SearchPanel"
import { useSessionInfo } from "../../services/sessionInfo";

import usePropertiesIndex from "../../services/hooks/propertiesHooks";
import Loading from "./Loading";

function PropertiesCatalog({ location }){

  const noResultsMessage = "No se encuentraron propiedades con las características especificadas."
  const { id } = useSessionInfo() || {};
  
  const queryPage = getCurrentPageByQuery(location.search);
  const [page, setPage] = useState( getValidPage(queryPage) );
  const [totalPages, setTotalPages] = useState(1);
  const [params, setParams] = useState({user_id: id})

  const { data, itemsPerPage, totalItems, error, mutate, fetcher } = usePropertiesIndex(`/properties?page=${page}`, params)
  const { data: properties } = data || {};
  const goTo = useNavigation();

  const updateTotalPages = () => {
    const tmpTotal = getTotalPages(totalItems, itemsPerPage)
    if(tmpTotal !== totalPages) setTotalPages(tmpTotal);
  }

  useEffect(() => {
    updateTotalPages()
  }, [totalItems])

  const searchProperties = async ({params: newParams}) => {
    const newProperties = await fetcher(`/properties`, {...params, ...newParams})
    .then(({data}) => data)
    setParams(() => ({...params, ...newParams}))
    
    await mutate({ ...data, data: newProperties }, false)
  }

  const handleChange = (event, data) => {
    const currentPage = data.activePage
    setPage(currentPage)
    goTo(`/properties?page=${currentPage}`)
  }


  const paginationProps = {
    totalPages: totalPages,
    currentPage: page,
    handleChange: handleChange
  }

  if(error) return(
    <Banner 
      title="500" 
      subtitle="No se pudo obtener información del servidor"
    />
  )
  if(!properties) return <Loading/>

  return(
    <>
      <SearchPanel 
        searchProperties={searchProperties}
      />
      { 
        properties.length !== 0
        ? <PropertiesList properties={properties} paginationProps={paginationProps}/>
        : <Banner 
            title="Ups!" 
            subtitle={noResultsMessage}
          />
      }
    </>
  )
}

export default withRouter(PropertiesCatalog);