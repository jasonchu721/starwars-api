import React from 'react'
import axios from 'axios';
import { Container, Table, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Planets extends React.Component {
  state = { planets: [] }

  componentDidMount() {
    // const {id} = this.props.match.params
    axios
      .get(`https://swapi.co/api/planets/`)
      .then(res => this.setState(
        { planets: res.data.results }));
  }

  render() {

    return (
      <>
        <Container>
          <Header>Planets</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Diameter</Table.HeaderCell>
                <Table.HeaderCell>Gravity</Table.HeaderCell>
                <Table.HeaderCell>Climate</Table.HeaderCell>
                <Table.HeaderCell>Population</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.state.planets.map(planet => (
                <Table.Row>
                <Table.Cell>{planet.name}</Table.Cell>
                <Table.Cell>{planet.diameter}</Table.Cell>
                <Table.Cell>{planet.gravity}</Table.Cell>
                <Table.Cell>{planet.climate}</Table.Cell>
                <Table.Cell>{planet.population}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Container>
      </>
    )
  }
}

export default Planets;