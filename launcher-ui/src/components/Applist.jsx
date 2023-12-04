import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/Applist.css";

const Applist = () => {
  const [application, setApplication] = useState([]);

  useEffect(() => {
    fetchApplication();
  }, []);

  const fetchApplication = async () => {
    try {
      const resp = await axios.get("http://localhost:5000/api/application");
      console.log(resp.data);
      setApplication(resp.data);
    } catch (error) {
      console.error("Error fetching application:", error);
    }
  };

  return (
    <div>
      <h2>Application list</h2>
      <ul>
        {application.map((app) => (
          <li key={app._id}>
            <strong>Name:</strong>
            {app.name},<strong>Icon:</strong> <img src={app.icon} alt="icon" />{" "}
            <strong>Path:</strong>
            {app.path}, <strong>Parameters</strong>
            {app.parameters}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Applist;
