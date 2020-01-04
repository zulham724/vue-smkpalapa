<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>
      <v-icon>
        school
      </v-icon> SMK PALAPA SEMARANG
      </v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-content>
      <Welcome/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Welcome from './components/WelcomeComponent'

export default {
  name: 'App',

  components: {
    HelloWorld,
    Welcome
  },

  data: () => ({
    //
  }),
};
</script>
