import '../Components.css'
import News from './News';
import React, { useState } from 'react'
import axios from "axios";
import MatchDetails from './MatchDetails';
import { useSelector, useDispatch } from 'react-redux'
import { updateMatchs } from '../../store/matchsSlice';
import { v4 as uuidv4 } from 'uuid'
import '../Components.css'

const SportMain = () => {

    const [data, setData] = useState([])
    // const matchs = useSelector((state) => state.matchs)
    const dispatch = useDispatch()
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/sports.json',
        params: { q: 'London' },
        headers: {
            'X-RapidAPI-Key': '7229e0b679msh3550ceb705b2a64p165617jsn3f1dc48ef89c',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    axios.request(options)
        .then((response) => { setData(response.data.football) })
        .catch(function (error) { console.error(error); });

    const matchsHandler = () => {
        console.log("click!")
        dispatch(updateMatchs(data))
    }

    return (
        <div className='mainSport'>
            <div>Type of equipments
                <ul>
                    <li>Musculation</li>
                    <li>Fitness</li>
                    <li>Loisirs et Jeux</li>
                </ul>
            </div>
            <div>Caroussel</div>
            <div>
                <div className="newsSport">
                    <h6 onClick={matchsHandler}>
                        Upcoming Matches <img src='./images/icons/refreshIcon.png' height='15px' />
                    </h6>
                    <News />
                </div>
            </div>
        </div>
    )
}

export default SportMain