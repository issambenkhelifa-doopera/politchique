<script setup lang="ts">
interface Props {
  size?: "sm" | "md" | "lg";
}

withDefaults(defineProps<Props>(), {
  size: "md",
});
</script>

<template>
  <div>
    <img
      src="/coq.png"
      alt="Coq gaulois"
      class="fr-logo__coq w-20 h-20"
      draggable="false"
    />
  </div>
</template>

<style scoped></style>
