<template>
  <div>
      <v-container>
      <v-row no-gutters>
        <v-col cols="12">
            
            <v-card
            color="green"
            dark
            >
            <v-card-title class="text-h5">
                CEP {{ ceps.cep }}
            </v-card-title>
            <v-list-item>
            <v-row >
                <v-col  md="4">
                    
                    <p>Rua</p>
                    <v-text-field
                    v-model="localLogradouro"
                    solo
                    ></v-text-field>
                
                    <p>Complemento</p>
                    <v-text-field
                    v-model="localComplemento"
                    solo
                    ></v-text-field>

                    <p>Bairro</p>
                    <v-text-field
                    v-model="localBairro"
                    solo
                    ></v-text-field>
                </v-col>

                <v-col md="4">

                    <p>Cidade</p>
                    <v-text-field
                    v-model="localLocalidade"
                    solo
                    ></v-text-field>

                    <p>Estado</p>
                    <v-text-field
                    v-model="localUf"
                    solo
                    ></v-text-field>

                    <p>IBGE</p>
                    <v-text-field
                    v-model="localIbge"
                    solo
                    ></v-text-field>
                </v-col>

                <v-col md="4">
                    <p>GIA</p>
                    <v-text-field
                    v-model="localGia"
                    solo
                    ></v-text-field>

                    <p>Numero</p>
                    <v-text-field
                    v-model="localDdd"
                    solo
                    ></v-text-field>

                    <p>Siafi</p>
                    <v-text-field
                    v-model="localSiafi"
                    solo
                    >{{ cep.siafi }}</v-text-field>
                </v-col>
                
            </v-row>
            </v-list-item>

            <v-card-actions>
                    <v-btn color="error" @click="deletar"  >Excluir</v-btn>
                    <v-btn color="#FF4F33" @click="edita" >Editar</v-btn>
            </v-card-actions>

          </v-card>
            
        </v-col>
      </v-row>
      </v-container>
  </div>
</template>

<script>
const axios = require('axios').default;
const Swal = require('sweetalert2')

export default {
    name: 'Ceps',

    props: {
        ceps: { type: Object[Array], required: true }
    },

    methods: {

        deletar: function() {
            //Faz a chamada para a API do back-end para excluir as informações do banco

            Swal.fire({
            title: 'Voce quer mesmo excluir?',
            icon: 'warning',
            showDenyButton: true,
            confirmButtonText: `Sim`,
            denyButtonText: `Não`,
            }).then((result) => {
            if (result.isConfirmed) {
                axios
                .post('https://procura-cep-back-end.herokuapp.com/deletaEndereco?codigo=' + this.ceps.id)
                Swal.fire({
                    title: 'Excluido!',
                    text: 'Seu CEP foi excluido com sucesso', 
                    icon: 'success',
                
                }).then((saveResult)=> {
                    if (saveResult.isConfirmed){
                        location.reload();
                    }
                })
            } else if (result.isDenied) {
                Swal.fire('O CEP não foi excluido', '', 'info')
            }
            })

          
          
        },
        edita: function() {
          
            //Verifica se ha alterações nos campos de texto
            if(this.localLogradouro != this.cep.logradouro){
              this.cep.logradouro = this.localLogradouro
            } 
            if(this.localComplemento != this.cep.complemento){
              this.cep.complemento = this.localComplemento
            } 
            if(this.localBairro != this.cep.bairro){
              this.cep.bairro = this.localBairro
            } 
            if(this.localLocalidade != this.cep.localidade){
              this.cep.localidade = this.localLocalidade
            } 
            if(this.localUf != this.cep.uf){
              this.cep.uf = this.localUf
            } 
            if(this.localIbge != this.cep.ibge){
              this.cep.ibge = this.localIbge
            } 
            if(this.localGia != this.cep.gia){
              this.cep.gia = this.localGia
            } 
            if(this.localDdd != this.cep.ddd){
              this.cep.ddd = this.localDdd
            } 
            if(this.localSiafi != this.cep.siafi){
              this.cep.siafi = this.localSiafi
            }


            //Faz a chamada para a API do back-end para editar as informações do banco

           
                axios
                .post('https://procura-cep-back-end.herokuapp.com/editaEndereco?codigo=' + this.ceps.id, this.cep)
                Swal.fire({
                    title: 'Editado!',
                    text: 'Seu CEP foi editado com sucesso', 
                    icon: 'success',
                
                }).then((saveResult)=> {
                    if (saveResult.isConfirmed){
                        location.reload();
                    }
                })
            

          
          
        }
    },
    created(){
      //Passa as informações da prop para variaveis locais.
      this.cep = this.ceps,
      this.localLogradouro = this.ceps.logradouro,
      this.localComplemento = this.ceps.complemento,
      this.localBairro = this.ceps.bairro,
      this.localLocalidade = this.ceps.localidade,
      this.localUf = this.ceps.uf,
      this.localIbge = this.ceps.ibge,
      this.localGia = this.ceps.gia,
      this.localDdd = this.ceps.ddd,
      this.localSiafi = this.ceps.siafi
    },

     data: () => {
      return {
            cep: [],
                localLogradouro: "",
                localComplemento: "",
                localBairro: "",
                localLocalidade: "",
                localUf: "",
                localIbge: "",
                localGia: "",
                localDdd: "",
                localSiafi: "" 
            
      }
    },
   
  
    

};
</script>

<style>

</style>