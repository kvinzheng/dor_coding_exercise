import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllDate} from '../../actions'
const mapStateToProps = (state, ownProps) => {
  return {in_counts: state.loadAllData};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getAllDate}, dispatch);
};

class DateList extends Component {

  componentWillMount = () => {
    this.props.getAllDate();
  }

  renderList = (list) => (list.map((item, index) => (
    <tr key={index}>
      <td>
        hi there
      </td>
      <td>
        {item.in_count}
      </td>
    </tr>
  )));

  render() {
    if(this.props.in_counts){
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
            {console.log('props=', this.props)};
            {this.renderList(this.props.in_counts)}
          </tbody>
        </table>
      </div>
    )
  } else {
    return <div></div>
   }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateList);
