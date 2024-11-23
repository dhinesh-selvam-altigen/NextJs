"use client"
import React, { useState } from 'react';
import './Movies.css';
import toast from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';

const Movies = () => {

const [movies, setMovies] = useState([]);
const [isLoading, setIsLoading] = useState(false);


const getAllmovies = async () => {
    try {
        setIsLoading(true);
        const response = await axios.get('http://localhost:5000/api/movies');
        setMovies(response.data);
        toast.success('Movies fetched successfully!')
        setIsLoading(false);
    } catch (error) {
        setIsLoading(false);
        console.error('Error fetching movies:', error);
        toast.error('Error fetching movies')
    }
};

    return (
        <div className="movies-container">
            <div className="button-container" style={{ 
                gap: '30px', 
                display: 'flex', 
                justifyContent: 'center',
                margin: '20px 0'
            }}>
                <button
                    className="action-button fetch-button"
                    onClick={getAllmovies}
                    style={{
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        padding: '12px 24px',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
                >
                    <span className="button-icon" style={{ fontSize: '20px' }}>📋</span>
                    Get All Movies
                </button>
                <button
                    className="action-button create-button"
                    style={{
                        backgroundColor: '#2196F3',
                        color: 'white',
                        padding: '12px 24px',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#1976D2'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#2196F3'}
                >
                    <span className="button-icon" style={{ fontSize: '20px' }}>✨</span>
                    Create Movie
                </button>
            </div>

            <h2>Movies List</h2>
            <table className="movies-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Year</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? (
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>
                                <ClipLoader color="#36d7b7" loading={true} size={50} />
                            </td>
                        </tr>
                    ) : (
                        movies.map((movie, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                                <td>{movie.title}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.year}</td>
                                <td>{movie.rating}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Movies;
