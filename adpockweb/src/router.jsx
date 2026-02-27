
import { createBrowserRouter } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Pokemons from "./pages/Pokemons"
import PokemonDetail from "./pages/PokemonDetail"
import Blog from "./pages/Blog"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/pokemones',
                element: <Pokemons />,
            },
            {
                path: '/pokemon/:name',
                element: <PokemonDetail />
            },
            {
                path: '/blog',
                element: <Blog />
            }
        ]
    }
])
export default router