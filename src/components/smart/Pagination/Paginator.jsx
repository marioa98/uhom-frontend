import React from "react";
import { Grid, Icon, Pagination } from "semantic-ui-react";
import "../../../assets/styles/General/pagination.css"

export default function Paginator(props){
  const {totalPages, handleChange, currentPage} = props

  const enableComponent = () => totalPages > 1 ? true : false
  
  return(
    <>
      {
        enableComponent()
        ? <Grid.Row centered>
            <Pagination
              ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
              firstItem={{ content: <Icon name='fast backward' />, icon: true }}
              lastItem={{ content: <Icon name='fast forward' />, icon: true }}
              prevItem={{ content: <Icon name='caret left' />, icon: true }}
              nextItem={{ content: <Icon name='caret right' />, icon: true }}
              
              secondary
              pointing

              activePage={currentPage}
              defaultActivePage={currentPage}
              totalPages={totalPages}
              onPageChange={(event, data) => handleChange(event, data)}
            />
          </Grid.Row>
        : null
      }
    </>
  )
}