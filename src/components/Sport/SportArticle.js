import '../Components.css'

const SportArticle = (list) => {
    // console.log(list)
    return (
        <div className='sportArticle'>
            <h6>{list.title}</h6>
            <img src={list.source} className='articleImage' />      
            <p>{list.description}</p>
            </div>
    )
}

export default SportArticle