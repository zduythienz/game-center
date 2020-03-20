/**
 *
 * Loto
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLoto from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Loto() {
  useInjectReducer({ key: 'loto', reducer });
  useInjectSaga({ key: 'loto', saga });

  return (
    <div>
      <Helmet>
        <title>Loto</title>
        <meta name="description" content="Description of Loto" />
      </Helmet>
    </div>
  );
}

Loto.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loto: makeSelectLoto(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Loto);
