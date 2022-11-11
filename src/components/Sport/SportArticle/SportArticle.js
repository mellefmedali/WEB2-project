import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { additem } from '../../../store/cartSlice';

function SportArticle({ list }) {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cartItems)

    const handleclick = () => {
        dispatch(additem(list))
    }
    return (
        <Card className='sportArticle'>
            <Card.Img variant="top" src={list.source} className='articleImage' />
            <Card.Body>
                <Card.Title>{list.title}</Card.Title>
                <Card.Text>{list.description}</Card.Text>
                <p>Prix (DT): {list.prix}</p>
                {/* <p>Disponible : {list.stock}</p> */}
                <Button variant="primary" onClick={handleclick}>Add</Button>
            </Card.Body>
        </Card>
    );
}
export default SportArticle