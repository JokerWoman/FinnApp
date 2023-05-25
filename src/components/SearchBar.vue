<script setup>
import { computed, ref, toRefs } from "vue";

const input = ref(null);
const search = ref("");
const searchHistory = ref([]);
const hover = ref(false);

const props = defineProps({
  placeholder: {
    type: String,
    default: "Procuras algum lugar?",
  },
  className: {
    type: String,
    default: "",
  },
});

const { placeholder } = toRefs(props);
const { className } = toRefs(props);

const inputHover = computed(() => {
  return searchHistory.value.length > 0 && !!hover.value;
});

const lastSearch = computed(() => {
  let search = [];
  let max = searchHistory.value.length < 4 ? searchHistory.value.length : 4;

  for (let i = 0; i < max; i++) {
    search.push(searchHistory.value[i]);
  }

  return search;
});

const getSearch = () => {
  hover.value = false;
  searchHistory.value.unshift(search.value);
  input.value.blur();
};
</script>

<template>
  <div class="relative">
    <div
      class="w-full rounded-[16px] flex items-center my-4"
      :class="className"
    >
      <button @click="getSearch">
        <img
          src="../assets/icons/search.png"
          alt=""
          style="filter: invert(1)"
        />
      </button>
      <div class="w-full mx-4">
        <input
          ref="input"
          v-model="search"
          type="text"
          :placeholder="placeholder"
          class="bg-transparent w-full text-white hover:border-none search-input relative z-30"
          @keyup.enter="getSearch"
          @click="hover = true"
          @blur="hover = false"
        />
      </div>
      <img src="../assets/icons/filters.png" alt="" />
    </div>
    <div
      class="absolute top-0 z-0 bg-[#DDDDDD] opacity-[0.26] h-full w-full rounded-[16px]"
    ></div>

    <div
      class="bg-white absolute bottom-[-100$] rounded-[16px] w-full z-40"
      v-show="inputHover"
    >
      <ol class="p-2">
        <li class="my-2 p-2">Recentemente</li>
        <li
          class="my-2 p-2 hover:bg-[#D1D1D1] rounded-[10px]"
          v-for="searching in lastSearch"
          :key="searching"
        >
          {{ searching }}
        </li>
      </ol>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-input {
  height: 100% !important;
}
</style>
