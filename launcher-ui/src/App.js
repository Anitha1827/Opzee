import "./App.css";
import Applist from "./components/Applist";
import HomePage from "./components/HomePage";

function App() {
  const handleLaunch = ({ name, path, parameters }) => {
    fetch("http://localhost:5000/api/addapp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, path, parameters }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error("Error launching application:", err);
      });
  };

  return (
    <div className="App">
      <HomePage onLaunch={handleLaunch} />
      <Applist />
    </div>
  );
}

export default App;
