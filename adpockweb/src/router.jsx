
import { createBrowserRouter } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import Pokemons from "../src/features/pokemons/pages/Pokemons"
import PokemonDetail from "../src/features/pokemons/pages/PokemonDetail"
import Blog from "../src/features/posts/pages/Blog"
import PostDetail from "../src/features/posts/pages/PostDetail"

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
            },
            {
                path: '/blog/:postId/comentarios',
                element: <PostDetail />
            }
        ]
    }
])
export default router