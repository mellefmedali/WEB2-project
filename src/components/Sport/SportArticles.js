import React from 'react'
import SportArticle from './SportArticle'
import data from '../Sport/SportArticleList.json'
import '../Components.css'
import { v4 as uuidv4 } from 'uuid'

const SportArticles = () => {
    return (
        <div>
            <div className='sportList'>
                {
                    data.map(e => <SportArticle key={uuidv4()} title={e.title} source={e.source} description={e.description} />)
                }
            </div>
        </div>
    )
}

export default SportArticles