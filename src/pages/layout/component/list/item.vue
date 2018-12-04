<template>
  <el-menu-item :index="route.path" v-if="(!route.children ||route.children.length==1)">
    <i :class="route.meta.icon"></i>
    <span slot="title">{{route.name}}</span>
  </el-menu-item>
  <el-submenu :index="route.path" v-else>
    <template slot="title">
      <i :class="route.meta.icon"></i>
      <span slot="title">{{route.name}}</span>
    </template>
    <item v-if="route" v-for="item in route.children" :key="item.name" :route="item" :index="item.path">
    </item>
  </el-submenu>
</template>

<script>
  import {
    getActive,
    setActive
  } from '@/utils/menuactive'
  export default {
    name: 'item',
    props: ['route', 'index'],
  }

</script>

<style>

</style>
