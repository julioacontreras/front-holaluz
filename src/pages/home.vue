<template>
    <div>
      <Header />
      <Hero />
    </div>
</template>

<script>
  import Header from '@/components/header.vue'
  import Hero from '@/components/hero.vue'

  export default {
    components: {
      Header,
      Hero
    }
  }
</script>