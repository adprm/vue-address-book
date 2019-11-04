import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    //buat bikin inisialisai data
    tableData: [],
      formInput: {
        name: "",
        address: "",
        phone: "",
        },
        selectedId: "" 
  },

  mutations: {

    setUsers(state, data){
      state.tableData = data
      state.formInput = {
        name: "",
        address: "",
        phone: ""
      },
      state.selectedId = ""
    },

    setUser(state, data){
      state.formInput = {
        name: data.name,
        address: data.address,
        phone: data.phone,
      },
      state.selectedId = data.id
    },

  },

  actions: {

    async getUsers({commit}){
      const {data:{data}} = await axios.get('https://address-book-exp-api.herokuapp.com/users');
      commit(`setUsers`, data)
    },

    //delete users
    async deleteUsers({dispatch}, id) {
      await axios.delete(`https://address-book-exp-api.herokuapp.com/users/${id}`);
      dispatch('getUsers');
    },

    //create users
    async createUsers({state, dispatch, commit}) {
      await axios.post('https://address-book-exp-api.herokuapp.com/users',{
        name: state.formInput.name,
        address: state.formInput.address,
        phone: state.formInput.phone
      });
      dispatch("getUsers")
      //commit('resetUser')
    },

    //edit users
    async editUsers({state, dispatch, commit}) {
      await axios.patch(`https://address-book-exp-api.herokuapp.com/users/${state.selectedId}`,{
        name: state.formInput.name,
        address: state.formInput.address,
        phone: state.formInput.phone,
        });
        dispatch("getUsers")
        //commit('resetUser')
    },

    async getUser({commit, state}, id) {
      //state.selectedId = id;
      const {data} = await axios.get(`https://address-book-exp-api.herokuapp.com/users/${id}`);

      commit("setUser", data)
    }
  },

  modules: {

  }
})
