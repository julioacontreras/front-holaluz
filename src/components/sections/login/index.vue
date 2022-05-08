<template>
    <div class="container">
        <LogoInvert />
        <div class="space-6" />
        <div class="panel" :class="{'shakeBox': notFoundUser}">
            <div class="space-3" />
            <label> E-mail: </label>
            <div class="space-2" />
            <div class="input-text">
                <input type="email" v-model="email" placeholder="john.connor@email.com" />
            </div>
            <div class="space-3" />
            <label> Password: </label>
            <div class="space-2" />
            <div class="input-text">
                <input type="password" v-model="password" placeholder="*****" @keyup.enter="login(email, password)" />
            </div>
            <div class="space-6" />
            <button class="btn-primary-lg" @click="login(email, password)">Login</button>
            <div class="space-3" />
            <router-link to="/" class="btn-reverse-lg"> Cancel </router-link>
        </div>
    </div>
</template>

<script>
    import LogoInvert from '@/components/icons/logoInvert.vue'
    import apiLogin from '@/api/login'

    export default {
        components: {
            LogoInvert
        },
        data () {
            return {
                notFoundUser: false,
                email: '',
                password: ''
            }
        },
        methods: {
            async login(email, password) {
                try {
                    const response = await apiLogin(email, password)                    
                    if(response.data?.status === 'ok') {
                        this.$router.push('/client-zone')
                    } else {
                        this.notFoundUser = true
                        console.log(this.notFoundUser)
                        setTimeout(() => this.notFoundUser = false, 3000)
                    }
                } catch (e) {
                    console.error('Something wrong happen')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/style/_spaces.scss';
    @import '@/assets/style/_borders.scss';
    @import '@/assets/style/_colors.scss';

    .container {
        width: 100%;
        max-width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .panel {
        padding: $padding-2xl;
        background-color: $color-white;
        width: 100%;
        border-radius: $border-base;
        color: $color-black;
    }

    .shakeBox {
        animation-name: shakeBox;
        animation-duration: 1s;
    }

    @keyframes shakeBox {
        10%, 90% {
            transform: translate3d(-1px, 0, 0);
        }
        
        20%, 80% {
            transform: translate3d(2px, 0, 0);
        }

        30%, 50%, 70% {
            transform: translate3d(-4px, 0, 0);
        }

        40%, 60% {
            transform: translate3d(4px, 0, 0);
        }
    }    
</style>
