import { Component } from "react";
import { BuildChart } from './chart-builder/BuildChart';

class Home extends Component {
    constructor(props) {
        super(props);
        this.buildChart = new BuildChart();
    }

    render() {
        const { item, data } = this.props;

        const component = this.buildChart.create({ item, data });

        return (
            <>
                {component}
            </>
        )
    }
}

export default Home;