<template>
  <div class="NuxtLogo">
    <b-img src="~/assets/ExactAviation.png" fluid alt="Compamny Logo" />
  </div>
</template>

<script>
export default {
  name: 'Logo',
}
</script>

<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
