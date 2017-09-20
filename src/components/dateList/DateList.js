import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllDate} from '../../actions'
const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getAllDate}, dispatch);
};

class DateList extends Component {

  componentDidMount = () => {
    this.props.getAllDate();
  }

  renderList = (list) => (list.map((item, index) => (
    <tr key={index}>
      <td>
        hi there
      </td>
      <td>
        yolo there
      </td>
    </tr>
  )));

  render() {
    return (
      <div className="dateList-container">
        <table className="table table-bordered table-striped">
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
            {/* {this.renderList(this.props.list)} */}
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateList);
