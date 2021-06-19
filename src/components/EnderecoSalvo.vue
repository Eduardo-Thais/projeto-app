<template>
  <div>
      <v-row no-gutters>
        <v-col cols="12">
            
            <v-card
            color="green"
            dark
            >
            <v-card-title class="text-h5">
                CEP {{ cepRetorno.cep }}
            </v-card-title>
            <v-list-item>
            <v-row >
                
                <v-col md="4">
                    <p>Rua</p>
                    <v-text-field
                    :label= cepRetorno.logradouro 
                    solo
                    ></v-text-field>
                
                    <p>Complemento</p>
                    <v-text-field
                    :label= cepRetorno.complemento 
                    solo
                    ></v-text-field>

                    <p>Bairro</p>
                    <v-text-field
                    :label= cepRetorno.bairro 
                    solo
                    ></v-text-field>

                </v-col>

                <v-col md="4">
                    <p>Cidade</p>
                    <v-text-field
                    :label= cepRetorno.localidade 
                    solo
                    ></v-text-field>

                    <p>Estado</p>
                    <v-text-field
                    :label= cepRetorno.uf 
                    solo
                    ></v-text-field>

                    <p>IBGE</p>
                    <v-text-field
                    :label= cepRetorno.ibge 
                    solo
                    ></v-text-field>
                </v-col>

                <v-col md="4">
                    <p>GIA</p>
                    <v-text-field
                    :label= cepRetorno.gia 
                    solo
                    ></v-text-field>


                    <p>Numero</p>
                    <v-text-field
                    :label= cepRetorno.ddd 
                    solo
                    ></v-text-field>

                    <p>Siafi</p>
                    <v-text-field
                    :label= cepRetorno.siafi 
                    solo
                    ></v-text-field>
                </v-col>
                
            </v-row>
            </v-list-item>
                <v-card-actions>
                    <v-fab-transition>
                        <v-btn color="blue" :timeout="timeout" v-on:click=" hidden = !hidden" @click="save" v-show="!hidden">Salvar</v-btn>
                    </v-fab-transition>
                    <v-fab-transition>
                        <v-icon @click=" hidden = !hidden" v-show="hidden">mdi-television</v-icon>
                    </v-fab-transition>
                </v-card-actions>
          </v-card>
            
        </v-col>
      </v-row>
  </div>
</template>

<script>
const axios = require('axios').default;

export default {
    name: 'EnderecoSalvo',

    props: {
        cepRetorno: { type: Object[Array], required: true }
    },
    methods: {
    
        save: function() {
            
            axios
            .post('http://localhost:8080/cadastrar', this.cepRetorno)
            
            
        }
    },
    data() {
        return {
            hidden: false,
            timeout: 1000,
        }
    },
    

};
</script>

<style>

</style>