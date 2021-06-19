<template>
  <v-app>
    <v-app-bar
      app
      color="light-green"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="CEPsearch.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>
      
       <v-tabs grow>
          <v-tab to="/">Pagina de Busca</v-tab>
          <v-tab to="/listacep">Pagina de Lista</v-tab>
          
        </v-tabs>
      
      

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',



  data: () => ({
    //
  }),
};
</script>
