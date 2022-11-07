import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
<>
    <section className="sect-about">
      <h1>C'est quoi <span className="tw">TWEMMAN</span> ?
      </h1>

      <p> <span>TWEMMAN</span> est l'acronyme de <span>T</span>unisian <span>W</span>orkshop for<span>E</span>ngineering and <span>M</span>echanical<span>MAN</span>ufacturing.
        <br />
        Fondée depuis 2016 par deux ingénieurs électromécaniques, nous sommes spécialisé dans les constructions
        métalliques, les menuiseries métalliques, la découpe plasma, la tôlerie,la mécanosoudure,
        les petits ouvrages d'art et le mobilier urbain.
        <br />
        Nous produisons aussi les articles de sport comme les bancs ajustables, bancs simples,
        support barre, etc...
        <br />
        En 2022, nous avons construit notre table de découpe plasma numérique et depuis nous
        avons lancé les services des produits en découpe numérique.
      </p>
      <br />
    </section>
<section className='home'>
  <Link to='/sport'><img src='./images/sportHome.jpg'/></Link>
  <Link to='/industrie'><img src='./images/indusHome.jpg'/></Link>
  <Link to='/decoration'><img src='./images/decoHome.jpg'/></Link>
</section>

</>
  )
}

export default Home