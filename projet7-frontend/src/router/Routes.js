import Accueil from '../components/Accueil'
import Login from '../components/Login'
import CreateThread from '../components/CreateThread'

export default [
    {path: '/', component: Login, name: 'login'},
    {path: '/accueil', component: Accueil, name: 'accueil'},
    {path: '/accueil/create', component: CreateThread},
]