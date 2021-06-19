<template>
  <div>
      <ceps :ceps="item" v-for="item in cep" :key="item.id"  />
  </div>
</template>

<script>
const axios = require('axios').default;
import ceps from '../components/Ceps';

export default {
    name: 'ListaCep',

    components: {
        ceps
    },

    data: () => {
        return {
            cep: []
            
        }
    },

    mounted:function(){
        this.load()
    },
    methods: {
         load: function() {
            axios.get('http://localhost:8080/listar')
            .then(response => (this.cep = response.data))
            
         }
    }
}
</script>

<style>

</style>