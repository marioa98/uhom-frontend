import React, {useState} from "react";
import { Grid, Header, Pagination } from "semantic-ui-react";
import PropertiesList from "../smart/Properties/PropertiesList";
import ShowCase from '../smart/showcase/ShowCase'
import PropertiesController from "../../controllers/PropertiesController";
import {NoResultsMessage} from "../smart/Properties/NoResultsMessage"
import Paginator from "../smart/Pagination/Paginator";
import {getCurrentPageByQuery, getTotalPages} from "../../services/pagination/PaginationService";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";

function PropertiesCatalog(props){
  const queryPage = getCurrentPageByQuery(props.location.search);
  const [page, setPage] = useState( queryPage || 1);
  const [totalPages, setTotalPages] = useState(1);
  const [properties, setProperties] = useState([]);
  
  const history = useHistory();

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
    history.push({
      search: `?page=${data.activePage}`
    })
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
        <Paginator {...PaginatorProps}/>
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

export default withRouter(PropertiesCatalog);