import Card from 'react-bootstrap/Card';
import './Decoration.css'

function DecoArticle({ list }) {

    return (
        <Card className='decoArticle d-flex flex-row align-items-center'>
            <Card.Img variant="top" src={list.source} className='decoImage' />
            <Card.Body className='d-flex flex-column w-100 pt-2 pb-2' style={{height:"200px"}}>
                <Card.Title className="mb-auto text-center pb-2">{list.title}</Card.Title>
                <Card.Text className="mb-auto text-start overflow-auto">{list.description}</Card.Text>
            </Card.Body>
            <Card.Footer className='cardFooter' >
                <h3 className="font-italic text-nowrap cardFooter">{list.prix} DT</h3>
            </Card.Footer>
        </Card>
    );
}
export default DecoArticle