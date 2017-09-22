import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllDate} from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentTime: state.currentTime.time,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getAllDate
  },dispatch)
}

class TableHeader extends Component {

  render() {
    return (
      <thead>
        <tr>
          <th >
            <div id="refresh-wrapper" onClick={this.props.getAllDate}>
              <h4>
                <a id="refresh">
                  Refresh
                </a>
              </h4>
            </div>
          </th>
          <th>
            <h4>
              <strong>
                Last updated {this.props.currentTime}
              </strong>
            </h4>
          </th>
        </tr>
      </thead>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);
