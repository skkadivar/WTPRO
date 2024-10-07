import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const Gatall = () => {
  var [data, setData] = useState([]);

  const url = "http://localhost:5000/faculty";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Faculty Name</th>
            <th>Faculty Designation</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr>
              <td>{e.id}</td>
              <td>{e.FacultyName}</td>
              <td>{e.FacultyDesignation}</td>
              <td className="text-center">
                <Link to={"/getby/" + e.id} className="btn btn-danger">View more</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Gatall;
