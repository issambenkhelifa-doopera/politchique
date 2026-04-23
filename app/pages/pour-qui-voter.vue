<script setup lang="ts">
type Theme =
  | "economie"
  | "immigration"
  | "ecologie"
  | "institutions"
  | "europe"
  | "securite"
  | "social";

type Candidate = {
  id: string;
  name: string;
  party: string;
  photo: string;
};

type Question = {
  id: string;
  theme: Theme;
  text: string;
  positions: Record<string, number>;
  sources: Record<string, { label: string; url: string }>;
};

const themes: Array<{ id: Theme; label: string }> = [
  { id: "economie", label: "Economie / fiscalite" },
  { id: "immigration", label: "Immigration / asile" },
  { id: "ecologie", label: "Ecologie / energie" },
  { id: "institutions", label: "Institutions" },
  { id: "europe", label: "Europe" },
  { id: "securite", label: "Securite / justice" },
  { id: "social", label: "Social / travail" },
];

const candidates: Candidate[] = [
  {
    id: "edouard-philippe",
    name: "Edouard Philippe",
    party: "Horizons",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/%C3%89douard_Philippe_2017_%28cropped%29.jpg/440px-%C3%89douard_Philippe_2017_%28cropped%29.jpg",
  },
  {
    id: "marine-le-pen",
    name: "Marine Le Pen",
    party: "Rassemblement National",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Marine_Le_Pen_2017_%28cropped%29.jpg/440px-Marine_Le_Pen_2017_%28cropped%29.jpg",
  },
];

const questions: Question[] = [
  {
    id: "q1",
    theme: "economie",
    text: "L'Etat doit continuer les reformes structurelles pour reduire durablement la depense publique.",
    positions: { "edouard-philippe": 2, "marine-le-pen": 0 },
    sources: {
      "edouard-philippe": {
        label: "Horizons - Le Manifeste",
        url: "https://horizonsleparti.fr/le-manifeste/",
      },
      "marine-le-pen": {
        label: "RN - 22 mesures",
        url: "https://rassemblementnational.fr/22-mesures",
      },
    },
  },
  {
    id: "q2",
    theme: "social",
    text: "La priorite doit etre la revalorisation du travail et du merite.",
    positions: { "edouard-philippe": 2, "marine-le-pen": 1 },
    sources: {
      "edouard-philippe": {
        label: "Horizons - Le Manifeste",
        url: "https://horizonsleparti.fr/le-manifeste/",
      },
      "marine-le-pen": {
        label: "RN - Programme 2024 (PDF)",
        url: "https://rassemblementnational.fr/documents/202406-programme.pdf",
      },
    },
  },
  {
    id: "q3",
    theme: "immigration",
    text: "Il faut durcir fortement les regles d'immigration et de regroupement familial.",
    positions: { "edouard-philippe": 0, "marine-le-pen": 2 },
    sources: {
      "edouard-philippe": {
        label: "Horizons - Le Manifeste",
        url: "https://horizonsleparti.fr/le-manifeste/",
      },
      "marine-le-pen": {
        label: "RN - 22 mesures",
        url: "https://rassemblementnational.fr/22-mesures",
      },
    },
  },
  {
    id: "q4",
    theme: "securite",
    text: "Les politiques de securite et de justice doivent etre significativement renforcees.",
    positions: { "edouard-philippe": 2, "marine-le-pen": 2 },
    sources: {
      "edouard-philippe": {
        label: "Horizons - Le Manifeste",
        url: "https://horizonsleparti.fr/le-manifeste/",
      },
      "marine-le-pen": {
        label: "Profession de foi 2022 (CNCCEP)",
        url: "https://www.cnccep.fr/pdfs/Candidat-06-Marine-Le-Pen-Declaration-accessible.pdf",
      },
    },
  },
  {
    id: "q5",
    theme: "ecologie",
    text: "La transition ecologique doit combiner decarbonation, innovation et pragmatisme industriel.",
    positions: { "edouard-philippe": 2, "marine-le-pen": 0 },
    sources: {
      "edouard-philippe": {
        label: "Horizons - Le Manifeste",
        url: "https://horizonsleparti.fr/le-manifeste/",
      },
      "marine-le-pen": {
        label: "RN - Programme 2024 (PDF)",
        url: "https://rassemblementnational.fr/documents/202406-programme.pdf",
      },
    },
  },
  {
    id: "q6",
    theme: "institutions",
    text: "La decentralisation et la clarification des competences doivent etre renforcees.",
    positions: { "edouard-philippe": 2, "marine-le-pen": 0 },
    sources: {
      "edouard-philippe": {
        label: "Horizons - Le Manifeste",
        url: "https://horizonsleparti.fr/le-manifeste/",
      },
      "marine-le-pen": {
        label: "Profession de foi 2022 (CNCCEP)",
        url: "https://www.cnccep.fr/pdfs/Candidat-06-Marine-Le-Pen-Declaration-accessible.pdf",
      },
    },
  },
  {
    id: "q7",
    theme: "europe",
    text: "La France doit approfondir son engagement europeen tout en defendant la subsidiarite.",
    positions: { "edouard-philippe": 2, "marine-le-pen": -1 },
    sources: {
      "edouard-philippe": {
        label: "Horizons - Le Manifeste",
        url: "https://horizonsleparti.fr/le-manifeste/",
      },
      "marine-le-pen": {
        label: "RN - Programme 2024 (PDF)",
        url: "https://rassemblementnational.fr/documents/202406-programme.pdf",
      },
    },
  },
  {
    id: "q8",
    theme: "social",
    text: "Les politiques sociales doivent prioritairement proteger les nationaux.",
    positions: { "edouard-philippe": -1, "marine-le-pen": 2 },
    sources: {
      "edouard-philippe": {
        label: "Horizons - Le Manifeste",
        url: "https://horizonsleparti.fr/le-manifeste/",
      },
      "marine-le-pen": {
        label: "RN - 22 mesures",
        url: "https://rassemblementnational.fr/22-mesures",
      },
    },
  },
  {
    id: "q9",
    theme: "economie",
    text: "Les baisses de taxes ciblees (energie, consommation) doivent etre prioritaires.",
    positions: { "edouard-philippe": -1, "marine-le-pen": 2 },
    sources: {
      "edouard-philippe": {
        label: "Horizons - Le Manifeste",
        url: "https://horizonsleparti.fr/le-manifeste/",
      },
      "marine-le-pen": {
        label: "RN - 22 mesures",
        url: "https://rassemblementnational.fr/22-mesures",
      },
    },
  },
  {
    id: "q10",
    theme: "institutions",
    text: "L'action publique doit avant tout se concentrer sur les missions regaliennes.",
    positions: { "edouard-philippe": 1, "marine-le-pen": 2 },
    sources: {
      "edouard-philippe": {
        label: "Horizons - Le Manifeste",
        url: "https://horizonsleparti.fr/le-manifeste/",
      },
      "marine-le-pen": {
        label: "Profession de foi 2022 (CNCCEP)",
        url: "https://www.cnccep.fr/pdfs/Candidat-06-Marine-Le-Pen-Declaration-accessible.pdf",
      },
    },
  },
];

const likertOptions = [
  { value: -2, label: "Pas du tout d'accord" },
  { value: -1, label: "Plutot pas d'accord" },
  { value: 0, label: "Neutre / je ne sais pas" },
  { value: 1, label: "Plutot d'accord" },
  { value: 2, label: "Tout a fait d'accord" },
];

const selectedPriorityThemes = ref<Theme[]>([]);
const answers = reactive<Record<string, number>>({});
const currentIndex = ref(0);
const hasCalculated = ref(false);

const currentQuestion = computed(
  () => questions[currentIndex.value] ?? questions[0]!,
);
const answeredCount = computed(
  () => questions.filter((q) => typeof answers[q.id] === "number").length,
);
const progress = computed(() => (answeredCount.value / questions.length) * 100);
const allAnswered = computed(() => answeredCount.value === questions.length);

const isPriorityThemeDisabled = (theme: Theme) =>
  selectedPriorityThemes.value.length >= 3 &&
  !selectedPriorityThemes.value.includes(theme);

const togglePriorityTheme = (theme: Theme) => {
  if (selectedPriorityThemes.value.includes(theme)) {
    selectedPriorityThemes.value = selectedPriorityThemes.value.filter(
      (t) => t !== theme,
    );
    return;
  }
  if (selectedPriorityThemes.value.length < 3) {
    selectedPriorityThemes.value.push(theme);
  }
};

const getWeight = (theme: Theme) =>
  selectedPriorityThemes.value.includes(theme) ? 1.5 : 1;

const getLabelForValue = (value: number) =>
  likertOptions.find((o) => o.value === value)?.label ?? "Neutre";

const results = computed(() => {
  const computedResults = candidates.map((candidate) => {
    let weightedDistanceSum = 0;
    let weightedMaxDistance = 0;

    const perQuestion = questions.map((question) => {
      const userValue = answers[question.id] ?? 0;
      const candidateValue = question.positions[candidate.id] ?? 0;
      const weight = getWeight(question.theme);
      const distance = Math.abs(userValue - candidateValue);

      weightedDistanceSum += distance * weight;
      weightedMaxDistance += 4 * weight;

      return {
        question,
        userValue,
        candidateValue,
        distance,
        source: question.sources[candidate.id] ?? {
          label: "Source publique",
          url: "#",
        },
      };
    });

    const proximity =
      weightedMaxDistance === 0
        ? 0
        : Math.round((1 - weightedDistanceSum / weightedMaxDistance) * 100);

    const bestMatches = [...perQuestion]
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5);
    const divergences = [...perQuestion]
      .sort((a, b) => b.distance - a.distance)
      .slice(0, 3);

    return {
      candidate,
      proximity,
      bestMatches,
      divergences,
    };
  });

  return computedResults.sort((a, b) => b.proximity - a.proximity);
});

const topMatches = computed(() => results.value.slice(0, 3));

const userMarkedThemes = computed(() => {
  const byTheme = themes
    .map((theme) => {
      const themeQuestions = questions.filter((q) => q.theme === theme.id);
      const avg =
        themeQuestions.reduce(
          (acc, q) => acc + Math.abs(answers[q.id] ?? 0),
          0,
        ) / themeQuestions.length;

      return { theme, avg };
    })
    .sort((a, b) => b.avg - a.avg);

  return byTheme.slice(0, 3);
});

const nextQuestion = () => {
  if (currentIndex.value < questions.length - 1) {
    currentIndex.value += 1;
  }
};

const previousQuestion = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
  }
};

const calculateResults = () => {
  if (!allAnswered.value) {
    return;
  }
  hasCalculated.value = true;
};

const restartQuiz = () => {
  for (const question of questions) {
    delete answers[question.id];
  }
  selectedPriorityThemes.value = [];
  currentIndex.value = 0;
  hasCalculated.value = false;
};

useSeoMeta({
  title: "Pour qui voter ? Quiz de proximite politique",
  description:
    "Quiz de proximite politique : comparez vos reponses aux positions publiques des candidats avec methode transparente et sources.",
});
</script>

<template>
  <UContainer class="py-10 space-y-8">
    <UCard>
      <template #header>
        <div class="space-y-3">
          <div class="flex items-center justify-between gap-3">
            <UBadge color="primary" variant="soft">Boussole electorale</UBadge>
            <UButton
              to="/"
              icon="i-lucide-home"
              class="bg-blue-900 text-white hover:bg-blue-800"
            >
              Accueil
            </UButton>
          </div>
          <h1 class="text-2xl font-bold tracking-tight sm:text-3xl">
            Pour qui voter ? (quiz de proximite)
          </h1>
          <p class="text-sm text-muted">
            Ce quiz mesure une proximite avec des positions publiques et ne
            donne pas de consigne de vote.
          </p>
        </div>
      </template>

      <UAlert
        color="info"
        variant="soft"
        icon="i-lucide-shield-alert"
        title="Neutralite et transparence"
        description="Resultat = proximite avec des positions publiques sourcees. Ce quiz n'est pas un sondage d'intentions de vote."
      />
    </UCard>

    <UCard>
      <template #header>
        <h2 class="text-lg font-semibold">
          Etape 1 - Choisis jusqu'a 3 themes prioritaires
        </h2>
      </template>

      <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <label
          v-for="theme in themes"
          :key="theme.id"
          class="flex items-center gap-2 rounded border border-gray-200 px-3 py-2 text-sm"
        >
          <input
            type="checkbox"
            class="accent-red-600"
            :checked="selectedPriorityThemes.includes(theme.id)"
            :disabled="isPriorityThemeDisabled(theme.id)"
            @change="togglePriorityTheme(theme.id)"
          />
          <span>{{ theme.label }}</span>
        </label>
      </div>

      <p class="mt-3 text-xs text-muted">
        Themes prioritaires selectionnes : {{ selectedPriorityThemes.length }}/3
        (pondere x1.5)
      </p>
    </UCard>

    <UCard>
      <template #header>
        <div class="space-y-2">
          <div class="flex items-center justify-between gap-3">
            <h2 class="text-lg font-semibold">
              Etape 2 - Reponds aux questions
            </h2>
            <UBadge color="neutral" variant="outline">
              {{ currentIndex + 1 }} / {{ questions.length }}
            </UBadge>
          </div>
          <UProgress :model-value="progress" />
        </div>
      </template>

      <div class="space-y-4">
        <p class="font-medium">
          {{ currentQuestion.text }}
        </p>
        <div class="space-y-2">
          <label
            v-for="option in likertOptions"
            :key="option.value"
            class="flex cursor-pointer items-center gap-2 rounded border border-gray-200 px-3 py-2 text-sm"
          >
            <input
              v-model.number="answers[currentQuestion.id]"
              type="radio"
              class="accent-red-600"
              :name="currentQuestion.id"
              :value="option.value"
            />
            <span>{{ option.label }}</span>
          </label>
        </div>
      </div>

      <template #footer>
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="flex gap-2">
            <UButton
              icon="i-lucide-arrow-left"
              variant="outline"
              :disabled="currentIndex === 0"
              @click="previousQuestion"
            >
              Precedent
            </UButton>
            <UButton
              icon="i-lucide-arrow-right"
              trailing
              variant="outline"
              :disabled="currentIndex === questions.length - 1"
              @click="nextQuestion"
            >
              Suivant
            </UButton>
          </div>

          <UButton
            icon="i-lucide-calculator"
            class="bg-blue-900 text-white hover:bg-blue-800"
            :disabled="!allAnswered"
            @click="calculateResults"
          >
            Calculer mon resultat
          </UButton>
        </div>
      </template>
    </UCard>

    <UCard v-if="hasCalculated">
      <template #header>
        <div class="flex items-center justify-between gap-3">
          <h2 class="text-lg font-semibold">Resultats (proximite)</h2>
          <UButton
            icon="i-lucide-rotate-ccw"
            variant="outline"
            @click="restartQuiz"
          >
            Recommencer
          </UButton>
        </div>
      </template>

      <div class="space-y-6">
        <div>
          <h3 class="mb-3 font-semibold">Top proximites</h3>
          <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <UCard v-for="entry in topMatches" :key="entry.candidate.id">
              <div class="flex items-center gap-3">
                <UAvatar
                  :src="entry.candidate.photo"
                  :alt="entry.candidate.name"
                  size="lg"
                />
                <div>
                  <p class="font-semibold">{{ entry.candidate.name }}</p>
                  <p class="text-xs text-muted">{{ entry.candidate.party }}</p>
                </div>
              </div>
              <p class="mt-3 text-sm">
                Proximite estimee :
                <strong>{{ entry.proximity }}%</strong>
              </p>
            </UCard>
          </div>
        </div>

        <div>
          <h3 class="mb-2 font-semibold">
            Themes ou tes reponses sont les plus marquees
          </h3>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="entry in userMarkedThemes"
              :key="entry.theme.id"
              color="neutral"
              variant="subtle"
            >
              {{ entry.theme.label }}
            </UBadge>
          </div>
        </div>

        <div v-if="results[0]">
          <h3 class="mb-2 font-semibold">
            Pourquoi tu matches avec {{ results[0].candidate.name }}
          </h3>
          <ul class="list-disc space-y-2 pl-5 text-sm">
            <li v-for="item in results[0].bestMatches" :key="item.question.id">
              {{ item.question.text }} (toi:
              {{ getLabelForValue(item.userValue) }},
              {{ results[0].candidate.name }}:
              {{ getLabelForValue(item.candidateValue) }}) -
              <a
                :href="item.source.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                source
              </a>
            </li>
          </ul>
        </div>

        <div v-if="results[0]">
          <h3 class="mb-2 font-semibold">Points de divergence principaux</h3>
          <ul class="list-disc space-y-2 pl-5 text-sm">
            <li v-for="item in results[0].divergences" :key="item.question.id">
              {{ item.question.text }}
            </li>
          </ul>
        </div>
      </div>
    </UCard>

    <UCard>
      <template #header>
        <h2 class="text-lg font-semibold">Methode et transparence</h2>
      </template>
      <ul class="list-disc space-y-2 pl-5 text-sm">
        <li>
          Questions formulees de facon symetrique, sans injonction de vote.
        </li>
        <li>
          Score base sur la distance entre ta reponse et la position candidate
          (-2 a +2).
        </li>
        <li>Ponderation x1.5 pour tes themes prioritaires (max 3).</li>
        <li>Chaque position est associee a une source consultable.</li>
        <li>
          Le calcul est local au navigateur : aucune donnee identifiante n'est
          demandee.
        </li>
      </ul>
      <template #footer>
        <div class="space-y-2 text-sm">
          <p>Cadre utile (France) :</p>
          <ul class="list-disc space-y-1 pl-5">
            <li>
              <a
                href="https://www.commission-des-sondages.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Commission des sondages
              </a>
            </li>
            <li>
              <a
                href="https://www.elections.interieur.gouv.fr/comprendre-elections/comment-sont-encadrees-campagnes-electorales/grands-principes-encadrant-campagne-electorale"
                target="_blank"
                rel="noopener noreferrer"
              >
                Encadrement des campagnes electorales
              </a>
            </li>
            <li>
              <a
                href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees"
                target="_blank"
                rel="noopener noreferrer"
              >
                CNIL - RGPD
              </a>
            </li>
          </ul>
        </div>
      </template>
    </UCard>
  </UContainer>
</template>
