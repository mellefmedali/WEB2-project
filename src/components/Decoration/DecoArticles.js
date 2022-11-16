import DecoArticle from './DecoArticle'
import data from './DecoArticleList.json'
import './Decoration.css'
import { v4 as uuidv4 } from 'uuid'

const DecoArticles = () => {

    return (
        <div>
            <div className='d-flex flex-column'>
                {data.map(e => <DecoArticle key={uuidv4()} list= {e} />)}
            </div>
        </div>
    )
}

export default DecoArticles