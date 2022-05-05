<template>
  <div>
    <Header />
    <Menu />

    <router-view></router-view>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "AdminPage",
  components: { Header, Menu, Footer },
};
</script>

<style scoped></style>
