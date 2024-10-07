import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";

const Update = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/faculty/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [id]);

  return (
    <>
      <div className="container form-control">
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              value={data.id}
              disabled
              //   placeholder="Enter ID"
              //   onChange={(e) => {
              //     setData({ ...data, id: e.target.value });
              //   }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Faculty Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={data.FacultyName}
              onChange={(e) => {
                setData({ ...data, FacultyName: e.target.value });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Faculty Designation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Designation"
              value={data.FacultyDesignation}
              onChange={(e) => {
                setData({ ...data, FacultyDesignation: e.target.value });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Faculty Education Qualification</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Education Qualification"
              value={data.FacultyEducationQualification}
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
              placeholder="Enter Experience"
              value={data.FacultyExperience}
              onChange={(e) => {
                setData({ ...data, FacultyExperience: e.target.value });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Faculty Working Since</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Working Since"
              value={data.FacultyWorkingSince}
              onChange={(e) => {
                setData({ ...data, FacultyWorkingSince: e.target.value });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Faculty Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Image Path"
              value={data.FacultyImage}
              onChange={(e) => {
                setData({ ...data, FacultyImage: e.target.value });
              }}
            />
          </Form.Group>
        </Form>

        <button
          onClick={() => {
            const formBody = new URLSearchParams();
            formBody.append("data", JSON.stringify(data));

            fetch("http://localhost:5000/faculty/" + id, {
              method: "PATCH",
              body: formBody.toString(),
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            })
              .then((res) => res.json())
              .then(() => navigate("/"));
          }}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default Update;
