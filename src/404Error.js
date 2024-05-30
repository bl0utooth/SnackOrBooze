import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardColumns, CardTitle } from "reactstrap";

const NotFound = () => {
    return (
        <div>
            <Card className="not-found">
                <CardBody className="not-found-text">
                    <CardTitle>
                        <h2>Page cannot be found/ does not exist</h2>
                        <div className="links">
                            <Link to="/">Home</Link>
                            <Link to="/add">Add Menu Item</Link>
                            <Link to="/snacks">Snacks</Link>
                            <Link to="/drinks">Drinks</Link>
                        </div>
                    </CardTitle>
                </CardBody>
            </Card>
        </div>
    )
}

export default NotFound