const app = new Vue ({
    el: "#root",
    data: {
        wallpaper: "img/img-1.jpg",
        counter: 0,
        wallpaperArray: [
            "img/img-1.jpg",
            "img/img-2.jpg",
            "img/img-3.jpg",
            "img/img-4.jpg",
        ]
    },

    

    methods: {
        
       changeImagePlus() {
          this.counter ++

          if (this.counter > this.wallpaperArray.length - 1) {
              this.counter = 0
          }

          //console.log(this.counter)

          this.wallpaper = this.wallpaperArray[this.counter]
          this.changeImageRadio()
       },

       changeImageMinus() {
        this.counter --

        if (this.counter < 0) {
            this.counter = this.wallpaperArray.length - 1
        }

        //console.log(this.counter)

        this.wallpaper = this.wallpaperArray[this.counter]
        this.changeImageRadio()
        },

        changeImageRadio() {
            const pallini = document.querySelectorAll("[type='radio']")

            pallini[this.counter].checked = true
        },

        radioClick() {
            const pallini = document.querySelectorAll("[type='radio']")

            pallini.forEach((element, index) => {
                if (element.checked) {
                    this.counter = index
                }
            }) 

            this.wallpaper = this.wallpaperArray[this.counter]
        },

        
    },

    mounted() {
        setInterval(() => {
            this.counter ++

          if (this.counter > this.wallpaperArray.length - 1) {
              this.counter = 0
          }

          //console.log(this.counter)

          this.wallpaper = this.wallpaperArray[this.counter]
          this.changeImageRadio()
        }, 3000);
    }
})

