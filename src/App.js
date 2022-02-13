import {Routes, Route} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import GenresPage from "./pages/GenresPage/GenresPage";
import MovieCard from "./components/Movies/MovieCard/MovieCard";
import GenreInfo from "./components/Genres/GenreInfo/GenreInfo";
import MoviesList from "./components/Movies/MoviesList/MoviesList";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}>
                        <Route path={':movieId'} element={<MovieCard/>}>
                            {/*<Route path={''}/>*/}
                        </Route>
                    </Route>
                    <Route path={'genres'} element={<GenresPage/>}>
                        <Route path={':genreId'} element={<GenreInfo/>}>
                            {/*<Route path={'moviesByGenre'} element={<MoviesList/>}/>*/}
                        </Route>
                    </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
