import React, { useRef } from "react";
import { Col, Row, Container, Form } from "react-bootstrap";

const Search = ({ setQuery, query }) => {
  //dando referencia al iut y mediante ele elemneto capturara valor
  const formRef = useRef();

  const handleClck = () => {
    const newQuery = formRef.current.value;
    console.log("handle", newQuery);
    setQuery(newQuery);
  };

  return (
    <Form inline as={Col} md="12" className="justify-content-around">
      <Row>
        <Col md={6}>
          <Container className="control has-icons-left form-search">
            <input
              className="input"
              style={{ width: "300px", background: "lightgray" }}
              type="text"
              ref={formRef}
              defaultValue={query}
              placeholder="Buscar"
            />
            <span className="icon is-small is-left">
              <i style={{ color: "black" }} className="fas fa-search"></i>
            </span>
          </Container>
        </Col>
        <Col md={2}>
          <button className="button is-success is-light" onClick={handleClck}>
            Search
          </button>
        </Col>
        
      </Row>
    </Form>
  );
};
export default Search;
