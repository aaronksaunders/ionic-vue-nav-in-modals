<template>
<ion-page>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button @click="goBack">BACK</ion-button>
      </ion-buttons>
      <ion-title>MODAL HOME DETAIL</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <h2>MODAL HOME DETAIL</h2>
  </ion-content>
</ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonPage,
  IonContent,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonButton,
  IonButtons,
} from "@ionic/vue";
export default defineComponent({
  name: "ModalHomeDetail",
  components: {
    IonPage,
    IonContent,
    IonToolbar,
    IonHeader,
    IonTitle,
    IonButton,
    IonButtons,
  },
  props: [ "modalNav"],
  setup(props) {
    /**
     * get the nav from the props and go back
     */
    const goBack = () => {
      const nav = props.modalNav.value;
      nav.pop();
    };
    return {
      goBack
    };
  }
});
</script>

<style lang="css" scoped>
</style>