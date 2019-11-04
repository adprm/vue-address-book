<template>
  <div id="app">
    <div id="nav">
      <el-container class="header">
        <el-header>
          <el-button class="contact" type="primary" icon="el-icon-user">
            <router-link to="/">Contact</router-link>
          </el-button>
          <el-button type="primary" icon="el-icon-info">
            <router-link to="/about">About</router-link>
          </el-button>
        </el-header>
      </el-container>
    </div>
    <router-view/>
  </div>
</template>

<style>
  .header {
    text-align: right;
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%); 
  }
</style>