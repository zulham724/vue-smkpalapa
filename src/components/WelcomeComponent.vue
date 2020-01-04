<template>
  <v-container>
      <v-row>
          <v-carousel height="40vh">
                <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
                ></v-carousel-item>
            </v-carousel>
      </v-row>
      <v-row>
          <v-col cols="6">
              <v-card ripple>
                  <v-card-text style="text-align:center">
                      <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbWNGZ1rturyqE6Wf_vUDHT4hUsjq0SY5qjCgxtGz6WkLMsZCR&s"></v-img>
                      <div class="caption grey--text">Web Sekolah</div>
                  </v-card-text>
              </v-card>
          </v-col>
          <v-col cols="6">
              <v-card ripple>
                  <v-card-text style="text-align:center">
                    <v-img src="https://www.konfest.com/wp-content/uploads/2019/05/Konfest-PNG-JPG-Image-Pic-Photo-Free-Download-Royalty-Unlimited-clip-art-sticker-icons-search-symbol-find-magnifying-glass-160.png"></v-img>
                    <div class="caption grey--text">Sistem Sekolah</div>
                  </v-card-text>
              </v-card>
          </v-col>
          <v-col cols="6">
              <v-card ripple>
                  <v-card-text style="text-align:center">
                      <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWGYFI3jpbGtV_XmGC-F6onJOjgONVp1PXDKJ7PKtohW_yPh6GJw&s"></v-img>
                      <div class="caption grey--text">Tentang</div>
                  </v-card-text>
              </v-card>
          </v-col>
          <v-col cols="6">
              <v-card ripple>
                  <v-card-text style="text-align:center">
                      <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTglCzU6G7IMYHWOGDnFydUq7O8iJkUyawq_SbEvoX9B3nVkQ-voQ&s"></v-img>
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
    }
}
</script>

<style>

</style>