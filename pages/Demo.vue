<template>
   <p> {{ localData }}</p>
    <!-- <p>dadas</p> -->
  </template>
  
  <script>
  export default {
    props: ['parentData'],
    computed: {
      localData() {
        return this.parentData;
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  </style>