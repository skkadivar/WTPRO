import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

const Insert = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  return (
    <>
      <div className="container form-control">
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ID"
              onChange={(e) => {
                setData({ ...data, id: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Faculty Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter record Name"
              onChange={(e) => {
                setData({ ...data, FacultyName: e.target.value });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Faculty Designation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter record Designation"
              onChange={(e) => {
                setData({ ...data, FacultyDesignation: e.target.value });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Faculty Education Qualification</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter record Education Qualification"
              onChange={(e) => {
                setData({
                  ...data,
                  FacultyEducationQualification: e.target.value,
                });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Faculty Experience</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter record Experience"
              onChange={(e) => {
                setData({ ...data, FacultyExperience: e.target.value });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Faculty Working Since</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter record Working Since"
              onChange={(e) => {
                setData({ ...data, FacultyWorkingSince: e.target.value });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Faculty Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter record Image Path"
              onChange={(e) => {
                setData({ ...data, FacultyImage: e.target.value });
              }}
            />
          </Form.Group>
        </Form>

        <button
          className="btn btn-info m-1"
          onClick={() => {
            const formBody = new URLSearchParams();
            formBody.append("data", JSON.stringify(data));

            fetch("http://localhost:5000/faculty", {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: formBody.toString(),
            }).then(() => navigate("/"));
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Insert;
