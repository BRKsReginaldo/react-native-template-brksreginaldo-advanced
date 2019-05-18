export const bindLocalActions = (actions, dispatch) => Object.keys(actions).reduce((result, action) => {
  return {
    ...result,
    [action]: (...args) => Reflect.apply(actions[action], undefined, args)(dispatch)
  };
}, {});

export function prefixActions(prefix, actions, separator = '-') {
  return Object.keys(actions)
    .reduce(function(mappedActions, action) {
      return { ...mappedActions, [action]: [prefix, actions[action]].join(separator) };
    }, {});
}

export function reducerFactory(defaultState, handlers) {
  return (state = defaultState, action) => {
    const handler = handlers[action.type];

    return handler ?
      handler(state, action) :
      state;
  };
}
