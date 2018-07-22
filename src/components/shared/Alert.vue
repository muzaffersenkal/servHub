<template>
<ion-card>
  <ion-card-header>
    Error
  </ion-card-header>
  <ion-card-content v-on:click="onClose">
 {{ text }}
 
  </ion-card-content>
</ion-card>

</template>

<script>

export default {
  props: ['text'],
  methods: {
    onClose(){
      
      this.$emit('dismissed')
    }
  }
}
</script>
