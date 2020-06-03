<template>
<div class="first">
<img :src="require('../../assets/logo.png')" alt="" class="logo">
<v-touch ref="scroll" class="home" :data="discList">
     
       
           <home-slider/>
              <home-nav/>
            
                <div class="recommend">
                 
                  <div class="recommend-list" >
                       <h1 class="list-title">热门歌单推荐</h1>
                         <ul>
                            <li @click="selectItem(item)"v-for="item in discList" class="item" >
                                 <div class="icon">
                                     <img width="70" height="70" v-lazy="item.imgurl">
                                  
                                </div>
                                <div class="text">
                                      <h2 class="name" v-html="item.creator.name">

                                      </h2>
                                      <p class="desc" v-html="item.dissname">
                                   
                                      </p>
                               </div>
                           </li>
                         </ul>
                    
                     </div>
              </div> 
              <div class="loading-container" v-show="!discList.length">
        <loading></loading>
      </div>
     
    </v-touch>    
  <router-view></router-view>

 

</div>
</template>

  <script>
   import Scroll from '../../base/scroll';
   import HomeSlider from './slider.vue';
   import HomeNav from './nav.vue';
   import {getDiscList} from '../../api/home';
  import {ERR_OK} from '../../api/config';
 import {playlistMixin} from '../../assets/js/mixin'
   import {mapMutations} from 'vuex'
    import Loading from '../../base/loading/loading'

   export default {
    mixins: [playlistMixin],
    name: 'Home',
    components: {
       Scroll,
      HomeSlider,
      HomeNav,
      getDiscList,
      ERR_OK,
      Loading
    },
     data() {
      return {
        discList: [],
       
      }
    },
      created() {
      this._getDiscList()
    },
    methods: {
     handlePlaylist(playlist) {
        const bottom = playlist.length > 0 ? '60px' : ''

        this.$refs.scroll.refresh()
      },
         selectItem(item) {
        this.$router.push({
          path: `/home/${item.dissid}`
        })
        this.setDisc(item)
      },

      loadImage() {
        if (!this.checkloaded) {
          this.checkloaded = true
          setTimeout(() => {
            this.$refs.scroll.refresh()
          }, 20)
        }
      },
         
      _getDiscList() {
        getDiscList().then((res) => {
          if (res.code === ERR_OK) {
            this.discList = res.data.list
            
          }
        })
      },  ...mapMutations({
        setDisc: 'SET_DISC'
      })
   
    }

   
    
    }
   
    </script>
<style scoped lang="scss" >
.logo{
	display:block;
  margin:auto;

  height:80px;
 

}

.first{
  height:100%;
  weight:100%;

}
.home{
 

 overflow: hidden;
touch-action: pan-y!important;

}
 .recommend{
    width: 100%;
    bottom: 0;  

 }

.recommend-list{
        
          top:0;
         
          width: 100%;
      
          font-weight:bolder;
         

}
       .list-title{
          height: 40px;
          line-height: 40px;
          text-align: center;
          font-size: 13px;
          color: black;
          padding-top:10px;
        
          margin-bottom:10px;
       }

        .item{
          display: flex;
          box-sizing: border-box;
          align-items: center;
          padding: 0 0 20px 0;
          border-top:dotted black 4px;
          margin-left:10px;
          margin-right:15px;

        }

          .icon{
            flex: 0 0 100px;
            width:140px;
            padding-top:10px;
            padding-left:20px;

          }
          img{
          border-radius:25%;
          }

          .text{
           display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;
            line-height: 15px;
            overflow: hidden;
          
            font-weight:bolder; 
          }
 
            .name{
              margin-bottom:10px;
              color: black;
                font-size: 14px;
            }

            .desc{

              color: black;
              font-size: 13px;
            }
            .loading-container{
           position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%) ;        
            }


</style>


























