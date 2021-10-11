import Accueil from '../components/Accueil'
import Login from '../components/Login'
import CreateThread from '../components/CreateThread'

export default [
    {path: '/', component: Login},
    {path: '/accueil', component: Accueil},
    {path: '/accueil/create', component: CreateThread},
]