import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Cards extends Component {
    render() {
        const { image, superhero, publisher } = this.props.movies

        return (
            <div>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{superhero}</Card.Title>
                        <Card.Text>
                            {publisher}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}