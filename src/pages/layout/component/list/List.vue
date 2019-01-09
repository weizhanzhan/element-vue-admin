<template>
  <div class="list" :style="[changed_color]">
    <el-menu :default-active="defaultActive" class="el-menu-vertical-demo el-boder" :collapse="leftMenuStatus"
      :background-color="menu_color" text-color="#fff" active-text-color="#ffd04b" @select="changeRoute">
      <item v-for="route in permission_routers" :key="route.name" :index="route.path" :route="route" v-if="!route.hidden">
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
        screenWidth: document.body.clientWidth,

      }
    },
    methods: {
      changeRoute(index, indexPath) {
        this.$router.push(index)
      },
      changeMenuState() {
        if (this.screenWidth < 1000)
          this.$store.dispatch('changeMenuStatus', true)
        else
          this.$store.dispatch('changeMenuStatus', false)
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
      },
      
    },

    mounted() {
      this.changeMenuState()
      const that = this
      
      window.onresize = () => {//根据窗口大小开关菜单
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
          that.changeMenuState()
        })()
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
    box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
    z-index: 1;
  }

</style>
