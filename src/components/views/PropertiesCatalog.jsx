import React, {useState} from "react";
import { Grid, Header, Pagination } from "semantic-ui-react";
import PropertiesList from "../smart/Properties/PropertiesList";
import ShowCase from '../smart/showcase/ShowCase'
import PropertiesController from "../../controllers/PropertiesController";
import {NoResultsMessage} from "../smart/Properties/NoResultsMessage"
import Paginator from "../smart/Pagination/Paginator";
import {getTotalPages} from "../../services/PaginationService";

export default function PropertiesCatalog(props){
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [properties, setProperties] = useState([]);
  
  React.useEffect(() => {
    PropertiesController.index(page)
      .then(res => {
        if(res.status === 200){
          setProperties(res.data)
          updateTotalPages(res.headers['total'], res.headers['per-page'])
        }
      })
      .catch(err => console.log(err))
  }, [page])

  const handleChange = (event, data) => {
    setPage(data.activePage)
  }

  const updateTotalPages = (total_items, per_page) => {
    const total = getTotalPages(total_items, per_page)
    if(total != totalPages) setTotalPages(total);
  }

  const PaginatorProps = {
    totalPages: totalPages,
    currentPage: page,
    handleChange: handleChange
  }

  return(
    <>
      <ShowCase/>
      <Grid stackable columns={3} padded>
        <Paginator {...PaginatorProps}
        />
        { 
          properties.length !== 0
          ? <PropertiesList properties={properties}/>
          : <NoResultsMessage/>
        }
        <Paginator {...PaginatorProps}/>
      </Grid>
    </>
  )
}