import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import PropertiesList from "../smart/Properties/PropertiesList";
import ShowCase from '../smart/showcase/ShowCase';
import {getCurrentPageByQuery, getTotalPages, getValidPage} from "../../services/pagination/PaginationService";
import { propertyList } from "../../services/PropertiesService";
import Banner from "../dumb/Banner";
import useNavigation from "../../services/hooks/historyNavigation";

function PropertiesCatalog(props){
  const noResultsMessage = "No se encuentraron propiedades con las características especificadas."
  const PROPERTY_BASE_URI = "/properties?page=";

  const queryPage = getCurrentPageByQuery(props.location.search);
  const [page, setPage] = useState( getValidPage(queryPage) );
  const [totalPages, setTotalPages] = useState(1);
  const [properties, setProperties] = useState([]);
  const goTo = useNavigation('replace');
  
  const updateTotalPages = (total_items, per_page) => {
    const total = getTotalPages(total_items, per_page)
    if(total !== totalPages) setTotalPages(total);
  }

  const getProperties = async ({page: pageParam, params}) => {
    const results = await propertyList(`${PROPERTY_BASE_URI}${pageParam || page}`, params);
    setProperties(results.data);
    updateTotalPages(results.totalPages, results.itemsPerPage)
  }
  
  useEffect(() => {
    (async () => {
      getProperties({ page })
    })();
  }, [page])

  const handleChange = (event, data) => {
    const currentPage = data.activePage

    setPage(currentPage)
    goTo(`${PROPERTY_BASE_URI}${currentPage}`)
  }


  const paginationProps = {
    totalPages: totalPages,
    currentPage: page,
    handleChange: handleChange
  }

  return(
    <>
      <ShowCase getProperties={getProperties}/>
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