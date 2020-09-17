import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

import PropertiesList from "../smart/Properties/PropertiesList";
import { getCurrentPageByQuery, getTotalPages, getValidPage } from "../../services/pagination/PaginationService";
import Banner from "../dumb/Banner";
import useNavigation from "../../services/hooks/historyNavigation";
import { useSessionInfo } from "../../services/sessionInfo";

import usePropertiesIndex from "../../services/hooks/propertiesHooks";

function PropertiesCatalog({ location }){

  const noResultsMessage = "No se encuentraron propiedades con las características especificadas."
  const { id } = useSessionInfo() || {};
  
  const queryPage = getCurrentPageByQuery(location.search);
  const [page, setPage] = useState( getValidPage(queryPage) );
  const [totalPages, setTotalPages] = useState(1);
  const { properties, itemsPerPage, totalItems } = usePropertiesIndex(`/properties?page=${page}`, { user_id: id})
  const goTo = useNavigation();

  const updateTotalPages = () => {
    const tmpTotal = getTotalPages(totalItems, itemsPerPage)
    if(tmpTotal !== totalPages) setTotalPages(tmpTotal);
  }

  useEffect(() => {
    updateTotalPages()
  }, [totalItems])

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

  return(
    <>
      { 
        properties && properties.length !== 0
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