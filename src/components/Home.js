import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="sectAbout">
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
      <Container>
        <Row>
          <Col className='sport categorie m-2 rounded-5'>
            <Link to='/sport'><div className='subcategorie'>Sport</div></Link>
          </Col>
          <Col className='industrie categorie m-2 rounded-5'>
            <Link to='/sport'><div className='subcategorie'>Industrie</div></Link>
          </Col>
          <Col className='decoration categorie  m-2 rounded-5 text-centered'>
            <Link to='/sport'><div className='subcategorie'>Décoration</div></Link>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Home