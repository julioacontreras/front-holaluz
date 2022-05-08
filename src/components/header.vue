<template>
    <div class="header">
        <div class="area-logo">
            <logo />
        </div>
        <div v-if="!isVisibleLogout" class="area-menu">
            <router-link to="/login" class="btn-primary" > Login </router-link>
        </div>
        <div v-else class="area-menu">
            <router-link to="/" class="btn-reverse" > Logout </router-link>
        </div>
    </div>
</template>

<script>
import Logo from '@/components/icons/logo.vue'

export default {
    props: {
        isVisibleLogout: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Logo
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/style/_spaces.scss';

    .header {
        padding: $padding-lg;
        display: flex;        
    }

    .area-logo {
        flex-basis: fit-content;  
    }
    .area-menu {
        display: flex;
        justify-content: end;
        flex-grow: 1;
    }
</style>
