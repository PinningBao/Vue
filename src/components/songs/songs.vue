<template>
	<transition name="slide">
	<music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
	
	</transition>
</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex'
import {getSongsList} from '../../api/singer.js'
import {ERR_OK} from '../../api/config'
import {createSong,isValidMusic, processSongsUrl} from '../../assets/js/song'
import MusicList from '../music-list/music-list'

  export default {
    computed: {
      title() {
        return this.singer.name
      },
      bgImage() {
        return this.singer.avatar
      },
      ...mapGetters([
        'singer'
      ])
    },
    data() {
      return {
        songs: []
      }
    },
    created() {
      this._getList()
    },
    methods: {
      _getList() {
        if (!this.singer.id) {
          this.$router.push('/singer')
          return
         }
         getSongsList(this.singer.id).then((res) => {
           if (res.code === ERR_OK) {
           
             processSongsUrl(this._normalizeSongs(res.data.list)).then((songs) => {
               this.songs = songs
             })
           }
         })
       },
      _normalizeSongs(list) {
        let ret = []
        list.forEach((item) => {
          let {musicData} = item
          if (isValidMusic(musicData)) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
    },
    components: {
      MusicList
    }
  }
</script>

<style scoped lang="scss">
.singer-detail{
	position:fixed;
	z-index:100;
	top:0;
	left:0;
	right:0;
	bottom:0;
	background-color:black;
}
.slide-enter-active, .slide-leave-active{
	transition: all 0.3s
}
.slide-enter, .slide-leave-to {
	transform:translate3d(100%,0,0)
}
</style>





