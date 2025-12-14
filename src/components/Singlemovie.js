import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

export default function SingleMovie() {

    let [movie, setMovie] = useState(null)
    let [cast, setCast] = useState([])
    let { movieid } = useParams()

    // Fetch Movie Details
    useEffect(() => {
        let Api_key = 'f6866ecb64af726c47ad422d7b08e283'

        axios.get(`https://api.themoviedb.org/3/movie/${movieid}?api_key=${Api_key}&language=en-US`)
            .then(res => {
                setMovie(res.data)
            })
            .catch(err => console.log(err))

    }, [movieid])


    // Fetch Movie Cast
    useEffect(() => {
        let Api_key = 'f6866ecb64af726c47ad422d7b08e283'

        axios.get(`https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=${Api_key}&language=en-US`)
            .then(res => {
                setCast(res.data.cast)
            })
            .catch(err => console.log(err))

    }, [movieid])


    return (
        <div className="container py-4">

            {movie && (
                <>
                    {/* Movie Section */}
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                className="img-fluid rounded-4 shadow movie-img"
                                alt={movie.title}
                            />
                        </div>

                        <div className="col-md-8">
                            <h1 className="fw-bold">{movie.title}</h1>
                            <p className="text-muted">
                                 Rating: <b>{movie.vote_average}/10</b>
                            </p>
                            <p><b>Release Date:</b> {movie.release_date}</p>
                            <p><b>Genres:</b> {movie.genres?.map(g => g.name).join(", ")}</p>

                            <h5 className="fw-semibold mt-3"> Overview</h5>
                            <p>{movie.overview}</p>
                        </div>
                    </div>

                    {/* Cast Section */}
                    <h3 className="mt-5 fw-bold"> Cast</h3>
                    <div className="row mt-3 g-3">
                        {cast.slice(0, 12).map(actor => (
                            <div className="col-6 col-md-3 col-lg-2 text-center" key={actor.id}>
                                <div className="cast-card p-2 rounded-4 shadow-sm">
                                    <img
                                        src={
                                            actor.profile_path
                                                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                                                : "https://via.placeholder.com/200x300?text=No+Image"
                                        }
                                        className="img-fluid rounded-4 cast-img"
                                        alt={actor.name}
                                    />
                                    <p className="mt-2 mb-0 fw-semibold small">{actor.name}</p>
                                    <p className="text-muted small">{actor.character}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

        </div>
    )
}
