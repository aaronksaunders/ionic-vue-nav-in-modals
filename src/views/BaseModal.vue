<template>
  <div>
    <ion-nav :root="rootPage" id="modal-nav"></ion-nav>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { IonNav } from "@ionic/vue";
export default defineComponent({
  name: "BaseModal",
  components: {
    IonNav
  },
  props: ["rootPage"],
});
</script>

<style lang="css" scoped>
</style>