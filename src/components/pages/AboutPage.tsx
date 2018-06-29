import * as React from "react";
import { Card, Row, Col } from "antd";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartData {
    name: string;
    uv: number;
    pv: number;
    amt: number;
}

interface ResultsData {
    value: number;
    name: number;
}

class AboutPage extends React.Component<{}, {}> {
    public data: ChartData =  [
        {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
        {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
        {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
        {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
        {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
        {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    ];

    public generateData(itemsCnt: number) {
        const results: ResultsData[] = [];
        for (let x = 0; x < itemsCnt; x++) {
            const calc = 2 * x + x ** 2;
            const result: ResultsData = {
                value: calc,
                name: x,
            };
            results.push(result);
        }
        return results;
    }
    public render(): JSX.Element {
        return (
            <Card bordered title="Line graph" style={{ margin: "16px 16px"}}>
                <Row>
                    <Col span={12} offset={6}>
                        <div style={{height: 400}}>
                            <ResponsiveContainer>
                                <LineChart data={this.generateData(8)}
                                           margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                    <XAxis dataKey="name"/>
                                    <YAxis/>
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <Tooltip/>
                                    <Legend />
                                    <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{r: 8}}/>
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} offset={6}>
                        <div style={{height: 400, marginTop: 50}}>
                            <div style={{textAlign: "center", padding: 5, fontSize: "1.40rem", fontWeight: "bold"}}>
                                2 * x + x^2 = 0 <br />
                                2 * x = - x^2 <br />
                                x^2 = - (2 * x) <br />
                            </div>

                        </div>
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default AboutPage;
