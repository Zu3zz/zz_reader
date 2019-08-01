const book = {
  state:{
    age: 18
  },
  mutations: {
    'SET_NAME': (state, newAge) => {
      state.age = newAge
    }
  },
  actions: {
    setName: ({commit, state} ,newAge) => {
      return commit('SET_NAME', newAge)
    }
  }
}

export default book
