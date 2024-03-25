<template>
  <div id="app">
    <main-sidebar @menu-click="handleMenuClick" />
    <router-view />
  </div>
</template>

<script>
import MainSidebar from './components/MainSidebar.vue';

export default {
  components: {
    MainSidebar,
  },
  methods: {
    handleMenuClick(page) {
      this.$router.push(page);
    },
  },
};
</script>
