/*
Vue Slider
Realizzare uno slider

Inserire 2 frecce a sinistra e a destra dell'immagine momentanea dello slider che permettono di andare avanti e indietro tra le immagini

BONUS:
    -nello slider ci sono dei pallini in basso al click dei pallini cambia l'immagine nello slider
    -a ogni 3 sec l'immagine cambia automaticamente senza nessun click da parte nostra
*/

var app = new Vue ({
    el: '#root',
    data: {
        image: ['./assets/img/londra.jpg', './assets/img/milano.jpg', './assets/img/parigi.jpg'],
        indice: 0,
    },
    methods: {
        sliderRight: function(){
            if( this.indice == 2){
                return this.indice = 0;
            }
            else{
                return this.indice++
            }
        },
        sliderLeft: function(){
            if( this.indice == 0){
                return this.indice = 2;
            }
            else{
                return this.indice--
            }
        },
        autoplay(){
            this.autoplay = setInterval(()=>{
              this.sliderRight(true);
            }, 3000)
            console.log("play");
          },
    },
    mounted(){
        console.log("montata");
        this.autoplay();
      },
});