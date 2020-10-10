import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

class ServerPublicaciones extends Component {
    constructor(props) {
        super(props);
        this.state = {labels: []};
    } 

    componentDidMount() {
        
        this.interval = setInterval(() => {
          axios.get(this.props.URL + `/data`)
            .then(res => {
                this.setState({labels:res.data})
                console.log((res.data[0]['Autor']));
            })
        }, 5000)
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
        <Container fluid>
            <Row className='text-center'>
                <Col className='mx-auto'>
                    <h1> PUBLICACIONES </h1>
                <table className='w-100'>
                    <thead ba>
                        <tr>
                            <th>
                                Autor
                            </th>
                            <th>
                                Publicacion
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.labels.map(this.verDatos)}
                    </tbody>
                </table>      
                </Col>
            </Row>
          </Container>
        );
    }

    verDatos(dato, index){
        console.log("sadasdasdasdasdasd");
        return(                    
            <tr key={index}>
            <td>
                {dato['Autor']}
            </td>
            <td>
                {dato['Publicacion']}
            </td>
            </tr>
        )
    }
}

export default ServerPublicaciones;