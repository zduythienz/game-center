import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loto state domain
 */

const selectLotoDomain = state => state.loto || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Loto
 */

const makeSelectLoto = () =>
  createSelector(
    selectLotoDomain,
    substate => substate,
  );

export default makeSelectLoto;
export { selectLotoDomain };
