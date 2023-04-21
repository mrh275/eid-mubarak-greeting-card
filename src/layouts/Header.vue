<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Header",
  components: {
    Navbar: Navbar,
  },
};
</script>

<template>
  <header class="main-header">
    <Navbar />
  </header>
</template>
