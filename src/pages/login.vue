<template>
    <div class="login">
        <LoginSection />
    </div>
</template>

<script>
    import LoginSection from '@/components/sections/login/index.vue'

    export default {
        components: {
            LoginSection
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/style/_colors.scss';
    @import '@/assets/style/_gradients.scss';
    .login {
       display:flex; 
       justify-content: center; 
       align-items: center; 
       background: $gradient-linear-primary;
       width: 100%;
       height: 100vh;
       color: $color-white;
    }
</style>
