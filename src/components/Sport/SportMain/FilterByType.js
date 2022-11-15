import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  Dropdown  from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterBy } from '../../../store/filterTypeSlice';
import { filterList, filterListByTitle, filterListGamme } from '../../../store/filteredListSlice';


const FilterByType = () => {
    const [filtered, setFiltered] = useState(false)
    const [filterVal, setFilterVal] = useState("")
    const [searchPlaceHolder, setSearchPlaceHolder] = useState("")
    const dispatch = useDispatch()
    const handleClick = (event) => {
        dispatch(filterList(event.target.name))
        setFiltered(true)
    }

    const handleClickGamme = (event) => {
        dispatch(filterListGamme(event.target.name))
        setFiltered(true)
    }

    const handleSearch = (e) => {
        dispatch(filterListByTitle(e.target.value))
        setFiltered(true)
    }

    const resetList = () => {
        dispatch(filterListByTitle(""))
        dispatch(setFilterBy(""))
        setFiltered(false)
        setFilterVal("")
        setSearchPlaceHolder ("")
    }

    const toggleFilter = (e) =>{
        setFilterVal(e.target.name)
        console.log(e.target.name)
    }

    return (
        <div>
            <div className="d-flex-column filterByType">
                <Dropdown className='mb-2'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Filter By {filterVal}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item name="type" onClick={toggleFilter} >Type</Dropdown.Item>
                        <Dropdown.Item name="gamme" onClick={toggleFilter} >Gamme</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Form className={`d-grid gap-1 ${filterVal=="type"?"visible":"d-none"}`}>
                    <Button variant="outline-success" name="musculation" onClick={handleClick}>Musculation</Button>
                    <Button variant="outline-success" name="fitness" onClick={handleClick}>Fitness</Button>
                    <Button variant="outline-success" name="loisir" onClick={handleClick}>Loisirs et Jeux</Button>
                </Form>

                <Form className={`d-grid gap-1 ${filterVal=="gamme"?"visible":"d-none"}`}>
                    <Button variant="outline-success" name="pro" onClick={handleClickGamme}>Professionnel</Button>
                    <Button variant="outline-success" name="semipro" onClick={handleClickGamme}>Semi Pro</Button>
                </Form>

                <Form className="d-flex-column ">
                    <Form.Control
                        type="search"
                        // value={searchPlaceHolder}
                        placeholder="Search in titles"
                        className="me-2 d-flex "
                        aria-label="Search"
                        onChange={handleSearch}
                    />
                    {/* <Button variant="outline-success">Search</Button> */}
                    <Button variant="outline-danger mt-2" onClick={resetList} style={{ visibility: filtered ? "visible" : "hidden" }}>Cancel Filter</Button>
                </Form>
            </div>
        </div>
    )
}

export default FilterByType