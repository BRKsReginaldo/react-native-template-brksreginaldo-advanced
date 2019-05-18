import { prefixActions, reducerFactory } from '../../helpers/redux';
import { simpleAction, simpleActionCreator } from '../../helpers/actions';

const actions = prefixActions('count', {
  SET_COUNT: 'set-count',
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
});

const initialState = {
  count: 0,
};

const handlers = {};

handlers[actions.SET_COUNT] = (state, { payload }) => ({
  ...state,
  count: parseInt(payload, 10),
});
handlers[actions.INCREMENT] = state => ({
  ...state,
  count: state.count + 1,
});
handlers[actions.DECREMENT] = state => ({
  ...state,
  count: Math.max(state.count - 1, 0),
});

const setCount = simpleAction(actions.SET_COUNT);
const increment = simpleAction(actions.INCREMENT);
const decrement = async (value, dispatch) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  dispatch({
    type: actions.DECREMENT,
  });
};

export const actionCreators = {
  setCount: simpleActionCreator(setCount),
  increment: simpleActionCreator(increment),
  decrement: simpleActionCreator(decrement),
};

export default reducerFactory(initialState, handlers);
