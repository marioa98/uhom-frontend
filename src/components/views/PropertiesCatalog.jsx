import React, {useState} from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";

import PropertiesList from "../smart/Properties/PropertiesList";
import ShowCase from '../smart/showcase/ShowCase';
import {NoResultsMessage} from "../smart/Properties/NoResultsMessage";
import {getCurrentPageByQuery, getTotalPages, getValidPage} from "../../services/pagination/PaginationService";
import { propertyList } from "../../services/PropertiesService";

function PropertiesCatalog(props){

  const queryPage = getCurrentPageByQuery(props.location.search);
  const [page, setPage] = useState( getValidPage(queryPage) );
  const [totalPages, setTotalPages] = useState(1);
  const [properties, setProperties] = useState([]);
  const noResultsMessage = "No se encuentraron propiedades con las características especificadas."
  
  const history = useHistory();
  
  React.useEffect(() => {
    (async () => {
      const results = await propertyList(`/properties?page=${page}`);
      setProperties(results.data);
      updateTotalPages(results.totalPages, results.itemsPerPage)
    })();
  }, [page])

  const handleChange = (event, data) => {
    const currentPage = data.activePage

    setPage(currentPage)
    history.push({
      search: `?page=${currentPage}`
    })
  }

  const updateTotalPages = (total_items, per_page) => {
    const total = getTotalPages(total_items, per_page)
    if(total !== totalPages) setTotalPages(total);
  }

  const paginationProps = {
    totalPages: totalPages,
    currentPage: page,
    handleChange: handleChange
  }

  return(
    <>
      <ShowCase/>
      { 
        properties.length !== 0
        ? <PropertiesList properties={properties} paginationProps={paginationProps}/>
        : <NoResultsMessage message={noResultsMessage}/>
      }
    </>
  )
}

export default withRouter(PropertiesCatalog);