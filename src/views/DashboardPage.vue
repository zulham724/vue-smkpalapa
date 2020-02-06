<template>
  <div>
    <v-container>
      <v-row>
          <v-carousel height="40vh" continuous cycle style="z-index:0;margin-top:-2vh">
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
              <v-card  ripple @click="openBrowser('https://smkpalapasemarang.sch.id/')">
                  <v-card-text style="text-align:center">
                      <center><v-img :src="require('./../assets/menu1.png')" width="70"></v-img></center>
                      <div class="caption grey--text pt-5 font-weight-bold">Web Sekolah</div>
                  </v-card-text>
              </v-card>
          </v-col>
          <v-col cols="6">
              <v-card  ripple @click="openBrowser('https://smkpalapasemarang.sch.id/app/index.php/login')">
                  <v-card-text style="text-align:center">
                    <center><v-img :src="require('./../assets/menu2.png')" width="70"></v-img></center>
                    <div class="caption grey--text pt-5 font-weight-bold">Sistem Sekolah</div>
                  </v-card-text>
              </v-card>
          </v-col>
          <v-col cols="6">
              <v-card  ripple @click="openBrowser('https://smkpalapasemarang.sch.id/blog')">
                  <v-card-text style="text-align:center">
                      <center><v-img :src="require('./../assets/menu3.png')" width="70"></v-img></center>
                      <div class="caption grey--text pt-5 font-weight-bold">Berita Terbaru</div>
                  </v-card-text>
              </v-card>
          </v-col>
          <v-col cols="6">
              <v-card  ripple @click="openBrowser('https://smkpalapasemarang.sch.id/guru')">
                  <v-card-text style="text-align:center">
                      <center><v-img :src="require('./../assets/menu4&5.png')" width="70"></v-img></center>
                      <div class="caption grey--text pt-5 font-weight-bold">Data Guru</div>
                  </v-card-text>
              </v-card>
          </v-col>
          <v-col cols="6">
              <v-card  ripple @click="openBrowser('https://smkpalapasemarang.sch.id/siswa')">
                  <v-card-text style="text-align:center">
                      <center><v-img :src="require('./../assets/menu4&5.png')" width="70"></v-img></center>
                      <div class="caption grey--text pt-5 font-weight-bold">Data Siswa</div>
                  </v-card-text>
              </v-card>
          </v-col>
          <v-col cols="6">
              <v-card  ripple @click="openBrowser('https://smkpalapasemarang.sch.id/galeri')">
                  <v-card-text style="text-align:center">
                      <center><v-img :src="require('./../assets/menu6.png')" width="70"></v-img></center>
                      <div class="caption grey--text pt-5 font-weight-bold">Gallery</div>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
  </v-container>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            items: [
            {
                src: 'https://www.otoinfo.id/wp-content/uploads/2018/12/DSC00287.jpg',
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
    computed:{
        ...mapState(['showWelcome'])
    },
    mounted(){
        if(this.showWelcome === 'yes'){
            // this.$router.push('welcome')
        }
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