import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllDate} from '../../actions';
export const mapStateToProps = state => ({currentTime: state.currentTime.time});

export const mapDispatchToProps = dispatch => (bindActionCreators({
  getAllDate
}, dispatch));

export const TableHeader = ({getAllDate, currentTime}) => (
  <thead>
    <tr >
      <td id="refresh-wrapper">
        <div >
          <h4>
            <a id="refresh" onClick={getAllDate}>
              Refresh
            </a>
          </h4>
        </div>

      </td>

      <td id="update-wrapper">
      <div >
          <h4>
            <strong>
              Last updated {currentTime}
            </strong>
          </h4>
        </div>
    </td>
  </tr>
  </thead>
);

export default connect(mapStateToProps, {mapDispatchToProps})(TableHeader);
