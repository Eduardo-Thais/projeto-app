<template>
  <v-container fluid>
    <v-row  >
      <v-col >
        <v-img
          src="CEPsearch.png"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      
        <v-col  md="12">
        <v-form v-on:submit.prevent="onSubmit">
          <v-text-field 
          v-model="procura"
          label="Pesquisa"
          ></v-text-field>
          
          <v-btn color="green" dark  v-on:click=" show = true " @click="procuraCep" >pesquisar</v-btn>
        </v-form>  
        </v-col>
      
        
    </v-row>

    <v-row>
      <v-col>
                  
            <enderecoSalvo v-show="show" :cepRetorno="cep" />
            <span v-show="!show"> salvo </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const axios = require('axios').default;
import enderecoSalvo from "../components/EnderecoSalvo";


  export default {
    name: 'BuscaCep',

    components: {
    enderecoSalvo
    },

    data: () => {
      return {
        cep: [],
        procura: '',
        show: false
        
      }
    },
    
  methods: {

    procuraCep: function() {
          axios
          .get('https://viacep.com.br/ws/' + this.procura + '/json/')
          .then(response => (this.cep = response.data))
    }
  }, 
  }
</script>
