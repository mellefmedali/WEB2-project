import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterBy } from '../../../store/filterTypeSlice';
import { filterList } from '../../../store/filteredListSlice';


const FilterByType = () => {
    const dispatch = useDispatch()
    const type = useSelector(state=>state.filterBy)
    const filteredList = useSelector(state=>state.filteredList)
    const [filter, setFilter] = useState("")
    const handleClick=(event)=>{
        dispatch(setFilterBy(event.target.name))
        console.log(String(type)) //OK
        setFilter(type)
        dispatch(filterList("musculation"))
        // console.log(filteredList)
    }
    return (
        <div>
            <div className="d-flex-column filterByType">
                <Form className="d-grid gap-1">
                    <Button variant="outline-success" name="musculation" onClick={handleClick}>Musculation</Button>
                    <Button variant="outline-success" name="fitness" onClick={handleClick}>Fitness</Button>
                    <Button variant="outline-success" name="loisir" onClick={handleClick}>Loisirs et Jeux</Button>
                </Form>
                <Form className="d-flex-column">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2 d-flex"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>
        </div>
    )
}

export default FilterByType