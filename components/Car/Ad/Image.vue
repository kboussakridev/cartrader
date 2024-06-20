<script setup>
// Définir l'état initial pour l'image de la voiture
const image = useState("carImage", () => {
  return {
    preview: null, 
    image: null,   
  };
});

// Définir les événements émis par le composant
const emits = defineEmits(["changeInput"]);

// Fonction appelée lors du téléchargement d'une image
const onImageUpload = (event) => {
  const input = event.target;
  if (input.files) {
    const reader = new FileReader();
    reader.onload = (e) => {
      // Mettre à jour l'aperçu de l'image
      image.value.preview = e.target.result;
    };
    // Stocker le fichier image
    image.value.image = input.files[0];
    // Lire le fichier image pour l'aperçu
    reader.readAsDataURL(input.files[0]);
    // Émettre l'événement pour indiquer le changement d'image
    emits("changeInput", input.files[0], "image");
  }
};
</script>

<template>
  <!-- Conteneur pour le téléchargement d'image -->
  <div class="col-md-5 offset-md-1 mt-2 w-[100%]">
    <!-- Étiquette pour le champ de téléchargement d'image -->
    <label for="" class="text-cyan-500 mb-1 text-sm">Image*</label>
    <!-- Formulaire pour le téléchargement d'image -->
    <form class="mt-2">
      <div class="form-group">
        <div class="relative">
          <!-- Champ de téléchargement de fichier (image) -->
          <input
            type="file"
            accept="image/*"
            class="opacity-0 absolute cursor-pointer"
            @change="onImageUpload"
          />
          <!-- Texte indiquant l'action de navigation de fichiers -->
          <span class="text-green-500 cursor-pointer">Browse File</span>
        </div>
        <!-- Afficher l'aperçu de l'image téléchargée -->
        <div class="border p-2 mt-3 w-56" v-if="image.preview">
          <img :src="image.preview" class="img-fluid" />
        </div>
      </div>
    </form>
  </div>
</template>
