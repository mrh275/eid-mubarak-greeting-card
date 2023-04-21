<script>
export default {
  name: "Home",
  mounted() {
    // document.querySelector(".star-1").classList.add("star-1-show");
    window.addEventListener("load", function () {
      document.querySelector(".star-1").classList.add("star-1-show");
      document.querySelector(".star-2").classList.add("star-2-show");
      document.querySelector(".star-3").classList.add("star-3-show");
      document.querySelector(".star-4").classList.add("star-4-show");
      document.querySelector(".star-5").classList.add("star-5-show");
      document.querySelector(".star-6").classList.add("star-6-show");
      document.querySelector(".star-7").classList.add("star-7-show");
      document.querySelector(".star-8").classList.add("star-8-show");
    });
  },
};
</script>

<template>
  <div class="main-wrapper bg-gradient-to-b from-[#f0e3c5] from-[33.33%] via-[#fffbe7] via-[66.66%] to-[#f0e3c5] to-[99.99%] w-full flex justify-center relative h-[150vh]">
    <div class="star-wrapper">
      <img src="../assets/img/star-green.png" alt="Bintang Hijauh" class="star star-1 w-9 absolute -top-full left-12" />
      <img src="../assets/img/star-green.png" alt="Bintang Hijauh" class="star star-2 w-7 absolute -top-full left-8" />
      <img src="../assets/img/star-yellow.png" alt="Bintang Kuning" class="star star-3 w-9 absolute -top-full left-24" />
      <img src="../assets/img/star-yellow.png" alt="Bintang Kuning" class="star star-4 w-7 absolute -top-full left-32" />
      <img src="../assets/img/star-green.png" alt="Bintang Hijauh" class="star star-5 w-9 absolute -top-full right-12" />
      <img src="../assets/img/star-green.png" alt="Bintang Hijauh" class="star star-6 w-7 absolute -top-full right-8 -scale-x-100" />
      <img src="../assets/img/star-yellow.png" alt="Bintang Kuning" class="star star-7 w-9 absolute -top-full right-24 -scale-x-100" />
      <img src="../assets/img/star-green.png" alt="Bintang Kuning" class="star star-8 w-11 absolute -top-full right-32" />
    </div>
    <div class="masjid-bg fixed flex bottom-0 w-full">
      <img src="../assets/img/bg-masjid-2.png" alt="bg-masjid" class="w-[13m] h-[13em] bottom-0 left-0 right-0 absolute mx-auto" />
      <div class="masjid-bg relative flex w-full">
        <img src="../assets/img/bg-masjid-1.png" alt="bg-masjid" class="w-[11em] h-[11em] bottom-[1.2rem] left-0 right-0 absolute mx-auto" />
      </div>
      <img src="../assets/img/masjid.png" alt="Masjid" class="absolute bottom-0 w-[24rem]" />
    </div>
  </div>
</template>

<style scoped>
.star-1-show,
.star-5-show {
  top: 6rem;
}
.star-2-show,
.star-6-show {
  top: 1.5rem;
}
.star-3-show,
.star-7-show {
  top: 2rem;
}
.star-4-show {
  top: 7rem;
}
.star-8-show {
  top: 4.8rem;
}

.star-1 {
  transition: all ease-out 2s;
}
.star-2 {
  transition: all ease-out 1.9s;
}
.star-3 {
  transition: all ease-out 1.4s;
}
.star-4 {
  transition: all ease-out 2.1s;
}
.star-5 {
  transition: all ease-out 1.7s;
}
.star-6 {
  transition: all ease-out 1.8s;
}
.star-7 {
  transition: all ease-out 1.6s;
}
.star-8 {
  transition: all ease-out 1.5s;
}
</style>
