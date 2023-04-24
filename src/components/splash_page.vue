<template>
    <b-container fluid class="background_color h-100">
      <div>
        <b-row>
          <b-col>
            <div class="ml-2 my-auto">
              <img class="swimmer-icon float-left mt-2" src="@/assets/images/swimmer_icon_white.png">
              <h1 class="htb-text display-4 text-center text-white montserat-font">HOW'S THE BEACH?</h1>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="text-white text-center font-italic avenir-font-oblique">Headed to the beach? Use this site
              to see if the water quality is healthy before heading in. Choose a location below to
              explore!</p>
          </b-col>
        </b-row>
      </div>
      <div>
        <b-navbar toggleable="lg" variant="info">

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="navbar-center">
              <b-nav-item to="/saluda/map" exact exact-active-class="active">
                <div class="text-white text-center" @mouseover="site_btn_hover($event, 0)">
                  <span class="montserat-font">Saluda River</span><br><span class="avenir-font-oblique">Saluda River</span>
                </div>
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
        <div class="mt-4">
          <b-carousel
                  id="HTBCarousel"
                  ref="HTBCarousel"
                  v-model="slide"
                  :interval="4000"
                  controls
                  indicators
                  background="#ababab"
                  style="text-shadow: 1px 1px 2px #333;"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
          >
            <b-carousel-slide
              caption="Midlands River"
              text="Midlands River">
              <template v-slot:img>
                <img
                        class="d-block w-100"
                        height="400"
                        src=""
                >
              </template>
            </b-carousel-slide>
          </b-carousel>
        </div>
      </div>
      <footer class="pt-1 my-md-1 pt-md-1">
        <b-row>
          <b-col class="my-auto" sm="1">
            <img src="@/assets/images/swimmer_icon_white.png" alt="" width="24" height="24">
          </b-col>
          <b-col class="my-auto" sm="1">
            <a href="/About">
              <h5 class="montserat-font text-white"><i>LEARN MORE</i></h5>
            </a>
          </b-col>
          <b-col cols="1">
          </b-col>
        </b-row>
      </footer>

    </b-container>
</template>

<script>
  import Vue from 'vue'

  import { CarouselPlugin,LayoutPlugin,NavbarPlugin,NavPlugin } from 'bootstrap-vue';
  Vue.use(CarouselPlugin);
  Vue.use(LayoutPlugin);
  Vue.use(NavbarPlugin);
  Vue.use(NavPlugin);



export default {

  data: function () {
    return {
    }
  },
  name: 'SplashPage',
  methods: {
    loadHome: function(){
      this.$router.push('/')
    },
    site_click (event, site) {
      console.debug('Site: ' + site + ' clicked')
    },
    /*
    This is the hover handler when the user hovers over a site button. We update the site slide.
     */
    site_btn_hover (event, SlideIndex) {
      console.debug('Site: ' + SlideIndex + ' hover')
      this.$refs.HTBCarousel.setSlide(SlideIndex)
    }
  },
  mounted: function() {
    this.loadHome()
  }
}

</script>

<style>
  body, html {
    height: 100%;
    background-color: rgba(0, 61, 126, .1) !important;
  }
  div.carousel-caption h3
  {
    font-family: 'Montserrat';
  }
  div.carousel-caption p {
    font-family: 'Avenir';
    font-weight: lighter;
  }

</style>
<style scoped>
  .bg-info {
    background-color: rgba(0, 61, 126, .1) !important;
  }
  .navbar-nav.navbar-center {
    position: relative;
    left: 50%;
    transform: translatex(-50%);
  }
  .background_color {
    background-color: rgba(0, 61, 126, .85);
  }
  .swimmer-icon {
    width: 50px;
    height: 50px;
    margin-left: 25px;
  }
  .htb-text
  {
    margin-right: 25px;
  }
  .site-button {

  }
  .carousel-img {
    max-height: 400px !important;
  }

</style>
