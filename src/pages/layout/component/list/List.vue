<template>
  <div class="list" :style="[changed_color]">
    <el-menu 
        :default-active="defaultActive" 
        class="el-menu-vertical-demo el-boder" 
        :collapse="leftMenuStatus"
        :background-color="menu_color" 
        text-color="#fff" 
        active-text-color="#ffd04b" 
        @select="changeRoute" >
        <item 
            v-for="route in permission_routers" 
            :key="route.name" 
            :index="route.path" 
            :route="route" 
            v-if="!route.hidden">
        </item>
    </el-menu>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  import Item from './item'
  export default {
    name: "menuList",
    data() {
      return {
        isCollapse: true,
      }
    },
    methods: {
      changeRoute(index, indexPath) {
        this.$router.push(index)
      }
    },
    computed: {
      ...mapGetters([
        'leftMenuStatus',
        'menu_color',
        'permission_routers'
      ]),
      changed_color() {
        return {
          'background-color': this.menu_color
        }
      },
      defaultActive() {
        return this.$route.path //路由与菜单联动
      }
    },
    components: {
      Item
    }
  }

</script>

<style scoped>
  .el-aside {
    color: #333;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .el-boder {
    border: 0
  }

  .list {
    background: #333744;
  }

</style>
