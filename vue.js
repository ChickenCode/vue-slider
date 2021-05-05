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

          if (this.counter > 3) {
              this.counter = 0
          }

          if (this.counter === 0) {
              this.wallpaper = "img/img-1.jpg"
          }

          else if (this.counter === 1) {
            this.wallpaper = "img/img-2.jpg"
          }

          else if (this.counter === 2) {
            this.wallpaper = "img/img-3.jpg"
          }

          else if (this.counter === 3) {
            this.wallpaper = "img/img-4.jpg"
          }
       },

       changeImageMinus() {
        this.counter --

        if (0 > this.counter) {
            this.counter = 3
        }

        if (this.counter === 0) {
            this.wallpaper = "img/img-1.jpg"
        }

        else if (this.counter === 1) {
          this.wallpaper = "img/img-2.jpg"
        }

        else if (this.counter === 2) {
          this.wallpaper = "img/img-3.jpg"
        }

        else if (this.counter === 3) {
          this.wallpaper = "img/img-4.jpg"
        }
     }
    }
})

