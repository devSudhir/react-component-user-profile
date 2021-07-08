import "./App.css";
import photo from "./Elon-musk.jpg";
import { CreateProfile } from "./components/CreateProfile";

function App() {
  const user = {
    name: "Elon Musk",
    location: "NEW YORK",
    description: "User interface designer and front-end developer",
    skills: [
      "UI/UX",
      "Front End Development",
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Nodes",
    ],
  };
  return (
    <div style={{ position: "relative" }}>
      <button
        style={{
          position: "absolute",
          left: 10,
          background: "yellow",
          color: "black",
        }}
      >
        PRO
      </button>
      <img src={photo} alt="Elon's_photo" />
      <CreateProfile user={user} />
    </div>
  );
}

export default App;
