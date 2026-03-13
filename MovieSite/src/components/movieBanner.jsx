import { movies } from '../../data/movies.js'

export default function MovieBanner() {

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Movie Page</h1>
            <div style={{maxWidth: '1000px'}}>
                <img src={movies.bannerImage} alt ={movies.title} style={{width: '100%', height: 'auto', display: 'block'}}/>
            </div>
            <h2>{movies.title}</h2>
        </div>
    )
}