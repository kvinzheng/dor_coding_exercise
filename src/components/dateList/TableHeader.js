import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllDate } from '../../actions';
import Header from '../header/header';

export const mapStateToProps = state => ({ currentTime: state.currentTime.time });

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getAllDate,
  }, dispatch);
};

export const TableHeader = ({getAllDate, currentTime}) => {
  return (
    <thead>
      <Header />
      <tr>
        <td id="refresh-wrapper">
          <h4>
            <a id="refresh" onClick={(e) => {
              e.preventDefault();
              return getAllDate() }}>
              Refresh
            </a>
          </h4>
        </td>

        <td id="update-wrapper">
          <h4>
            <strong>
              Last updated {currentTime}
            </strong>
          </h4>
        </td>
      </tr>
    </thead>
  );
}

export default connect(mapStateToProps,  mapDispatchToProps)(TableHeader);
