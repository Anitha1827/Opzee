import React, { useState } from "react";

function HomePage({ onLaunch }) {
  const [path, setPath] = useState("");
  const [parameters, setParameters] = useState("");
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");

  const launchapplication = async (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      icon.trim() === "" ||
      path.trim() === "" ||
      parameters.trim() === ""
    ) {
      alert("please fill in all fields");
      return;
    }
    await onLaunch({ name, icon, path, parameters });

    setName("");
    setIcon("");
    setPath("");
    setParameters("");
  };

  return (
    <div className="App">
      <div>
        <h1>Control UI</h1>
        <div>
          <label>
            Application Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Icon:
            <input
              type="text"
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Application Path:
            <input
              type="text"
              value={path}
              onChange={(e) => setPath(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Parameters:
            <input
              type="text"
              value={parameters}
              onChange={(e) => setParameters(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button onClick={launchapplication}>Launch Application</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
