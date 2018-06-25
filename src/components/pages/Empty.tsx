import * as React from "react";
import { Card } from "antd";
import * as d3 from "d3";

interface ChartData {
    date: number;
    value: number;
}

interface State {
    width: number;
    height: number;
    top: number;
    bottom: number;
    right: number;
    left: number;
}

class EmptyPage extends React.Component<{}, State> {

    public state: State = {
        width: 600,
        height: 600,
        top: 30,
        bottom: 30,
        right: 20,
        left: 50,
    };

    private ref: SVGSVGElement;

    private data: any = [
        {date: 100, value: 100},
        {date: 200, value: 200},
        {date: 300, value: 300},
        {date: 400, value: 400},
        {date: 500, value: 500},
        {date: 600, value: 600},
    ];

    private xScale = d3.scaleLinear().domain([0, 600]).range([0, this.state.width]);
    private yScale = d3.scaleLinear().domain([0, 600]).range([this.state.height, 0]);

    public started() {
        const circle = d3.select(this).classed("dragging", true);
        d3.event.on("drag", dragged).on("end", ended);

        const xScale = d3.scaleLinear().domain([0, 600]).range([0, 530]);
        const yScale = d3.scaleLinear().domain([0, 600]).range([550, 0]);

        function dragged(d: any) {
            circle
                .attr("cx", d3.event.x)
                .attr("cy", d3.event.y);
        }

        function ended() {
            circle.classed("dragging", false);
        }
    }

    public componentDidMount() {

        this.setState({
            width: this.state.width - this.state.left - this.state.right,
            height: this.state.height - this.state.top - this.state.bottom,
        });
        const margin = {top: 30, right: 20, bottom: 30, left: 50},
            width = 600 - margin.left - margin.right,
            height = 600 - margin.top - margin.bottom;

        const context: any = d3.select(this.ref);
        const lineFunc = d3.line<ChartData>()
            .x((d) => this.xScale(d.date))
            .y((d) => this.yScale(d.value))
            .curve(d3.curveCardinal);

        const xAxis = d3.axisBottom(this.xScale)
            .tickSize(5);
        const yAxis = d3.axisLeft(this.yScale)
            .tickSizeInner(5)
            .tickSizeOuter(10);

        context
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        context.append("g")
            .attr("transform", "translate(0," + 600 + ")")
            .classed('x axis', true)
            .call(xAxis);

        context.append("g")
            .classed('y axis', true)
            .call(yAxis);

        context
            .append("path")
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 4)
            .attr("d", lineFunc(this.data));

        context.selectAll(".circle")
            .data(this.data)
            .enter().append("circle")
            .attr("class", "circle")
            .attr("r", 10)
            .attr("cx", (d: ChartData) => this.xScale(d.date))
            .attr("cy", (d: ChartData) => this.yScale(d.value))
            .call(d3.drag().on("start", this.started));
    }

    public render(): JSX.Element {
        return (
            <Card bordered title="Hello React & Antd" style={{ margin: "16px 16px"}}>
                <svg className="container" width={700} height={700} ref={(ref: SVGSVGElement) => this.ref = ref}>
                </svg>
            </Card>
        );
    }
}

export default EmptyPage;
