import React from "react";
import { useParams, withRouter } from "react-router-dom";
import { useSessionInfo } from "../../services/sessionInfo";
import Panel from "../smart/PropertyPanel/Panel"
import { usePropertyShow } from "../../services/hooks/propertiesHooks";
import Error from "./Error"
import Loading from "./Loading";

function PropertyPanel(props){
  const { property_uuid } = useParams()
  const { id } = useSessionInfo() || {};
  const { response, property, error } = usePropertyShow(`/properties/${property_uuid}`, { user_id: id})
  
  if(!response) return <Loading/>

  return(
    <>
      {
        property
        ? <Panel propertyInfo={property}
            propertyLocation={property.location}
          />
        : <Error
            message="Parece que la propiedad que buscas no existe."
            redirectionPath="/properties"
            redirectionMessage="Ver más propiedades."
          />
      }
    </>
  )
}

export default withRouter(PropertyPanel);