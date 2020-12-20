import React from "react";
import { Form, Col } from "react-bootstrap";
import styled from "styled-components";

const Dec = styled.div`
  padding-top: 10px;
  padding-left: 5px;
  color: greenyellow;
  font-size: 25px;
  margin-left: 5px;
  font-weight: 25px;
`;

const Full = styled.div`
  color: greenyellow;
  font-size: 18px;
  margin-right: 15px;
`;

const Space = styled.div`
  margin-top: 15px;
`;

export default function SearchForm({ params, onParamChange }) {
  return (
    <Space>
      <Form className="mb-4">
        <Form.Row className="align-items-end">
          <Form.Group as={Col}>
            <Dec>
              <Form.Label>Description</Form.Label>

              <Form.Control
                onChange={onParamChange}
                value={params.description}
                name="description"
                type="text"
              />
            </Dec>
          </Form.Group>

          <Form.Group as={Col}>
            <Dec>
              <Form.Label>Location</Form.Label>
              <Form.Control
                onChange={onParamChange}
                value={params.location}
                name="location"
                type="text"
              />
            </Dec>
          </Form.Group>
          <Form.Group as={Col} xs="auto" className="ml-2">
            <Full>
              <Form.Check
                onChange={onParamChange}
                value={params.full_time}
                name="full_time"
                id="full-time"
                label="Full Time"
                type="checkbox"
                className="mb-2"
              />
            </Full>
          </Form.Group>
        </Form.Row>
      </Form>
    </Space>
  );
}
