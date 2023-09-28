/*
1 - inserire elementi HTML dentro #App
2 - creare su JS const { createApp } e struttura Vue
3 - configuro la img con vue 
4 - nascondere le slide e farle apparire al aumento o meno del contatore con classe hide
5 - @click counter
6 - funzione showImage


*/

const { createApp } = Vue;

createApp({
  
  data() {
    return {
      
      // inserisco gli l'array di oggetti (slides)
      slides: [
      {
        image: '01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
      },
      {
        image: '02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
      },
      {
        image: '03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
      },
      {
        image: '04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
      }, 
      {
        image: '05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
      },
    ],


    isNext: true,
    currentImageIndex: 0 // tengo traccia dell'indice dell'immagine grande
    
  }
},


methods: {
  
  nextPrev(isNext) {
    if (isNext) {
      this.currentImageIndex++;
      console.log('avanti');
    } else {
      this.currentImageIndex--;
      console.log('indietro');
    }
  
    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.slides.length - 1;
    } else if (this.currentImageIndex === this.slides.length) {
      this.currentImageIndex = 0;
    }
  },
  
  
  showImage(index) {
    this.currentImageIndex = index;
  },
  

  mounted() {
    console.log(this.slides);
  }
}


}).mount('#app');

