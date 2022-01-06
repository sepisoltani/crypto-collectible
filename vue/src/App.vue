<template>
  <div id="app">
    
  
  </div>
</template>

<script>
import Web3 from 'web3'

export default {
  name: 'App',
  data() {
    return {    
      web3: {},
    }
  },
  async created() {
    await this.loadWeb3()

  },
  methods: {
    async loadWeb3() {
      if (typeof window.ethereum !== "undefined") {
        try {
          // Request account access if needed
          await window.ethereum.enable();
        } catch (error) {
          return alert("user denied")
        }
        this.web3 = new Web3(window.ethereum);
      } else {
        return alert("please install metamask")
      }
    },
  }
}
</script>
<style>
@import '~bootstrap/dist/css/bootstrap.min.css';
</style>
