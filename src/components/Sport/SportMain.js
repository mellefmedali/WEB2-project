import '../Components.css'
import SportArticle from './SportArticle'
import data from './SportArticleList.json'


const SportMain = () => {
    // console.log(data)
    return (
        <div className='mainSport'>
            <div>Type of equipments
                <ul>
                    <li>Musculation</li>
                        {
                            data.map(e=><SportArticle props={e}/>)
                        }
                    <li>Fitness</li>
                    <li>Loisirs et Jeux</li>
                </ul>
            </div>
            <div>Caroussel</div>
            <div>News</div>
        </div>
    )
}

export default SportMain