import React from "react";
import { Segment } from "semantic-ui-react";
import Banner from "../../../dumb/Banner";
import Loading from "../../../views/Loading";
import PropertiesCatalog from "../../../views/PropertiesCatalog";
import PropertiesList from "../../Properties/PropertiesList";

export default function UserLikes(){
  return(
    <Segment padded="very" basic>
      <PropertiesCatalog/>
    </Segment>
  )
}