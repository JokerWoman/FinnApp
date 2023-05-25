<script setup>
import { computed, ref, toRefs } from "vue";

const props = defineProps({
  buttonInvert: {
    type: Boolean,
    default: false,
  },
});

const { buttonInvert } = toRefs(props);

const buttonClass = computed(() => {
  return !!buttonInvert.value ? "bg-white" : "bg-black";
});
</script>

<template>
  <div class="fixed bottom-0 w-full z-40">
    <div
      class="relative flex justify-center items-center bg-[#0C0C0C] py-[0.5em]"
    >
      <button class="text-white flex flex-col items-center">
        <img src="../assets/icons/home.png" alt="home-icon" />
        <p>Home</p>
      </button>
      <div class="relative">
        <button
          class="text-white flex flex-col items-center mx-10 relative top-[-2.5rem] p-5 rounded-full outline outline-[6px] outline-white outline-offset-[-1px]"
          :class="buttonClass"
        >
          <img
            src="../assets/icons/search.png"
            alt="search-icon"
            :class="!buttonInvert ? 'invert' : ''"
          />
        </button>
      </div>
      <button class="text-white flex flex-col items-center">
        <img src="../assets/icons/profile.png" alt="profile-icon" />
        <p>Profile</p>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
