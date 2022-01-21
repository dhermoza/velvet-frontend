import React from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Button } from "react-bootstrap";

const AddForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch("example"));

  return (
    <Container className="d-flex flex-column justify-content-center pb-5">
      <div className="justify-content-center">
        <h1>Add a Player</h1>
      </div>
      <br></br>
      <br></br>
      <div className="d-flex align-items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="form pb-5">
          <Row className="justify-content-between">
            <Col xs="auto">
              <label htmlFor="nickname">Nickname:</label>
              <input name="nickname" {...register("nickname", {required: true})} />
              {errors.nickname && <p>This is required.</p>}
            </Col>
          </Row>
          <br />
          <Row className="justify-content-between">
            <Col xs="auto">
              <label htmlFor="avatar">Avatar:</label>
              <input name="avatar" {...register("avatar")} />
            </Col>
          </Row>
          <br />

          <Row className="justify-content-between">
            <Col xs="auto">
              <label htmlFor="ranking">Ranking:</label>
              <input name="ranking" type="number" {...register("ranking", {valueAsNumber: true})} />
            </Col>
          </Row>
          <br />

          <Row className="justify-content-between">
            <Col xs="auto">
              <label htmlFor="status">Status:</label>
              <select name="status" {...register("status")}>
                <option value="oro">Oro</option>
                <option value="plata">Plata</option>
                <option value="bronce">Bronce</option>
              </select>
            </Col>
          </Row>
          <br />
          <Button type="submit" variant="primary" className="submitButton">Add</Button>{' '}
        </form>
      </div>
    </Container>
  )
}

export default AddForm;
