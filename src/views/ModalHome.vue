<template>
<ion-page>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-buttons slot="end">
        <ion-button @click="closeModal">CLOSE</ion-button>
      </ion-buttons>
      <ion-title>MODAL HOME</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <h2>MODAL HOME</h2>
    <ion-button @click="nextPage">SHOW MODAL DETAIL</ion-button>
  </ion-content>
</ion-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import {
  IonPage,
  IonContent,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonButton,
  IonButtons,
  modalController
} from "@ionic/vue";
import ModalHomeDetailVue from "./ModalHomeDetail.vue";
export default defineComponent({
  name: "ModalHome",
  components: {
    IonPage,
    IonContent,
    IonToolbar,
    IonHeader,
    IonTitle,
    IonButton,
    IonButtons
  },
  setup() {
    // the nav ref
    const modalNav = ref(null);

    // get the the ion-nav element so we can make
    // api calls
    onMounted(() => {
      const v = document.getElementById("modal-nav");
      modalNav.value = v;
    });

    /**
     *  when going to the next page, I pass the nav as a property
     * so I dont need to get it from the document again
     */
    const nextPage = () => {
      modalNav.value.push(ModalHomeDetailVue, {
        // these come across as properties on the component
        modalNav: modalNav
      });
    };

    /**
     * close the modal dialog
     */
    const closeModal = async () => {
      await modalController.dismiss();
    };

    return {
      nextPage,
      closeModal
    };
  }
});
</script>

<style lang="css" scoped>
</style>