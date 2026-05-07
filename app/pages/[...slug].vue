<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData("page-" + route.path, () => {
  const normalizedPath = route.path.endsWith("/")
    ? route.path.slice(0, -1) || "/"
    : route.path;
  const withTrailingSlash = normalizedPath === "/" ? "/" : `${normalizedPath}/`;

  return queryCollection("content")
    .path(normalizedPath)
    .first()
    .then((result) => {
      if (result) {
        return result;
      }

      return queryCollection("content").path(withTrailingSlash).first();
    });
});
const pageMeta = computed(
  () =>
    (page.value ?? {}) as {
      party?: string;
      partyIcon?: string;
      photo?: string;
    },
);
const seoTitle = computed(() =>
  page.value?.title
    ? `${page.value.title} | Présidentielle française 2027`
    : "Candidat | Présidentielle française 2027",
);
const seoDescription = computed(
  () =>
    page.value?.description ||
    "Synthèse du candidat, de son programme, des sources et des procédures.",
);

useSeoMeta({
  title: () => seoTitle.value,
  description: () => seoDescription.value,
  ogTitle: () => seoTitle.value,
  ogDescription: () => seoDescription.value,
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<template>
  <UContainer class="py-10">
    <UCard
      v-if="page"
      :ui="{ body: 'prose prose-neutral dark:prose-invert max-w-none' }"
    >
      <template #header>
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <UAvatar
              v-if="pageMeta.photo"
              :src="pageMeta.photo"
              :alt="page.title || 'Candidat'"
              size="lg"
            />
            <div class="space-y-1">
              <h1 class="text-lg font-semibold">
                {{ page.title || "Contenu" }}
              </h1>
              <UBadge
                v-if="pageMeta.party"
                color="neutral"
                variant="subtle"
                size="sm"
              >
                <UIcon
                  v-if="pageMeta.partyIcon"
                  :name="pageMeta.partyIcon"
                  class="mr-1"
                />
                {{ pageMeta.party }}
              </UBadge>
            </div>
          </div>
          <UButton
            v-if="route.path !== '/'"
            to="/"
            icon="i-lucide-home"
            class="bg-blue-900 text-white hover:bg-blue-800"
          >
            Accueil
          </UButton>
        </div>
      </template>

      <div v-if="pageMeta.photo" class="mb-6 flex justify-center">
        <img
          :src="pageMeta.photo"
          :alt="page.title || 'Candidat'"
          class="h-40 w-40 rounded-xl object-cover shadow-sm"
        />
      </div>

      <ContentRenderer :value="page" />
    </UCard>
  </UContainer>
</template>
