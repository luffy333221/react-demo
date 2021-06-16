import Chart from "react-google-charts";
import { BaseChart } from "../chart-builder/BaseChart";
import { ChartConstants } from "../../constants";

class BubbleChart extends BaseChart {

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
                    width={'500px'}
                    height={'300px'}
                    chartType="BubbleChart"
                    loader={<div>Loading Chart</div>}
                    data={data}
                    rootProps={{ 'data-testid': '1' }}
                />
                }
            </>
        );
    }
}

export class BubbleChartFactory {
    get type() { return ChartConstants.chartTypes.bubbleChart; }

    create({ item, data }) {
        return <BubbleChart item={item} data={data} />;
    }

}