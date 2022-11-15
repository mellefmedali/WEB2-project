import React from 'react'
import '../App.css'

const Industrie = () => {
  return (
    <div>
      <div className="sectIndustrie">
        <img src='./images/industrie/Diapositive1.jpg' style={{width:"auto", height:'270px'}}/>
        <h1 ><span className='tw'>TWEMMAN</span>.INDUSTRIE</h1>
        <p><span className='tw'>TWEMMAN</span> est aussi une entreprise concevant des diverses structures en métal.
          Nous réalisons des travaux de métallerie depuis des années ce qui a fait de notre équipe des experts
          ouvrages en fer.
        </p>
        <p>
        <span className='tw'>TWEMMAN</span> est en mesure de répondre aux demandes et besoins en constructions et structures
          métalliques pour tous types d'articles.
        </p>
        <p> Notre expertise permet de répondre à des besoins spécifiques et complexes pour les clients issus de
          secteurs d’activités diverses</p>
      </div>
      <div className='d-grid md-2'>
      <img src='./images/industrie/indus01.jpg' style={{width:"auto", height:'270px'}}/>
      <img src='./images/industrie/indus02.jpg' style={{width:"auto", height:'270px'}}/>
      <img src='./images/industrie/indus03.jpg' style={{width:"auto", height:'270px'}}/>
      <img src='./images/industrie/indus04.jpg' style={{width:"auto", height:'270px'}}/>
      </div>
    </div>
  )
}

export default Industrie