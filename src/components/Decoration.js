import React from 'react'
import DecoArticles from './Decoration/DecoArticles'

const Decoration = () => {
  return (
    <div>
      <div>
        <div className="sectIndustrie">
          <img src="./images/deco/decoProduct.jpg" style={{ width: "auto", height: '270px' }} />
          <h1 ><span className='tw'>TWEMMAN</span>.DECO</h1>
          <p><span className='tw'>TWEMMAN</span> est aussi une entreprise concevant des articles spécifiques en faisant un mariage entre le bois et le métal.
            Nous réalisons des travaux de métallerie depuis des années ce qui a fait de notre équipe des experts
            ouvrages en fer.
          </p>
          <p>
            <span className='tw'>TWEMMAN</span> est en mesure de répondre aux demandes et besoins spécifiques de notre clientèle que que ce soit leurs idée: traditionelles ou follement originales.
          </p>
        </div>
        <div className='d-flex flex-wrap'>
<DecoArticles/>
        </div>
      </div>
    </div>
  )
}

export default Decoration