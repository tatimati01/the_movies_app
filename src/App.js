import {Routes, Route} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import GenresPage from "./pages/GenresPage/GenresPage";
import MoviesOfGenre from "./components/Genres/MoviesOfGenre/MoviesOfGenre";
import MovieInfoPage from "./pages/MovieInfoPage/MovieInfoPage";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/'} element={<HomePage/>}>
                        <Route path={':genreName'} element={<MoviesOfGenre/>}/>
                        <Route path={':movieId'} element={<MovieInfoPage/>}/>
                    </Route>
                    <Route path={'movies'} element={<MoviesPage/>}>
                        <Route path={':movieId'} element={<MovieInfoPage/>}/>
                    </Route>
                    <Route path={'genres'} element={<GenresPage/>}>
                        <Route path={':genreName'} element={<MoviesOfGenre/>}>
                            <Route path={':movieId'} element={<MovieInfoPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
