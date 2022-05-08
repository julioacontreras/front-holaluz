<template>
  <div class="header">
    <div class="area-logo">
      <LogoIcon />
    </div>
    <div
      v-if="!isVisibleLogout"
      class="area-menu"
    >
      <router-link
        to="/login"
        class="btn-primary"
      >
        Login
      </router-link>
    </div>
    <div
      v-else
      class="area-menu"
    >
      <router-link
        to="/"
        class="btn-reverse"
      >
        Logout
      </router-link>
    </div>
  </div>
</template>

<script>
import LogoIcon from "@/components/icons/logoIcon.vue";

export default {
  components: {
    LogoIcon
  },
  props: {
    isVisibleLogout: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/_spaces.scss";

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
