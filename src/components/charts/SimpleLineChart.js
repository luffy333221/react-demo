import Chart from "react-google-charts";

import { BaseChart } from "../chart-builder/BaseChart";
import { ChartConstants } from "../../constants";

class SimpleLineChart extends BaseChart {

    parseData(data) {
        let finalData = [];
        let isheaderRowSet = false;
        data?.forEach(ele => {
            if (!isheaderRowSet) {
                finalData.push(Object.keys(ele));
                isheaderRowSet = true;
            }
            finalData.push(Object.values(ele));
        });
        return finalData;
    }

    render() {
        const data = this.props.data && this.parseData(this.props.data);
        return (
            <>
                {!data && <p>Upload a valid file</p>}
                {data && <Chart
                    width={'600px'}
                    height={'400px'}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={data}
                    options={{
                        hAxis: {
                            title: data[0][0],
                        },
                        vAxis: {
                            title: data[0][1],
                        },
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />}
            </>
        );
    }
}

export class SimpleLineChartFactory {
    get type() { return ChartConstants.chartTypes.lineChart; }

    create({ item, data }) {
        return <SimpleLineChart item={item} data={data} />;
    }
}