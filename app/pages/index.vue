<script setup lang="ts">
const candidats = [
  {
    nom: "Édouard Philippe",
    parti: "Horizons",
    partiIcone: "i-lucide-compass",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Edouard_Philippe_en_2025.png/500px-Edouard_Philippe_en_2025.png",
    statut: "Fiche disponible",
    resume:
      "Synthèse du Manifeste d'Horizons, avec principaux axes programmatiques, sources et positions publiques.",
    to: "/candidats/edouard-philippe",
  },
  {
    nom: "David Lisnard",
    parti: "Nouvelle Énergie",
    partiIcone: "i-lucide-bolt",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/David_Lisnard_-_2013.jpg/500px-David_Lisnard_-_2013.jpg",
    statut: "Fiche disponible",
    resume:
      "Synthèse des positions de David Lisnard et de Nouvelle Énergie, avec sources et état des procédures.",
    to: "/candidats/david-lisnard",
  },
  {
    nom: "Gabriel Attal",
    parti: "Renaissance",
    partiIcone: "i-lucide-sun",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Gabriel%20Attal%202025%20%28cropped%29.jpg",
    statut: "Fiche disponible",
    resume:
      "Synthèse des positions de Gabriel Attal et de Renaissance, avec sources et état des procédures.",
    to: "/candidats/gabriel-attal",
  },
  {
    nom: "Jérôme Guedj",
    parti: "Parti socialiste",
    partiIcone: "i-lucide-flower-2",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/J%C3%A9r%C3%B4me%20Guedj%202010%20%28cropped%29.jpg",
    statut: "Fiche disponible",
    resume:
      "Synthèse neutre des positions de Jérôme Guedj et du Parti socialiste, avec sources et état des procédures.",
    to: "/candidats/jerome-guedj",
  },
  {
    nom: "Jean-Luc Mélenchon",
    parti: "La France insoumise",
    partiIcone: "i-lucide-megaphone",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Jean-Luc%20M%C3%A9lenchon%20%28Place%20au%20Peuple%29%20001.jpg",
    statut: "Fiche disponible",
    resume:
      "Synthèse des positions de Jean-Luc Mélenchon et de La France insoumise, avec sources et état des procédures.",
    to: "/candidats/jean-luc-melenchon",
  },
  {
    nom: "Marine Le Pen",
    parti: "Rassemblement National",
    partiIcone: "i-lucide-flag",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/8/81/Marine_Le_Pen_2025_%28cropped%29.jpg",
    statut: "Fiche disponible",
    resume:
      "Synthèse des positions de Marine Le Pen et du RN, avec sources et état des procédures.",
    to: "/candidats/marine-le-pen",
  },
  {
    nom: "Bruno Retailleau",
    parti: "Les Républicains",
    partiIcone: "i-lucide-shield",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Bruno_Retailleau.png",
    statut: "Fiche disponible",
    resume:
      "Synthèse neutre des positions de Bruno Retailleau et des Républicains, avec sources et état des procédures.",
    to: "/candidats/bruno-retailleau",
  },
  {
    nom: "Xavier Bertrand",
    parti: "Nous France",
    partiIcone: "i-lucide-map",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Xavier%20Bertrand%20-%202025%20%28cropped%29.jpg",
    statut: "Fiche disponible",
    resume:
      "Synthèse neutre des positions de Xavier Bertrand et de Nous France, avec sources et état des procédures.",
    to: "/candidats/xavier-bertrand",
  },
  {
    nom: "Nicolas Dupont-Aignan",
    parti: "Debout la France",
    partiIcone: "i-lucide-flag",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Nicolas_Dupont-Aignan%2C_homme_politique_fran%C3%A7ais_%28cropped%29.jpg",
    statut: "Fiche disponible",
    resume:
      "Synthèse neutre des positions de Nicolas Dupont-Aignan et de Debout la France, avec sources et état des procédures.",
    to: "/candidats/nicolas-dupont-aignan",
  },
  {
    nom: "Florian Philippot",
    parti: "Les Patriotes",
    partiIcone: "i-lucide-flag",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Florian_Philippot_%28A%29_%28cropped%29.JPG",
    statut: "Fiche disponible",
    resume:
      "Synthèse neutre des positions de Florian Philippot et des Patriotes, avec sources et état des procédures.",
    to: "/candidats/florian-philippot",
  },
  {
    nom: "François Asselineau",
    parti: "Union populaire républicaine",
    partiIcone: "i-lucide-landmark",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Fran%C3%A7ois%20ASSELINEAU.jpg",
    statut: "Fiche disponible",
    resume:
      "Synthèse neutre des positions de François Asselineau et de l'Union populaire républicaine, avec sources et état des procédures.",
    to: "/candidats/francois-asselineau",
  },
  {
    nom: "Nathalie Arthaud",
    parti: "Lutte ouvrière",
    partiIcone: "i-lucide-hammer",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Nathalie%20Arthaud%20%28LO%29%2019-05-2024.jpg",
    statut: "Fiche disponible",
    resume:
      "Synthèse neutre des positions de Nathalie Arthaud et de Lutte ouvrière, avec sources et état des procédures.",
    to: "/candidats/nathalie-arthaud",
  },
  {
    nom: "Delphine Batho",
    parti: "Génération Écologie",
    partiIcone: "i-lucide-leaf",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Delphine%20Batho%20%28cropped%29.png",
    statut: "Fiche disponible",
    resume:
      "Synthèse neutre des positions de Delphine Batho et de Génération Écologie, avec sources et état des procédures.",
    to: "/candidats/delphine-batho",
  },
  {
    nom: "Clémentine Autain",
    parti: "L'APRÈS",
    partiIcone: "i-lucide-leaf",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cl%C3%A9mentine%20Autain%2C%202017%20%28cropped%29.jpg",
    statut: "Fiche disponible",
    resume:
      "Synthèse neutre des positions de Clémentine Autain et de L'APRÈS, avec sources et état des procédures.",
    to: "/candidats/clementine-autain",
  },
  {
    nom: "Fabien Roussel",
    parti: "Parti communiste français",
    partiIcone: "i-lucide-hammer",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Roussel%20Fabien%201.jpg",
    statut: "Fiche disponible",
    resume:
      "Synthèse neutre des positions de Fabien Roussel et du Parti communiste français, avec sources et état des procédures.",
    to: "/candidats/fabien-roussel",
  },
  {
    nom: "Yannick Jadot",
    parti: "Les Écologistes",
    partiIcone: "i-lucide-leaf",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/20210819_jadot.yannick_5725.jpg",
    statut: "Fiche disponible",
    resume:
      "Synthèse neutre des positions de Yannick Jadot et des Écologistes, avec sources et état des procédures.",
    to: "/candidats/yannick-jadot",
  },
  {
    nom: "Sandrine Rousseau",
    parti: "Les Écologistes",
    partiIcone: "i-lucide-leaf",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sandrine%20Rousseau%2020210819%20%28cropped%29.jpg",
    statut: "Fiche disponible",
    resume:
      "Synthèse neutre des positions de Sandrine Rousseau et des Écologistes, avec sources et état des procédures.",
    to: "/candidats/sandrine-rousseau",
  },
  {
    nom: "Dominique de Villepin",
    parti: "La France humaniste",
    partiIcone: "i-lucide-landmark",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Dominique%20de%20Villepin%20en%202026.jpg",
    statut: "Fiche disponible",
    resume:
      "Synthèse neutre des positions de Dominique de Villepin et de La France humaniste, avec sources et état des procédures.",
    to: "/candidats/dominique-de-villepin",
  },
  {
    nom: "Éric Zemmour",
    parti: "Reconquête",
    partiIcone: "i-lucide-flag",
    photo:
      "https://commons.wikimedia.org/wiki/Special:FilePath/%C3%89ric%20Zemmour.jpg",
    statut: "Fiche disponible",
    resume:
      "Synthèse neutre des positions d'Éric Zemmour et de Reconquête, avec sources et état des procédures.",
    to: "/candidats/eric-zemmour",
  },
];

function melangerCandidats<T>(liste: T[]): T[] {
  const copie = [...liste];

  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const valeurI = copie[i]!;
    copie[i] = copie[j]!;
    copie[j] = valeurI;
  }

  return copie;
}

const candidatsAleatoires = useState("candidats-aleatoires", () =>
  melangerCandidats(candidats),
);

const recherche = ref("");

function normaliserTexte(texte: string) {
  return texte
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}

const candidatsFiltres = computed(() => {
  const terme = normaliserTexte(recherche.value.trim());

  if (!terme) {
    return candidatsAleatoires.value;
  }

  return candidatsAleatoires.value.filter((candidat) =>
    normaliserTexte(candidat.nom).includes(terme),
  );
});

useSeoMeta({
  title: "Présidentielle française 2027 : candidats et programmes",
  description:
    "Comparez les candidats à la présidentielle française et consultez des synthèses de leurs programmes, sources et procédures.",
});

function remelangerCandidats() {
  candidatsAleatoires.value = melangerCandidats(candidats);
}
</script>

<template>
  <UContainer class="py-12 space-y-10">
    <UCard
      :ui="{
        root: 'border-2 border-gray-900 shadow-[6px_6px_0_0_rgba(11,18,32,1)]',
      }"
    >
      <template #header>
        <div class="space-y-4">
          <UBadge
            color="primary"
            variant="solid"
            class="bg-red-600 text-white hover:bg-red-700 px-3 py-1 text-xs"
          >
            Présidentielle française · 2027
          </UBadge>
          <div class="flex items-center gap-3">
            <FrLogo size="lg" />
            <h1
              class="text-4xl font-black tracking-tighter sm:text-5xl uppercase leading-[0.95]"
            >
              Candidats <span class="text-red-600">&</span> programmes
            </h1>
          </div>

          <p class="text-base font-medium text-gray-700 max-w-2xl">
            Cette application présente les candidats à la future élection
            présidentielle et synthétise leurs positions de manière claire, en
            français.
          </p>
        </div>
      </template>

      <UAlert
        color="info"
        variant="soft"
        icon="i-lucide-triangle-alert"
        description=""
      >
        <template #description>
          Votez pour un candidat, pour le meilleur et pour le pire, vous serez
          déçu quoi qu'il arrive 😎<br />Cliquez sur la fiche d'un candidat pour
          voir son programme (ou ce qui s'en approche), les procédures et
          potentielles condamnations.
        </template>
      </UAlert>

      <div class="mt-4">
        <UButton to="/pour-qui-voter" icon="i-lucide-compass" variant="outline">
          Voir la page "Pour qui voter ?"
        </UButton>
      </div>
    </UCard>

    <section class="space-y-4">
      <div
        class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div class="flex items-center gap-3">
          <h2 class="text-xl font-semibold">Liste des candidats</h2>
          <UButton
            size="xs"
            variant="subtle"
            icon="i-lucide-shuffle"
            class="bg-red-500 text-white hover:bg-red-600"
            @click="remelangerCandidats"
          >
            Mélanger
          </UButton>
        </div>
        <UBadge color="neutral" variant="outline">
          {{ candidatsFiltres.length }} / {{ candidats.length }} candidat{{
            candidats.length > 1 ? "s" : ""
          }}
        </UBadge>
      </div>

      <UInput
        v-model="recherche"
        icon="i-lucide-search"
        placeholder="Rechercher par nom de candidat…"
        size="lg"
        :ui="{ root: 'w-full' }"
      >
        <template v-if="recherche" #trailing>
          <UButton
            color="neutral"
            variant="link"
            icon="i-lucide-x"
            size="xs"
            aria-label="Effacer la recherche"
            @click="recherche = ''"
          />
        </template>
      </UInput>

      <p
        v-if="recherche.trim() && candidatsFiltres.length === 0"
        class="rounded-lg border border-dashed border-gray-300 px-4 py-8 text-center text-sm text-muted"
      >
        Aucun candidat ne correspond à « {{ recherche.trim() }} ».
      </p>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <UCard
          v-for="candidat in candidatsFiltres"
          :key="candidat.to"
          :ui="{ body: 'space-y-4' }"
        >
          <div class="space-y-2">
            <div class="flex items-start justify-between gap-3">
              <div class="flex items-center gap-3">
                <UAvatar :src="candidat.photo" :alt="candidat.nom" size="lg" />
                <h3 class="text-lg font-semibold">
                  {{ candidat.nom }}
                </h3>
              </div>
              <UBadge color="neutral" variant="subtle">
                <UIcon :name="candidat.partiIcone" class="mr-1" />
                {{ candidat.parti }}
              </UBadge>
            </div>
            <p class="text-sm text-muted">
              {{ candidat.resume }}
            </p>
          </div>

          <div class="flex items-center justify-between gap-3">
            <UButton
              :to="candidat.to"
              class="bg-blue-900 text-white hover:bg-blue-800"
              trailing-icon="i-lucide-arrow-right"
            >
              Ouvrir la fiche
            </UButton>
          </div>
        </UCard>
      </div>
    </section>
  </UContainer>
</template>
