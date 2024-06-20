<script setup>
// Définir les métadonnées de la page avec un layout personnalisé
definePageMeta({
  layout: "custom",
});

// On récupére les marques de voiture depuis un composable appelé useCards
const { makes } = useCards();

// On défini l'état initial des informations de l'annonce
const info = useState("adInfo", () => {
  return {
    make: "",          
    model: "",         
    year: "",          
    miles: "",        
    price: "", 
    city: "",   
    seats: "",     
    features: "",  
    description: "",  
    image: null,      
  };
});

// Fonction pour mettre à jour les informations de l'annonce lorsque l'utilisateur change une entrée
const onChangeInput = (data, name) => {
  info.value[name] = data;
};

// On défini les champs de saisie avec leurs propriétés respectives
const inputs = [
  {
    id: 1,
    title: "Model *",         
    name: "model",            
    placeholder: "Civic",     
  },
  {
    id: 2,
    title: "Year *",
    name: "year",
    placeholder: "2019",
  },
  {
    id: 3,
    title: "Miles *",
    name: "miles",
    placeholder: "10000",
  },
  {
    id: 4,
    title: "City *",
    name: "city",
    placeholder: "Austin",
  },
  {
    id: 5,
    title: "Number of Seats *",
    name: "seats",
    placeholder: "5",
  },
  {
    id: 6,
    title: "Features *",
    name: "features",
    placeholder: "Leather Interior, No Accidents",
  },
];
</script>

<template>
  <div>
    <div class="mt-24">
      <h1 class="text-6xl">Create a New Listing</h1>
    </div>
    <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
      <!-- Sélecteur pour choisir la marque de la voiture -->
      <CarAdSelect
        title="Make *"
        :options="makes"
        name="make"
        @change-input="onChangeInput"
      />
      <!-- Champs de saisie pour les autres informations de la voiture -->
      <CarAdInput
        v-for="input in inputs"
        :key="input.id"
        :title="input.title"
        :name="input.name"
        :placeholder="input.placeholder"
        @change-input="onChangeInput"
      />
      <!-- Champ de saisie pour la description de la voiture -->
      <CarAdTextarea
        title="Description *"
        name="description"
        placeholder=""
        @change-input="onChangeInput"
      />
      <!-- Champ pour télécharger une image de la voiture -->
      <CarAdImage @change-input="onChangeInput" />
    </div>
  </div>
</template>
