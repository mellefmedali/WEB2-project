import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const FilterByType = () => {
    return (
        <div>
            <div className="d-flex-column filterByType">
                <Form className="d-grid gap-1">
                    <Button variant="outline-success">Musculation</Button>
                    <Button variant="outline-success">Fitness</Button>
                    <Button variant="outline-success">Loisirs et Jeux</Button>
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