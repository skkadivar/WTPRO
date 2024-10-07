import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Getbyid = () => {
  const [data, setData] = useState({});

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/faculty/" + params.id)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div>
        <Link to={"/"}>
          <Button variant="outline-Warning">Back</Button>{" "}
        </Link>
      </div>

      <div className="row">
        <div className="col-5">
          <img src={data.FacultyImage}></img>
        </div>
        <div className="col-7">
          <Card style={{ width: "50rem", height: "31rem" }}>
            <Card.Body>
              <Card.Text>
                <table>
                  <tr>
                    <td>
                      <label>
                        <h1>Name</h1>
                      </label>
                    </td>
                    <td>
                      <h1>:</h1>
                    </td>
                    <td>
                      <h1>{data.FacultyName}</h1>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <hr style={{ width: "765px" }} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>
                        <h3>Designation</h3>
                      </label>
                    </td>
                    <td>
                      <h3>:</h3>
                    </td>
                    <td>
                      <h3>{data.FacultyDesignation}</h3>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>
                        <h4>Education Qualification</h4>
                      </label>
                    </td>
                    <td>
                      <h4>:</h4>
                    </td>
                    <td>
                      <h4>{data.FacultyEducationQualification}</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>
                        <h5>Experience</h5>
                      </label>
                    </td>
                    <td>
                      <h5>:</h5>
                    </td>
                    <td>
                      <h5>{data.FacultyExperience}</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>
                        <h5>Working Since</h5>
                      </label>
                    </td>
                    <td>
                      <h5>:</h5>
                    </td>
                    <td>
                      <h5>{data.FacultyWorkingSince}</h5>
                    </td>
                  </tr>
                </table>
              </Card.Text>

              <button
                className="btn btn-danger m-1"
                onClick={() => {
                  fetch("http://localhost:5000/faculty/" + params.id, {
                    method: "DELETE",
                  })
                    .then((res) => res.json())
                    .then((data) => console.log(data), navigate("/"));
                }}
              >
                Delete
              </button>

              <Link to={"/update/" + data.id}>
                <button className="btn btn-Info m-1">Edit</button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Getbyid;
