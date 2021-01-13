import MUTATIONS from './mutation';

const state = {
  currentTestValue: 0,
};

const getters = {
  currentTestValue: (_state) => {
    return _state.currentTestValue
  },
};

const mutations = {
  [MUTATIONS.CREATE_TODO]: (_state, newVal) => {
    _state.currentTestValue = newVal;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
