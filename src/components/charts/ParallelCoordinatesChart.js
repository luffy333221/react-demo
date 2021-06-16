import { BaseChart } from "../chart-builder/BaseChart";

class ParallelCoordinatesChart extends BaseChart {

    render() {
        return (
            <p>Parallel Coordinates Chart</p>
        );
    }
}

export class ParallelCoordinatesChartFactory {
    get type() { return 'parallelcoordinateschart'; }

    create({ item, data }) {
        return <ParallelCoordinatesChart item={item} data={data} />;
    }

}