<template>
    <div>
      <Header :isVisibleLogout="true"  />
      <SearchCup />
    </div>
</template>

<script>
  import Header from '@/components/header.vue'
  import SearchCup from '@/components/sections/searchCup/index.vue'

  export default {
    components: {
      Header,
      SearchCup
    }
  }
</script>
