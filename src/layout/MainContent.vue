<template>
  <div>
    <side-bar>
    </side-bar>
     <div class="site-content__wrapper">
        <router-view></router-view>
  </div>
  </div>
</template>

<script>
import SideBar from './SideBar.vue'
import {ref}  from 'vue'


export default{
    setup() {        
    },
    components: {
        SideBar
    }
}
</script>

<style scoped>
.site-content__wrapper{
   margin-left: 230px;
}

</style>
