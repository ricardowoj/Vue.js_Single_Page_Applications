<template>

<div class="card border border-info shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
  <slot></slot>
  <div class="card-body font-weight-bold mx-auto">
    <p class="card-text">{{ titulo }}</p>
  </div>
</div>

</template>

<script>
export default {
  props: ['titulo']
}
</script>
