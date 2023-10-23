<template>
  <div class="carta" @click="escogeCarta">
    <div v-if="visible" class="cartacara frente">
      {{ value }}
    </div>
    <div v-else class="cartacara detras">
      detras
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posicion: {
      type: Number,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const escogeCarta = () => {
      context.emit('carta-escogida', {
        posicion: props.posicion
      })
    }
    return {
      escogeCarta
    }

  }
}
</script>

<style>

</style>