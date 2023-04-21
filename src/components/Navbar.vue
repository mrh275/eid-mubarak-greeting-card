<script>
export default {
  name: "Navbar",
};
</script>

<template>
  <nav class="navbar py-2 bg-slate-900 text-white px-4 flex justify-between items-center z-10">
    <div class="brand-wrapper">
      <a href="/" class="brand font-semibold text-2xl"><span class="text-[#16db65]">Eid</span> <span class="text-[#7ae582]">Mubarak</span></a>
    </div>
    <div class="menu-wrapper">
      <font-awesome icon="fa-solid fa-bars" class="cursor-pointer p-4" />
    </div>
  </nav>
</template>
