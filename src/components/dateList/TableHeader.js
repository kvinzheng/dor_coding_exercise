import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllDate } from '../../actions';

const mapStateToProps = state => (
  { currentTime: state.currentTime.time }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({ getAllDate }, dispatch)
);

const TableHeader = ({ getAllDate, currentTime }) => (
  <thead>
    <tr>
      <th>
        <div id="refresh-wrapper" onClick={getAllDate}>
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
            Last updated {currentTime}
          </strong>
        </h4>
      </th>
    </tr>
  </thead>
);

export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);
