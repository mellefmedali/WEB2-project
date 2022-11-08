import React from 'react'

const SportArticle = (data) => {
    console.log(data)
    return (
        <div>SportArticle
            <p>{data.props}</p>
        </div>
    )
}

export default SportArticle