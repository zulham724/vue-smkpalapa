<template>
  <v-container>
      <v-row>
          <v-carousel height="40vh" continuous cycle>
                <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
                ></v-carousel-item>
            </v-carousel>
      </v-row>
      <v-row style="margin-top:-10vh;">
          <v-col cols="6">
              <v-card style="z-index:100" ripple @click="openBrowser('https://smkpalapasemarang.sch.id/')">
                  <v-card-text style="text-align:center">
                      <v-icon size="100">phonelink</v-icon>
                      <div class="caption grey--text">Web Sekolah</div>
                  </v-card-text>
              </v-card>
          </v-col>
          <v-col cols="6">
              <v-card style="z-index:100" ripple @click="openBrowser('https://smkpalapasemarang.sch.id/app/index.php/login')">
                  <v-card-text style="text-align:center">
                    <v-icon size="100">cast_connected</v-icon>
                    <div class="caption grey--text">Sistem Sekolah</div>
                  </v-card-text>
              </v-card>
          </v-col>
          <v-col cols="6">
              <v-card style="z-index:100" ripple @click="openBrowser('https://smkpalapasemarang.sch.id/contact-1/')">
                  <v-card-text style="text-align:center">
                      <v-icon size="100">map</v-icon>
                      <div class="caption grey--text">Lokasi</div>
                  </v-card-text>
              </v-card>
          </v-col>
          <v-col cols="6">
              <v-card style="z-index:100" ripple @click="openBrowser('https://smkpalapasemarang.sch.id/contact-1/')">
                  <v-card-text style="text-align:center">
                      <v-icon size="100">local_library</v-icon>
                      <div class="caption grey--text">Visi Misi</div>
                  </v-card-text>
              </v-card>
          </v-col>
          <v-col cols="6">
              <v-card style="z-index:100" ripple @click="openBrowser('https://smkpalapasemarang.sch.id/sejarah-singkat/')">
                  <v-card-text style="text-align:center">
                      <v-icon size="100">person_pin</v-icon>
                      <div class="caption grey--text">Tentang</div>
                  </v-card-text>
              </v-card>
          </v-col>
          <v-col cols="6">
              <v-card style="z-index:100" ripple @click="openBrowser('https://smkpalapasemarang.sch.id/contact-1/')">
                  <v-card-text style="text-align:center">
                      <v-icon size="100">contact_mail</v-icon>
                      <div class="caption grey--text">Hubungi</div>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    data(){
        return{
            items: [
            {
                src: 'https://www.otoinfo.id/wp-content/uploads/2018/12/DSC00287.jpg',
            },
            {
                src: 'https://cdn2.tstatic.net/lampung/foto/bank/images/smk-palapa-bandar-lampung_20170621_192841.jpg',
            },
            {
                src: 'https://4.bp.blogspot.com/-6G5uy1PSRgA/VsVzzvN32oI/AAAAAAAAAFE/7Y7B6MkR2_c/s1600/gedung2.jpg',
            },
            {
                src: 'http://foto2.data.kemdikbud.go.id/getImage/20331927/12.jpg',
            },
            ],
        }
    },
    mounted(){

    },
    methods:{
        openBrowser(link){
            cordova.InAppBrowser.open(link, '_blank', 'zoom=no,location=no');
        }
    }
}
</script>

<style>

</style>