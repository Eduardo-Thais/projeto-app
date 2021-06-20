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
                    
                        <v-btn color="blue" @click="save" >Salvar</v-btn>
                    
                    
                </v-card-actions>
          </v-card>
            
        </v-col>
      </v-row>
  </div>
</template>

<script>
const axios = require('axios').default;
const Swal = require('sweetalert2')

export default {
    name: 'EnderecoSalvo',

    props: {
        cepRetorno: { type: Object[Array], required: true }
    },
    methods: {

       
    
        save: function() {
            
            Swal.fire({
            title: 'Voce quer mesmo salvar?',
            showDenyButton: true,
            confirmButtonText: `Sim`,
            denyButtonText: `Não`,
            }).then((result) => {
            if (result.isConfirmed) {
                axios
                .post('https://procura-cep-back-end.herokuapp.com/cadastrar', this.cepRetorno)
                Swal.fire({
                    title: 'Salvo!',
                    text: 'Seu CEP foi salvo com sucesso', 
                    icon: 'success',
                
                }).then((saveResult)=> {
                    if (saveResult.isConfirmed){
                        location.reload();
                    }
                })
            } else if (result.isDenied) {
                Swal.fire('O CEP não foi salvo', '', 'info')
            }
            })
            
            
            
        }
    },
    data() {
        return {
            
        }
    },
    

};
</script>

<style>

</style>