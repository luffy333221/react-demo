import { ChartMapper } from "./ChartMapper";

export class BuildChart {
    constructor() {
        this.chartMapper = new ChartMapper();
    }

    create({ item, data }) {
        const chart = this.chartMapper.getChart(item);
        return chart.create({ item, data });
    }
}