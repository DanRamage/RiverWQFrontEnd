import SplashPage from '@/components/splash_page'
import OLMapPage from '@/components/ol_map_page'
import StationGraph from '@/components/station_graph'
import ErrorPage from '@/components/error_page'
import AboutPage from '@/components/about_page'
import StationPage from '@/components/station_popup'

const routes = [
        {
            path: '/',
            name: 'SplashPage',
            component: SplashPage
        },
        {
            path: '/About',
            name: 'AboutPage',
            component: AboutPage
        },
        {
            path: '/:location/map',
            name: 'OLMapPage',
            component: OLMapPage,
            children: [
                {
                    path: 'bacteriagraph/:site_id',
                    component: StationGraph,
                    name: 'StationGraph',
                    props: true
                },
                {
                    path: 'stationinfo/:site_id',
                    component: StationPage,
                    name: 'StationPage',
                    props: true
                }
            ]

        },
        {
            path: '/page error',
            name: '404',
            component: ErrorPage
        }

    ];

export default routes
