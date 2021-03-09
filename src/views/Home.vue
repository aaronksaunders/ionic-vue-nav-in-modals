<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Ionic Vue Ion Nav</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <ion-button @click="setOpen(true)">Show Modal With Nav</ion-button>
      <ion-modal
        :is-open="isOpenRef"
        @onDidDismiss="setOpen(false)"
      >
        <base-modal :rootPage="ModalHome"></base-modal>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonModal
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import BaseModal from "./BaseModal.vue";
import ModalHome from "./ModalHome.vue";


export default defineComponent({
  name: "Home",
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => (isOpenRef.value = state);
    return { isOpenRef, setOpen,  ModalHome };
  },
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonModal,
    BaseModal,
  }
});
</script>

<style scoped>
</style>