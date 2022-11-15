import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { additem, deleteitem } from '../../../store/cartSlice';

function SportArticle({ list }) {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cartItems)
    const newArr = cartItems.filter((e) => e.id == list.id).length
    const [indexCopy, setIndexCopy] = useState(0)
    const handleclick = () => {
        // if (cartItems.find((e, index) => e.id == list.id)) {
        //     console.log("find one")
        //     console.log("list qte",list.cartQte)
        //     // setIndexCopy(cartItems.find((e, index) => index==list.id))
        //     console.log("cart Items qte", cartItems[list.id].cartQte)
        //     dispatch(additem({
        //         id: list.id,
        //         source: list.source,
        //         title: list.title,
        //         description: list.description,
        //         type: list.type,
        //         prix: list.prix,
        //         cartQte: cartItems[list.id].cartQte + 1
        //     }))
        //     dispatch(deleteitem(cartItems.findIndex((e) => e.title==list.title)))
        // }
        // else {
            dispatch(additem({
                id: list.id,
                source: list.source,
                title: list.title,
                description: list.description,
                type: list.type,
                prix: list.prix,
                cartQte: 1
            }))
        // }
    }

    return (
        <Card className='sportArticle'>
            <Card.Img variant="top" src={list.source} className='articleImage' />
            <Card.Body className='d-flex flex-column'>
                <Card.Title className="mb-auto">{list.title}</Card.Title>
                <Card.Text className="mb-auto">{list.description}</Card.Text>
                <Card.Text className="mb-auto">Prix (DT): {list.prix}</Card.Text>
                {newArr ?
                    <Card.Text className='fst-italic mt-auto p-0 text-secondary'>Already {newArr} in your cart</Card.Text>
                    :
                    <Card.Text>-</Card.Text>
                }
            </Card.Body>
            <Card.Footer className='m-0 p-0'>
                <Button className='m-0 rounded-bottom' style={{ width: "100%" }} variant="primary" onClick={handleclick}>Add to cart</Button>
            </Card.Footer>
        </Card>
    );
}
export default SportArticle