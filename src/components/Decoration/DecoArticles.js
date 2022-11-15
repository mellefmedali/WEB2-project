import DecoArticle from './DecoArticle'
import data from './DecoArticleList.json'
import '../Sport/sport.css'
import { v4 as uuidv4 } from 'uuid'

const DecoArticles = () => {

    return (
        <div>
            <div className='sportList'>
                {data.map(e => <DecoArticle key={uuidv4()} list= {e} />)}
            </div>
        </div>
    )
}

export default DecoArticles