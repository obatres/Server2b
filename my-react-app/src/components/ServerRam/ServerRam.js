import React, { Component } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Container, Row, Col } from 'react-bootstrap';

class ServerRam extends Component {
    constructor(props) {
        super(props);
        let data_percentage = {
          labels: [],
          datasets: [
            {
              label: '% de RAM utilizado',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(101,27,237,1)',
              borderColor: 'rgba(101,27,237,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(101,27,237,1)',
              pointBackgroundColor: 'rgba(101,27,237,1)',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(101,27,237,1)',
              pointHoverBorderColor: 'rgba(101,27,237,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 5,
              pointHitRadius: 10,
              data: []
            }
          ]
        };
        this.state = { labels: [], data: data_percentage.datasets[0].data, actual: 0, dataset: data_percentage};
    } 

    componentDidMount() {
        
        this.interval = setInterval(() => {
          axios.get(this.props.URL + `/ram`)
            .then(res => {
            let labels1 = this.state.labels;
            let dt = new Date();
            labels1.push(dt.toLocaleTimeString());
            let data1 = this.state.data;
        
            //let resdata = JSON.parse(res.data['cpu']).MemoriaTotal;
            console.log(res.data);
            
            let resdata = res.data;
            data1.push(resdata);
            if (labels1.length > 20) {
                labels1.shift();
                data1.shift();
            }
    
              this.setState({ data: data1 })
              //dataset
              let data_percentage = {
                labels: labels1,
                datasets: [
                  {
                    label: '% de ram utilizado',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(101,27,237,1)',
                    borderColor: 'rgba(101,27,237,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(101,27,237,1)',
                    pointBackgroundColor: 'rgba(101,27,237,1)',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(101,27,237,1)',
                    pointHoverBorderColor: 'rgba(101,27,237,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 5,
                    pointHitRadius: 10,
                    data: data1
                  }
                ]
              };
    
              this.setState({ actual: resdata, labels: labels1, data: data1, dataset: data_percentage });
              let lineChart = this.reference.chartInstance
    
              lineChart.update();
    
    
            })
        }, 5000)
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
          <div>
            <Container fluid>
              <Row>
                <Col>
                  <h1> Porcentaje de RAM utilizado</h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p > {this.state.actual}% en uso</p>
                </Col>
              </Row>
              <Row>
                <Col md={2}>
                </Col>
                <Col md={8}>
                  <Line data={this.state.dataset} ref={(reference) => this.reference = reference} />
                </Col>
              </Row>

            </Container>

          </div>
        );
    }
}


export default ServerRam;