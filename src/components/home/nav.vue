 <template>
  <nav class="nav">
    <ul class="nav-list">
      <li
        class="nav-item"
        v-for="(item, index) in navs" :key="index">
        <a :href="item.linkUrl" class="nav-link">
          <img :src="item.picUrl" class="nav-pic">
          <img :src="item.textUrl" class="nav-text">

        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
  export default {
    name: 'HomeNav',
  			data() {
  				return {
  				navs:[
				{
   				 	 linkUrl: '#/personal',
   					 picUrl: require('./nav-item-1.png'),
            
    				 textUrl: require('./nav-text-1.png')
 				 },
  				 {
   					 linkUrl: '#/singer',
    				 picUrl: require('./nav-item-2.png'),
            
    				 textUrl: require('./nav-text-2.png')
  				  },
  				
  				   {
    					linkUrl: '#/personal',
   						picUrl: require('./nav-item-4.png'),
    					textUrl: require('./nav-text-4.png')
 				   },
 				   {
    					linkUrl: '',
   						picUrl: require('./nav-item-5.png'),
    					textUrl: require('./nav-text-5.png')
 				   }
					]
  				};
  			}
  		};

    </script>
    <style lang="scss" scoped>
@import "../../assets/scss/mixins";

  .nav {
    width: 100%;
 
    background-color:none;
  

    &-list {
      display: flex;
      flex-wrap: wrap;//超出了下一行

    }

    &-item {
      width: 25%;
 		margin-top:10px;

    }

    &-link {
      @include flex-center(column);

    }

    &-pic {
      width: 23%;
 

    }
     &-text{
        width:50px;
        height:25px;
     }
   
  }
 

</style>
