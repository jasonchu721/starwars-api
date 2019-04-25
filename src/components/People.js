import React from 'react'
import axios from 'axios';
import { Container, Table, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import PlanetName from "./PlanetName"


class People extends React.Component {
  state = 
  { people: [],
    planets: []
  }

  componentDidMount() {
    axios
      .get(`https://swapi.co/api/people`)
      .then(res => this.setState(
        { people: res.data.results }));

    axios
      .get(`https://swapi.co/api/planets`)
      .then(res => this.setState(
        { planets: res.data.results }));
  }

  render() {

    return (
      <>
        <Container>
          <Header>People</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Homeworld</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.state.people.map(person => (
                <Table.Row>
                <Table.Cell>{person.name}</Table.Cell>
                <Link to={'/planets/${planets.id}'}>
                <Table.Cell> {person.homeworld}</Table.Cell>
                </Link>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Container>
      </>
    )
  }
}

export default People;