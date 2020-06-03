

<template>
  <div class="slider-wapper">
    <me-slider
      :data="sliders"
      :direction="direction"
      :loop="loop"
      :interval="interval"
      :pagination="pagination"
     
      >
      <swiper-slide
          v-for="(item, index) in sliders"
          :key="index"
        >
        <a :href="item.linkUrl" alt="" class='slider-link'>
          <img @load="loadImage" v-lazy="item.picUrl" alt="" class='slider-img needsclick'>
        </a>
      </swiper-slide>
    </me-slider>
  </div>
</template>

<script>
   import MeSlider from '../../base/slider';
  import {SwiperSlide} from 'vue-awesome-swiper';
  import {sliderOptions} from './config';
  import {Swiper} from 'vue-awesome-swiper';


  export default {

    name: "HomeSlider",
     components: {
      MeSlider,
      SwiperSlide,
      Swiper
    },
    data() {
      return {
        direction: sliderOptions.direction,
        loop: sliderOptions.loop,
        pagination: sliderOptions.pagination,
        interval: sliderOptions.interval,
        sliders: [
            {
              'linkUrl':'',
              'picUrl':require('./lunfan2.png')
            },
            {
              'linkUrl':'',
              'picUrl':require('./lunfan1.png')
             },
            {
              'linkUrl':'',
              'picUrl':require('./lunfan4.png')
             },{
              'linkUrl':'',
              'picUrl':require('./lunfan3.png')
             }
           ]
          };
      }

};
</script>

<style lang="scss" scoped>

  .slider-wapper {
    width: 100%;
    height: 220px;
background-color: white;
  }

  .slider-link {
    display: block;
     
  }

  .slider-link,
  .slider-img {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

</style>
