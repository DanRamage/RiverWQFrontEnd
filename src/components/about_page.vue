<template>
    <div class="wrapper bg-white">
        <SideBar :sidebarActive="sidebarActive">
            <template v-slot:page-title-link>
                Hows the Beach
            </template>
            <template v-slot:page-name>
                About
            </template>
            <template v-slot:body-blurb>
                <p class="text-left">
                    The How’s the Beach initiative will improve informed decision making about recreational
                    use of coastal waters by fostering timely access to accurate water quality data and daily
                    nowcasts of water quality conditions among (or for) resource managers, public health officials,
                    and the general public.
                </p>
            </template>
            <template v-slot:sidebar-navlinks>
                <div>
                    <p class="text-center mt-4">
                        <a href="/" class="text-white card-link font-avenir">
                          <h4>Forecast/Advisory</h4>
                        </a>
                    </p>
                    <p class="text-center mt-4">
                        <a href="/" class="text-white card-link font-avenir"><h4>Bacteria Sources</h4></a>
                    </p>
                    <p class="text-center">
                        <b-dropdown id="locations-droplist" toggle-class="locations_droplist font-avenir" dropright text="Locations" variant="primary">
                            <b-dropdown-item href="/saluda/map">Midlands River</b-dropdown-item>
                        </b-dropdown>
                    </p>
                </div>
            </template>
        </SideBar>
        <div id="content" class="ms-4 mt-4">
            <div v-b-toggle.collapse-1 variant="outline-primary" class="text-blue avenir-font-light">
                <span class="FAQ-text mr-4 font-weight-normal">What is How's the Beach? </span>
                <span class="whatis-opened FAQ-text"><font-awesome-icon :icon="['fas', 'chevron-up']" /></span>
                <span class="whatis-closed FAQ-text"><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
            </div>
            <b-collapse id="collapse-1" class="mt-1">
                <b-card>
                    <p class="card-text text-blue avenir-font  fs-5">
                        How’s the Beach is tool that predicts bacterial conditions in public waters at multiple
                        locations on the east coast of America. It is designed to inform the public of unsafe swimming
                        conditions. How’s the Beach is a joint initiative of University of South Carolina,
                        Southeast Coastal Ocean Observing Regional Association, and the Integration and Application
                        Network at the University of Maryland Center for Environmental Science.
                    </p>
                    <div class="card-text text-blue avenir-font fs-5">Project Partners</div>
                    <div>
                        <div class="row align-items-center">
                        </div>
                    </div>
                </b-card>
            </b-collapse>
            <b-collapse id="collapse-6" class="mt-1">
              <b-card>
                <div class="card-text text-blue avenir-font-light fs-5">
                  Access data via the API. Reference docs can be found <a href="https://devapi.howsthebeach.org/api/v1/docs" target="_blank">here.</a>
                </div>
              </b-card>
            </b-collapse>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import SideBar from '@/components/sidebar'
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    library.add(faChevronRight, faChevronUp)
    Vue.component('font-awesome-icon', FontAwesomeIcon);

    export default {
        name: 'AboutPage',
        components: {SideBar},
        props: [],
        data() {
            return {
                sidebarActive: false
            }
        },
        mounted() {
            console.debug("AboutPage mounted.");
        },
        methods: {
            resizeHandler() {

                for (var i = 0; i < this.mqSelectors.length; i++) {
                    if(this.mqSelectors[i].offsetLeft > 0)
                    {
                        if (this.currMqIdx != i) {
                            this.currMqIdx = i;
                            break;
                        }
                    }
                }
                if(this.currMqIdx < 3)
                {
                    this.sidebarActive = false;
                }

            }
        }
    }

</script>
<style>
    #locations-droplist  > .dropdown-menu {
        background-color: #2d5b92 !important;
    }
    #locations-droplist li > .dropdown-item {
        color: #FFFFFF;
    }
    #locations-droplist li > .dropdown-item:focus, .dropdown-item:hover {
        background-color: #2d5b92;
    }
    .locations_droplist {
        background-color: #2d5b92;
        border-color: #2d5b92;
        font-size: 1.5rem;
    }
</style>
<style scoped>
    #content {
        width: 100%;
        min-height: 100vh;
        transition: all 0.3s;
    }

    .wrapper {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: stretch;
        perspective: 1500px;
    }

    .collapsed > .whatis-opened,
    :not(.collapsed) > .whatis-closed {
        display: none;
    }
    .FAQ-text {
        font-size: 1.75rem;
    }
</style>
