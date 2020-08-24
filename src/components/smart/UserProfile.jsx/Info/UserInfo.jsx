import React from "react";
import "../../../../assets/styles/General/headers.css"
import "../../../../assets/styles/General/buttons.css"
import { Button, Grid, Header, Segment } from "semantic-ui-react";

export default function UserInfo(props){
  const { user } = props;

  return(
    <div>
      <Segment vertical>
        
        <Grid.Column width={4}>
          <Button floated="right" className="btn-signin">
            Editar
          </Button>
        </Grid.Column>

        <Grid columns={2} stackable textAlign="center">
          <Grid.Row verticalAlign="middle">
            <Grid.Column width={6}>
              <Header
                as="h3"
                content="Nombre(s):"
                subheader={` ${user.names}`}
              />
            </Grid.Column>

            <Grid.Column width={6}>
              <Header
                as="h3"
                content="Apellido(s):"
                subheader={` ${user.surnames}`}
              />
            </Grid.Column>
          </Grid.Row>

            <Grid.Row verticalAlign="middle">
              <Grid.Column width={6}>
                <Header
                  as="h3"
                  content="Correo electrónico:"
                  subheader={` ${user.email}`}
                />
              </Grid.Column>

              <Grid.Column width={6}>
                <Header
                  as="h3"
                  content="Número telefónico"
                  subheader={` ${user.phone_number}`}
                />
              </Grid.Column>
            </Grid.Row>

        </Grid>
      </Segment>
    </div>
  )
}