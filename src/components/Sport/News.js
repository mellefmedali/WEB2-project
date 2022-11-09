import React, { useState } from 'react'
import axios from "axios";
import MatchDetails from './MatchDetails';
import { useSelector, useDispatch } from 'react-redux'
import { updateMatchs } from '../../store/matchsSlice';
import {v4 as uuidv4} from 'uuid'
import '../Components.css'

export default function News() {
    const matchs = useSelector((state) => state.matchs)

    return (
        <div className='news' >
            {matchs.map(
                (el) => <MatchDetails key={uuidv4()} details={el} />
            )}
        </div>
    )
}
