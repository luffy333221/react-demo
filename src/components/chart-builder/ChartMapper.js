import { BubbleChartFactory } from "../charts/BubbleChart";
import { ParallelCoordinatesChartFactory } from "../charts/ParallelCoordinatesChart";
import { SankeyChartFactory } from "../charts/SankeyChart";
import { SimpleLineChartFactory } from "../charts/SimpleLineChart";

export class ChartMapper {
    constructor() {
        const simpleLineChartFactory = new SimpleLineChartFactory();
        const sankeyChartFactory = new SankeyChartFactory();
        const parallelCoordinatesChartFactory = new ParallelCoordinatesChartFactory();
        const bubbleChartFactory = new BubbleChartFactory();

        this.charts = {};
        this.charts[simpleLineChartFactory.type] = simpleLineChartFactory;
        this.charts[sankeyChartFactory.type] = sankeyChartFactory;
        this.charts[parallelCoordinatesChartFactory.type] = parallelCoordinatesChartFactory;
        this.charts[bubbleChartFactory.type] = bubbleChartFactory;
    }

    getChart = type => type && this.charts[type];
}
