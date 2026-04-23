<script setup lang="ts">
useSeoMeta({
  title: "A propos | Presidentielle francaise 2027",
  description:
    "Informations de transparence : impartialite editoriale, donnees, hebergement et outils utilises.",
});
</script>

<template>
  <UContainer class="py-10 space-y-6">
    <UCard>
      <template #header>
        <div class="flex items-center justify-between gap-3">
          <h1 class="text-2xl font-bold tracking-tight sm:text-3xl">
            A propos
          </h1>
          <UButton
            to="/"
            icon="i-lucide-home"
            class="bg-blue-900 text-white hover:bg-blue-800"
          >
            Accueil
          </UButton>
        </div>
      </template>

      <p class="text-sm text-muted">
        Cette page presente les principes de fonctionnement et de transparence
        du site.
      </p>
    </UCard>

    <UCard>
      <template #header>
        <h2 class="text-lg font-semibold">Protection des donnees</h2>
      </template>
      <p class="text-sm">
        Aucune donnee personnelle nominative n'est conservee par le quiz de
        proximite. Les reponses sont calculees localement dans le navigateur.
      </p>
    </UCard>

    <UCard>
      <template #header>
        <h2 class="text-lg font-semibold">Impartialite editoriale</h2>
      </template>
      <p class="text-sm">
        Le site est construit avec un objectif d'impartialite et de coherence :
        comparaison des positions publiques, attribution des sources et
        explications methodologiques.
      </p>
    </UCard>

    <UCard>
      <template #header>
        <h2 class="text-lg font-semibold">Infrastructure et outils</h2>
      </template>
      <ul class="list-disc space-y-2 pl-5 text-sm">
        <li>Serveur francais : OVH.</li>
        <li>Tracking francais : Matomo.</li>
        <li>Framework : Nuxt.</li>
      </ul>
    </UCard>
    <UCard>
      <template #header>
        <h2 class="text-lg font-semibold">A propos de moi</h2>
      </template>
      <p class="text-sm">
        Je m'appelle Maxime, bizarrement, la politique ne m'interesse pas
        beaucoup, mais je voulais faire un outil comme j'en aurai eu besoin et
        qui permet à un seul endroit de voir les programmes des candidats, le
        programme des candidats et aussi leurs casseroles ;)<br />
        On a demandé à ma mère lors de son embauche (femme de ménage, à la
        retraite) d'avoir un casier judiciaire vide. Mais bizzarement on ne
        demande pas ça a des gens qui vont gouverner 70 millions de personnes...
      </p>
    </UCard>
  </UContainer>
</template>
