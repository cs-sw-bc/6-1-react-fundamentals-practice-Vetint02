import { movies } from '../../data/movies.js'

export default function MovieDetails() {
    return (
        <div>
            <h2>{movies.year}</h2>
            <details>
                <summary>About Movie</summary>
                {movies.details}
            </details>
        </div>
    )
}