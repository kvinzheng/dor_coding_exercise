import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllDate} from '../../actions'
import {calculateMax,sortDate} from './helper.js';


const mapStateToProps = (state, ownProps) => {
  return {
    in_counts: state.loadAllData.data ? sortDate(state.loadAllData) : [], max: state.loadAllData.data ? calculateMax(state.loadAllData.data) : 0 };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getAllDate
  }, dispatch);
};

class DateList extends Component {

  componentDidMount = () => {
    this.props.getAllDate();
  }

  renderList = (list, max) => (list.map((item, index) => (
    <tr key={index}>
      <td className="date">
        {item.date}
      </td>
      <td>
        <div className="bar">
          <div className="fill-bar"
            style={{width : Math.floor((item.in_count/max) * 160)+'px'}}
            >
            </div>
        </div>
        {item.in_count}
      </td>
    </tr>
  )));

  render() {
    //do logic here and set max
    if (this.props.in_counts.length) {
      return (
        <div className="dateList-container">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>
                  <h4>
                    <strong>
                      Refresh
                    </strong>
                  </h4>
                </th>
                <th>
                  <h4>
                    <strong>
                      Last updated 12:30:23
                    </strong>
                  </h4>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.renderList(this.props.in_counts, this.props.max)}
            </tbody>
          </table>
        </div>
      )
    } else {
      return <div>nothing</div>
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateList);