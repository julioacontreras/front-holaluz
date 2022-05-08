<template>
  <div>
    <HeaderComponent :is-visible-logout="true" />
    <SearchCupSection />
  </div>
</template>

<script>
import HeaderComponent from "@/components/headerComponent.vue";
import SearchCupSection from "@/components/sections/searchCupSection/indexComponent.vue";

export default {
  components: {
    HeaderComponent,
    SearchCupSection,
  },
};
</script>
