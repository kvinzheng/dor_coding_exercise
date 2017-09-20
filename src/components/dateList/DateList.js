import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

class DateList extends Component {

  renderList = (list) => ( list.map((item, index) => (
    <tr key={index}>
      <td>
        hi there
      </td>
    </tr>
  )));

  render() {
    return (
      <div className="dateList-container">
        <div className="dateList">
         hi there how are you
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateList);
