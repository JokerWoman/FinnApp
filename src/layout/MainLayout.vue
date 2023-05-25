<script setup>
import { ref } from "vue";
import TopNavBar from "../components/TopNavBar.vue";
import BottomNavBar from "../components/BottomNavBar.vue";

const menu = ref(false);
</script>

<template>
  <div>
    <top-nav-bar @toggle="menu = !menu" />

    <div v-if="menu" class="w-screen h-screen z-50 fixed top-0">
      <div
        class="h-screen min-w-[250px] w-[80vw] max-w-[400px] bg-[#252525] z-100 absolute top-0 rounded-tr-[157px]"
      >
        <button
          class="z-100 absolute right-[-15%] top-[5%]"
          @click="menu = !menu"
        >
          <img src="../assets/icons/close.png" alt="" style="height: 1.5em" />
        </button>

        <div class="py-32 px-8 relative">
          <div class="rounded-full">
            <img src="../assets/covers/profile-image.png" alt="" />
          </div>
          <h1 class="mt-6 text-3xl text-white font-medium">Camila Medina</h1>

          <div class="mt-10 h-1/2 overflow-scroll">
            <ol>
              <li class="my-10 text-xl text-white flex items-end">
                <img
                  src="../assets/icons/user.png"
                  alt=""
                  style="max-width: none"
                />
                <span class="ml-12">Perfil</span>
              </li>
              <li class="my-10 text-xl text-white flex items-end">
                <img
                  src="../assets/icons/group.png"
                  alt=""
                  style="max-width: none"
                />
                <span class="ml-12">Eventos Guardados</span>
              </li>
              <li class="my-10 text-xl text-white flex items-end">
                <img
                  src="../assets/icons/settings.png"
                  alt=""
                  style="max-width: none"
                />
                <span class="ml-12">Definições</span>
              </li>
              <li class="my-10 text-xl text-white flex items-end">
                <img
                  src="../assets/icons/question.png"
                  alt=""
                  style="max-width: none"
                />
                <span class="ml-12">Ajuda & Duvidas</span>
              </li>
              <li class="my-10 text-xl text-white flex items-end">
                <img
                  src="../assets/icons/logout.png"
                  alt=""
                  style="max-width: none"
                />
                <span class="ml-12">Sair</span>
              </li>
            </ol>
          </div>

          <div class="fixed bottom-20 flex items-center logo">
            <img src="../assets/icons/icon-logo.png" alt="" class="img-1" />
            <img src="../assets/icons/text-logo.png" alt="" class="img-2" />
          </div>
        </div>
      </div>
    </div>

    <div class="max-h-max py-16 px-6 w-full">
      <router-view />
    </div>

    <bottom-nav-bar />
  </div>
</template>

<style lang="scss" scoped>
li {
  img {
    max-width: none;
    height: 1.5em;
  }
}
.logo {
  img {
    max-width: none;
    &.img-1 {
      height: 4em;
    }
    &.img-2 {
      height: 2em;
    }
  }
}
</style>
