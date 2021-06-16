import { Component } from 'react';
import Papa from 'papaparse';
import { chartTypes } from '../App';

export default class SideBar extends Component {
  constructor(props) {
    super(props);

    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFileUpload = (evt) => {
    Papa.parse(evt.target.files[0], {
      complete: this.props.handleFileChange,
      header: true,
      dynamicTyping: true
    });
  }

  handleChange(evt) {
    this.props.handleChange(evt.target.value);
  }

  render() {

    return (
      <>
        <div className="d-flex flex-column flex-shrink-0 p-3 side-bar">
          <section>
            <div className="mb-3">
              <label className="form-label">Upload chart data file (.csv)</label>
              <input type="file" className="form-control" onChange={this.handleFileUpload} accept=".csv" />
            </div>
            <div className="mb-3">
              <label className="form-label">Select Chart type</label>
              <select className="form-select" onChange={this.handleChange}>
                <option value={chartTypes.lineChart}>Line Chart</option>
                <option value={chartTypes.snakeyChart}>Snakey Chart</option>
                <option value={chartTypes.parallelCoordinates} disabled={true}>Parallel Coordinates</option>
                <option value={chartTypes.bubbleChart}>Bubble Chart</option>
              </select>
            </div>
          </section>
          <section>
            <div className="row">
            </div>
          </section>
        </div>
      </>
    );
  }
}
