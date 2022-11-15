import Card from 'react-bootstrap/Card';

function DecoArticle({ list }) {

    return (
        <Card className='sportArticle'>
            <Card.Img variant="top" src={list.source} className='articleImage' />
            <Card.Body className='d-flex flex-column'>
                <Card.Title className="mb-auto">{list.title}</Card.Title>
                {/* <Card.Text className="mb-auto">{list.prix}</Card.Text> */}
            </Card.Body>
            <Card.Footer >
                <h3 className="font-italic">{list.prix} DT</h3>
            </Card.Footer>
        </Card>
    );
}
export default DecoArticle