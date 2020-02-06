<template>
  <div class="home">
    <v-app-bar
      app
      color="primary"
      dark
    >

      <v-app-bar-nav-icon @click="sidemenu = true"></v-app-bar-nav-icon>

      <v-toolbar-title>
       SMK PALAPA SEMARANG
      </v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>
    <v-navigation-drawer
      v-model="sidemenu"
      fixed
      temporary
      left
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://scontent-sin2-2.cdninstagram.com/v/t51.2885-19/s150x150/16585277_197162840765257_3394749593936723968_a.jpg?_nc_ht=scontent-sin2-2.cdninstagram.com&_nc_ohc=aVevd1Sd4xYAX820bst&oh=a87c93fb5fc54a399a4f93e3aa0e3022&oe=5EA773D3">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>CV ARDATA MEDIA</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item link @click="$router.push('visimisi')">
          <v-list-item-icon>
            <v-icon>rate_review</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Visi dan Misi</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="$router.push('jurusan')">
          <v-list-item-icon>
            <v-icon>school</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Jurusan</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>
    <v-bottom-navigation
      app
      grow
    >
      <v-btn value="recent" @click="$router.push('dashboard')">
        <span>Home</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn value="favorites" @click="$router.push('map')">
        <span>Map</span>
        <v-icon>map</v-icon>
      </v-btn>

      <v-btn value="nearby" @click="$router.push('contact')">
        <span>Contact</span>
        <v-icon>contact_mail</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
    data(){
      return{
        sidemenu: false,
        bottomNav:0
      }
    }
}
</script>
