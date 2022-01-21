import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Cards from "./Cards";

export default class List extends Component {

    constructor() {
        super();
        this.state = {
            peliculas: []
        }
    }

    async componentDidMount() {
        const url = 'https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/heroes.json'
        const resp = await fetch(url)
        const data = await resp.json()
        const { results } = data

        this.setState({
            peliculas: results
        })
        console.log(results);
        console.log(this.state.peliculas);
    }

    render() {
        return (
            <Container>
                <h1>Lista de peliculas</h1>
                <hr />
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        this.state.peliculas.map((peli, index) => (
                            <Cards
                                key={index}
                                movies={peli}
                            />
                        ))
                    }
                </div>
            </Container>
        )
    }
}

