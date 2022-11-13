import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterBy } from '../../../store/filterTypeSlice';
import { filterList, filterListByTitle } from '../../../store/filteredListSlice';


const FilterByType = () => {
    const [filtered, setFiltered] = useState(false)
    const [searchPlaceHolder, setSearchPlaceHolder] = useState("")
    const dispatch = useDispatch()
    // const type = useSelector(state=>state.filterBy)
    const handleClick=(event)=>{
        // dispatch(setFilterBy(event.target.name)) //fitness type
        dispatch(filterList(event.target.name)) // filter suivant fitness
        setFiltered(true)
    }
    const handleSearch=(e)=>{
        // setSearchPlaceHolder=e.target.value
        dispatch(filterListByTitle(e.target.value))
        setFiltered(true)
    }

    const resetList=()=>{
        dispatch(filterListByTitle(""))
        dispatch(setFilterBy(""))
        setFiltered(false)
        setSearchPlaceHolder=""
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
                        // value={searchPlaceHolder}
                        placeholder="Search in titles"
                        className="me-2 d-flex"
                        aria-label="Search"
                        onChange={handleSearch}
                    />
                    {/* <Button variant="outline-success">Search</Button> */}
                    <Button variant="outline-danger" onClick={resetList} style={{visibility:filtered?"visible":"hidden"}}>Cancel Filter</Button>
                </Form>
            </div>
        </div>
    )
}

export default FilterByType