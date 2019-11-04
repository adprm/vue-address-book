<template>
  <div class="contact">

  <el-input placeholder="name" v-model="formInput.name"></el-input><br>
  <el-input placeholder="address" v-model="formInput.address"></el-input><br>
  <el-input placeholder="phone" v-model="formInput.phone"></el-input><p>

  <el-button @click="createContact" v-if="!selectedId">create Users</el-button><p>
  <el-button @click="editContact" v-if="selectedId">edit Users</el-button></p>

    <el-table :data="tableData" style="width: 100%">
    <el-table-column fixed prop="name" label="Name" width="150"></el-table-column>

    <el-table-column prop="address" label="Address" width="120"></el-table-column>

    <el-table-column prop="phone" label="Phone" width="120"></el-table-column>

    <el-table-column>
      <template slot-scope="scope">
        <el-button @click="deleteContact(scope.row.id)" type="text" size="small">Delete</el-button>
        <el-button @click="getUser(scope.row.id)" type="text" size="small">edit</el-button>
      </template>
    </el-table-column>
  </el-table>

  </div>
</template>

<script>
//import axios from 'axios'
import {mapActions, mapState} from 'vuex';

export default {
  name: 'contact',

    computed: mapState({
      tableData: state => state.tableData,
      formInput: state => state.formInput,
      selectedId: state => state.selectedId
    }),

  created(){
    this.getUsers()

  },

  methods: {
    //get users
    ...mapActions(["getUsers", "deleteUsers", "createUsers", "editUsers", "getUser"]),

    //edit users
    /*async editUsers() {
      await axios.patch(`https://address-book-exp-api.herokuapp.com/users/${this.selectedId}`,{
        name: this.formInput.name,
        address: this.formInput.address,
        phone: this.formInput.phone,
        });
        this.getUsers();
        this.formInput = {
        name: "",
        address: "",
        phone: ""
      };
      this.selectedId = ""
    },*/

    //get user untuk edit
    /*async getUser(id) {
        const {data} = await axios.get(`https://address-book-exp-api.herokuapp.com/users/${id}`);

        this.formInput = {
          name: data.name,
          address: data.address,
          phone: data.phone,
        };
        this.selectedId = id;
        
      },*/


    deleteContact(scopeid) {
      this.deleteUsers(scopeid)
    },

    createContact() {
      if(this.formInput.name.length &&
      this.formInput.address.length &&
      this.formInput.phone.length > 0)
      {
      this.createUsers();
      }
    },


    editContact(id) {

      if(this.formInput.name.length &&
      this.formInput.address.length &&
      this.formInput.phone.length > 0)
      {
      this.editUsers();
      }
      }
    }
  }

</script>

<style>
  .contact {
  margin: auto;
  border: 6px;
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgb(34, 167, 149) 100%);
  padding: 10px;
  }
</style>
