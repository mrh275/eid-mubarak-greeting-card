<script>
export default {
  name: "Home",
  data() {
    return {
      playButton: "fa fa-play",
    };
  },
  methods: {
    playAudio() {
      const audio = document.querySelector("audio");
      if (audio.paused) {
        audio.play();
        this.playButton = "fa fa-pause";
        document.querySelector(".tooltips").style.display = "none";
      } else {
        audio.pause();
        this.playButton = "fa fa-play";
        document.querySelector(".tooltips").style.display = "block";
      }
    },
  },
  mounted() {
    window.addEventListener("load", function () {
      document.querySelector(".star-1").classList.add("star-1-show");
      document.querySelector(".star-2").classList.add("star-2-show");
      document.querySelector(".star-3").classList.add("star-3-show");
      document.querySelector(".star-4").classList.add("star-4-show");
      document.querySelector(".star-5").classList.add("star-5-show");
      document.querySelector(".star-6").classList.add("star-6-show");
      document.querySelector(".star-7").classList.add("star-7-show");
      document.querySelector(".star-8").classList.add("star-8-show");
      document.querySelector(".greetings-wrapper h4").classList.add("show");
      document.querySelector(".greetings-wrapper h1").classList.add("show");
      document.querySelector(".greetings-wrapper h5").classList.add("show-scale");
    });
    window.addEventListener("scroll", function () {
      let offest = window.pageYOffset;
      if (offest > 100) {
        document.querySelector(".star-2").classList.remove("star-2-show");
        document.querySelector(".star-6").classList.remove("star-6-show");
        document.querySelector(".star-1").classList.add("star-1-move");
        document.querySelector(".star-3").classList.add("star-3-move");
        document.querySelector(".star-4").classList.add("star-4-move");
        document.querySelector(".star-5").classList.add("star-5-move");
        document.querySelector(".star-7").classList.add("star-7-move");
        document.querySelector(".star-8").classList.add("star-8-move");
        document.querySelector(".greetings-wrapper h4").classList.remove("show");
        document.querySelector(".greetings-wrapper h1").classList.remove("show");
        document.querySelector(".bg-masjid-1").style.transform = "translateY(80px)";
        document.querySelector(".bg-masjid-2").style.transform = "translateY(80px)";
        document.querySelector(".masjid").style.transform = "translateY(80px)";
        document.querySelector(".greetings-wrapper h5").style.transform = "translateY(180px) scale(0.8)";
        document.querySelector(".taqabbal").classList.add("greet-show");
        document.querySelector(".open-greet-1").classList.add("greet-show");
        document.querySelector(".open-greet-2").classList.add("greet-show");
        document.querySelector(".open-greet-3").classList.add("greet-show");
        document.querySelector(".ketupat-1").classList.add("show-ketupat");
        document.querySelector(".ketupat-2").classList.add("show-ketupat");
      } else {
        document.querySelector(".star-2").classList.add("star-2-show");
        document.querySelector(".star-6").classList.add("star-6-show");
        document.querySelector(".star-1").classList.remove("star-1-move");
        document.querySelector(".star-3").classList.remove("star-3-move");
        document.querySelector(".star-4").classList.remove("star-4-move");
        document.querySelector(".star-5").classList.remove("star-5-move");
        document.querySelector(".star-7").classList.remove("star-7-move");
        document.querySelector(".star-8").classList.remove("star-8-move");
        document.querySelector(".greetings-wrapper h4").classList.add("show");
        document.querySelector(".greetings-wrapper h1").classList.add("show");
        document.querySelector(".bg-masjid-1").style.transform = "translateY(0px)";
        document.querySelector(".bg-masjid-2").style.transform = "translateY(0px)";
        document.querySelector(".masjid").style.transform = "translateY(0px)";
        document.querySelector(".greetings-wrapper h5").style.transform = "translateY(0px) scale(1)";
        document.querySelector(".taqabbal").classList.remove("greet-show");
        document.querySelector(".open-greet-1").classList.remove("greet-show");
        document.querySelector(".open-greet-2").classList.remove("greet-show");
        document.querySelector(".open-greet-3").classList.remove("greet-show");
        document.querySelector(".ketupat-1").classList.remove("show-ketupat");
        document.querySelector(".ketupat-2").classList.remove("show-ketupat");
      }

      if (offest > 300) {
        document.querySelector(".open-greet-1").classList.remove("greet-show");
        document.querySelector(".open-greet-2").classList.remove("greet-show");
        document.querySelector(".open-greet-3").classList.remove("greet-show");
      }

      if (offest > 400) {
        document.querySelector(".open-greet-1").classList.remove("greet-show");
        document.querySelector(".open-greet-2").classList.remove("greet-show");
        document.querySelector(".open-greet-3").classList.remove("greet-show");
        document.querySelector(".open-greet-4").classList.add("greet-show");
        document.querySelector(".forgive").classList.add("greet-show");
        document.querySelector(".desc-greet").classList.add("greet-show");
        document.querySelector(".greetings-wrapper h5").style.transform = "translateY(150px)";
      } else {
        document.querySelector(".open-greet-4").classList.remove("greet-show");
        document.querySelector(".forgive").classList.remove("greet-show");
        document.querySelector(".desc-greet").classList.remove("greet-show");
      }
    });
    // window.addEventListener("load", (event) => {

    // });
  },
};
</script>

<template>
  <div class="main-wrapper bg-gradient-to-b from-[#f0e3c5] from-[33.33%] via-[#fffbe7] via-[66.66%] to-[#f0e3c5] to-[99.99%] w-full flex justify-center relative h-[300vh]">
    <div class="star-wrapper">
      <img src="../assets/img/star-green.png" alt="Bintang Hijauh" class="star star-1 w-9 fixed -top-full left-12" />
      <img src="../assets/img/star-green.png" alt="Bintang Hijauh" class="star star-2 w-7 fixed -top-full left-8" />
      <img src="../assets/img/star-yellow.png" alt="Bintang Kuning" class="star star-3 w-9 fixed -top-full left-24" />
      <img src="../assets/img/star-yellow.png" alt="Bintang Kuning" class="star star-4 w-7 fixed -top-full left-32" />
      <img src="../assets/img/star-green.png" alt="Bintang Hijauh" class="star star-5 w-9 fixed -top-full right-12" />
      <img src="../assets/img/star-green.png" alt="Bintang Hijauh" class="star star-6 w-7 fixed -top-full right-8 -scale-x-100" />
      <img src="../assets/img/star-yellow.png" alt="Bintang Kuning" class="star star-7 w-9 fixed -top-full right-24 -scale-x-100" />
      <img src="../assets/img/star-green.png" alt="Bintang Kuning" class="star star-8 w-11 fixed -top-full right-32" />
    </div>
    <div class="ketupat-wrapper fixed">
      <img src="../assets/img/ketupat-2x1.png" alt="Ketupat 2.1" class="ketupat-1 w-16 fixed transition-all ease-in-out duration-[0.8s] -translate-y-60 opacity-0 -top-2 right-2" />
      <img src="../assets/img/ketupat-2x2.png" alt="Ketupat 2.2" class="ketupat-2 w-16 fixed -top-8 left-1 opacity-0 transition-all ease-in-out duration-[1s] -translate-y-60" />
    </div>
    <div class="greetings-wrapper fixed top-[13rem]">
      <h4 class="text-2xl font-bold text-[#004f3a] text-center -translate-y-[220px] opacity-0 transition-all ease-in-out duration-[1.5s]">Selamat Hari Raya</h4>
      <h1 class="eid-text text-6xl text-center mt-6 font-semibold text-[#004f3a] -translate-y-[420px] opacity-0 transition-all ease-in-out duration-[1.7s]">Idul Fitri</h1>
      <h5 class="text-center text-lg font-semibold text-[#004f3a] mt-4 transition-all ease-in-out duration-[1.3s] opacity-0 scale-50">
        Muhamad Ramdani Hidayatullah <br />
        & <br />
        Keluarga
      </h5>
    </div>
    <div class="long-greetings-wrapper fixed top-[13rem] text-center text-[#004f3a]">
      <h2 class="taqabbal text-xl scale-50 opacity-0 font-semibold mb-6 transition-all ease-in-out duration-[1s]">تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ صِيَامَنَا وَصِيَامَكُمْ</h2>
      <p class="open-greet-1 px-6 font-semibold transition-all scale-50 opacity-0 ease-in-out duration-[1.1s]">Tidak terasa Ramadhan sudah berlalu. Sebulan kita berpuasa, menahan lapar, haus dan menahan dari segala nafsu duniawi.</p>
      <p class="open-greet-2 font-semibold px-6 transition-all ease-in-out duration-[1.3s] scale-50 opacity-0">
        Kita diuji agar dapat merasakan kesusahaan yang diderita saudara kita yang fakir/miskin/hamba sahaya/dll. Dengan begitu membuat kita untuk lebih banyak-banyak bersyukur atas apa yang kita miliki.
      </p>
      <p class="open-greet-3 font-semibold transition-all ease-in-out px-6 duration-[1.5s] scale-50 opacity-0">Semoga dengan Ramadhan ini kita menjadi pribadi yang lebih baik lagi. Pribadi yang lebih dekat dengan sang pencipta yaitu Allah SWT.</p>
    </div>
    <div class="long-greetings-wrapper-2 fixed top-[13rem] text-center text-[#004f3a]">
      <h2 class="taqabbal text-xl scale-50 opacity-0 font-semibold mb-6 transition-all ease-in-out duration-[1s]">تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ صِيَامَنَا وَصِيَامَكُمْ</h2>
      <p class="open-greet-4 px-6 font-semibold transition-all scale-50 opacity-0 ease-in-out duration-[1.1s]">Kami segenap keluarga mengucapkan,</p>
      <p class="font-bold my-2 text-xl px-6 transition-all ease-in-out duration-[1.3s] scale-50 opacity-0 forgive">Mohon Maaf Lahir Batin</p>
      <p class="font-semibold transition-all ease-in-out px-6 duration-[1.5s] desc-greet scale-50 opacity-0">
        Bila mana kami yang tidak bisa luput dari kesalahan, baik yang disengaja maupun tidak disengaja. Semoga semua dosa-dosa kita diampuni oleh Allah SWT dan kita kembali fitri.<br />
        Semoga kita dipertemukan kembali dengan Ramadhan selanjutnya. Aamiinn.
      </p>
    </div>
    <div class="masjid-bg fixed flex justify-center bottom-0 w-full">
      <img src="../assets/img/bg-masjid-2.png" alt="bg-masjid" class="bg-masjid-1 w-[13m] h-[13em] -bottom-4 left-0 right-0 absolute mx-auto transition-all ease-in-out duration-[1.3s]" />
      <div class="masjid-bg relative flex w-full">
        <img src="../assets/img/bg-masjid-1.png" alt="bg-masjid" class="w-[11em] bg-masjid-2 h-[11em] bottom-0 left-0 right-0 absolute mx-auto transition-all ease-in-out duration-[1.1s]" />
      </div>
      <img src="../assets/img/masjid.png" alt="Masjid" class="absolute -bottom-4 w-[22rem] masjid transition-all ease-in-out duration-[0.7s]" />
    </div>
  </div>
  <audio src="../assets/audio/audio.mp3"></audio>
  <span class="tooltips fixed right-2 bottom-40 bg-[#004f3a] text-white px-1 py-0.5 rounded-md">Play me!</span>
  <button @click="playAudio" class="play-audio px-3 py-1.5 bg-[#004f3a] fixed bottom-28 right-5 text-white rounded-full cursor-pointer">
    <font-awesome :icon="playButton"></font-awesome>
  </button>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600&display=swap");

.tooltips::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #004f3a transparent transparent transparent;
}
@keyframes fadeinfinite {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.tooltips {
  animation-name: fadeinfinite;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
}
.eid-text {
  font-family: "Great Vibes";
}
.taqabbal {
  font-family: "Noto Naskh Arabic";
}
.greet-show {
  opacity: 1;
  transform: scale(1);
}
.show-ketupat {
  transform: translateY(0);
  opacity: 1;
}
.show-scale {
  opacity: 1;
  transform: scale(1);
}
.show {
  transform: translateY(0px);
  opacity: 1;
}
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
.star-1-move {
  transform: scale(0.7) translateX(50px) translateY(-25px);
}
.star-3-move {
  transform: scale(0.7) translateX(30px) translateY(-10px);
}
.star-4-move {
  transform: scale(0.7) translateX(30px) translateY(-25px);
}
.star-7-move,
.star-8-move {
  transform: scale(0.7) translateX(-30px);
}
.star-5-move {
  transform: scale(0.7) translateX(-50px);
}
.star-1 {
  transition: all ease-in-out 0.6s;
}
.star-2 {
  transition: all ease-in-out 0.8s;
}
.star-3 {
  transition: all ease-in-out 0.7s;
}
.star-4 {
  transition: all ease-in-out 1.1s;
}
.star-5 {
  transition: all ease-in-out 1s;
}
.star-6 {
  transition: all ease-in-out 1.23s;
}
.star-7 {
  transition: all ease-in-out 1.3s;
}
.star-8 {
  transition: all ease-in-out 1.5s;
}
</style>
