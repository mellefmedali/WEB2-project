import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { additem } from '../../../store/cartSlice';

function SportArticle({ list }) {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cartItems)
    const handleclick = () => {dispatch(additem(list))}
    const newArr= cartItems.filter((e)=>e.id==list.id).length
    return (
        <Card className='sportArticle'>
            <Card.Img variant="top" src={list.source} className='articleImage' />
            <Card.Body className='d-flex flex-column'>
                <Card.Title className="mb-auto">{list.title}</Card.Title>
                <Card.Text className="mb-auto">{list.description}</Card.Text>
                <Card.Text className="mb-auto">Prix (DT): {list.prix}</Card.Text>
                {newArr?
                <Card.Text className='fst-italic mt-auto p-0 text-secondary'>Already {newArr} in your cart</Card.Text>
                :
                <Card.Text>-</Card.Text>
                }
            </Card.Body>
            <Card.Footer className='m-0 p-0'>
                <Button className='m-0 rounded-bottom' style={{width:"100%"}} variant="primary" onClick={handleclick}>Add to cart</Button>
            </Card.Footer>
        </Card>
    );
}
export default SportArticle