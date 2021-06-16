import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import { ChartConstants } from './constants';
import SideBar from './components/SideBar';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export const chartTypes = ChartConstants.chartTypes;

const App = () => {
  const [chartType, setChartType] = useState(chartTypes.lineChart);
  const [fileData, setFileData] = useState(null);

  const handleChartChange = (chartType) => {
    setChartType(chartType);
  }

  const handleChartFileUpload = (fileData) => {
    setFileData(fileData.data);
  }

  return (
    <div style={styles}>
      <div className="d-flex m-1 p-1 justify-content-around screen">
        <div className="m-1 p-1 align-self-start">
          <SideBar handleChange={handleChartChange} handleFileChange={handleChartFileUpload} />
        </div>
        <div className="m-1 p-1 align-self-start">
          {chartType && <Home item={chartType} data={fileData} />}
        </div>
      </div>
    </div>
  );
}

export default App;
