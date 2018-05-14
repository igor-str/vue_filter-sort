import Vuex from 'vuex'
import Vue from 'vue'



Vue.use(Vuex)

import json from '../data/data.json'

export default new Vuex.Store({
  state: {
    myData: json,
    sortDir: true,
    searchString: ''
  },
  getters: {
    groupBy(state) {
      let res = {},
        key = ''
      state.myData.forEach ( item => {
        key = item.group
        if(res.hasOwnProperty(key)) {
          res[key].push(item)
        } else {
          res[key] = []
          res[key].push(item)
        }
      })
      return res
    },
    sortBy(state) {
      return state.myData.sort((a,b) => state.sortDir ? a.name > b.name : a.name < b.name)
    },
    searchPerson(state) {
      return state.myData.filter((person) => person.name.toLowerCase().includes(state.searchString.toLowerCase()))
    }
  },
  actions: {

  },
  mutations: {

  }
})


