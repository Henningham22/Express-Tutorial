import {useState} from 'react';
import axios from 'axios';

const FilmReq = () => {
    const [data,setData] = useState("");
    const [ApiKey, setApiKey] = useState("");
    const [filmTitle, setFilmTitle] = useState("");

    const updateApiKey = (e) => {
        e.preventDefault();
        setFilmTitle(e.target.value);
    }
    const updateTitle = (e) =>{
        e.preventDefault();
        setFilmTitle(e.target.value);
    }

    const makeRequest = (e) => {
        axios.get("http://www.omdbapi.com/?apikey=" + ApiKey + "&t=" + filmTitle)
        .then(response => {
            console.log(response.data);
            setData(response.data);
        });
    };

    return (
        <>
        <div>
            <h2> FilmRequest.js</h2>
            <p>Enter your API key for OMDB Here</p>
            <input type="text" onChange={(e) => updateApiKey(e)} />
            <p>Enter the name of the film you are searching for Here </p>
            <input type="text" onChange={(e) => updateTitle(e)} />
            <p>
                Do not click this button until the fields above are correctly filled
            </p>
            <button onClick ={(e) => makeRequest (e)}>Click Me</button>

            <h4>{data.title}</h4>
            <h4>{data.Year}</h4>
            <h4>{data.Rated}</h4>
            <h4>{data.Genre}</h4>
            <h4>{data.Plot}</h4>
            <img src ={data.poster} alt="The Poster"></img>
        </div>
        </>
    );
}

export default FilmReq;