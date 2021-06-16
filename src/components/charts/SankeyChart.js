import Chart from "react-google-charts";
import { BaseChart } from "../chart-builder/BaseChart";
import { ChartConstants } from "../../constants";

class SankeyChart extends BaseChart {

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
          width={600}
          height={'300px'}
          chartType="Sankey"
          loader={<div>Loading Chart</div>}
          data={data}
          rootProps={{ 'data-testid': '2' }}
        />
        }
      </>
    );
  }
}

export class SankeyChartFactory {
  get type() { return ChartConstants.chartTypes.snakeyChart; }

  create({ item, data }) {
    return <SankeyChart item={item} data={data} />;
  }

}