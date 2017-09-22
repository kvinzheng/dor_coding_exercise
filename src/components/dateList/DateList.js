import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllDate} from '../../actions'
import {calculateMax, sortDate, dayOfWeek} from './helper.js';
import * as moment from 'moment';
import TableHeader from './TableHeader';

const mapStateToProps = (state, ownProps) => {
  // console.log('state=',state);
  return {
    in_counts: state.dorData.myData
      ? sortDate(state.dorData.myData)
      : [],
    max: state.dorData.myData
      ? calculateMax(state.dorData.myData.data)
      : 0,
    currentTime: state.currentTime.time,
    status: (state.dorData.status === 'PENDING' || state.token.status === 'PENDING')
      ? 'PENDING'
      : 'FULFILLED'
  };
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
      <td id="date-box">
        <div id="day-of-week">{dayOfWeek(moment(item.date).day())}</div>
        <div id="date">{item.date.split('-')[2]}</div>
      </td>
      <td id="bar-info">
        <div className="bar">
          <div className="fill-bar" style={{
            width: Math.floor((item.in_count / max) * 160) + 'px'
          }}></div>
        </div>
        <div className="in-count">{item.in_count}</div>
      </td>
    </tr>
  )));

  render() {
    if (this.props.status === 'FULFILLED') {
      return (
        <div className="dateList-container">
          <table className="table table-bordered">
            <TableHeader/>
            <tbody className="table-responsive">
              {this.renderList(this.props.in_counts, this.props.max)}
            </tbody>
          </table>
        </div>
      )
    } else {
      return (
        <div>
          <div className="dateList-container">
            <table className="table table-bordered">
              <TableHeader/>
            </table>
          </div>
          <div className="footer-loading">
            <div>Loading...</div>
          </div>
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateList);
