import React from 'react'
import SportArticle from './SportArticle'
import data from './SportArticleList.json'
import '../sport.css'
import { v4 as uuidv4 } from 'uuid'

const SportArticles = () => {
    return (
        <div>
            <div className='sportList'>
                {
                    data.map(e => <SportArticle key={uuidv4()} list= {e} />)
                }
            </div>
        </div>
    )
}

export default SportArticles