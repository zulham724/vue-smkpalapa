<template>
  <div>
      <v-carousel height="100vh" continuous>
        <v-carousel-item
        v-for="(item, i) in items"
        :key="item.text"
        >
        <v-sheet
            color="white"
            height="100%"
            tile
            light
        >
            <v-row
            class="fill-height"
            align="center"
            justify="center"
            >
            <v-col cols="12" align="center"
            justify="center" style="margin-top:-10vh">
                <v-img :src="item.src" width="150" class="mb-5"></v-img>
                <div class="display-1">{{ item.text }}</div>
                <v-btn text x-large v-if="i == 2" @click="$router.push('dashboard')">Masuk</v-btn>
            </v-col>
            </v-row>
        </v-sheet>
        </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            items: [
                {
                    src: require('./../assets/1.png'),
                    text:'Mudah Digunakan'
                },
                {
                    src: require('./../assets/2.png'),
                    text:'Diakses Dimana Saja'
                },
                {
                    src: require('./../assets/3.png'),
                    text:'Kekinian'
                },
            ],
        }
    },
    computed:{
        ...mapState(['showWelcome'])
    },
    mounted(){
        this.$store.commit('offWelcome')
    }
}
</script>

<style>

</style>