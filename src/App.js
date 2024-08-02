import { Skill } from "./components/Skill";
import { Avatar } from "./components/Avatar";
import { About } from "./components/About";
import "./styles.css";

const profile = {
  src: "./port.jpg",
  name: "Jonas Schmedtmann",
  about:
    "full stack web developer and teacher at udemy. when not coding or prepariing cousre i like to play board games to codeek and ear ot to just enjoy the protugeess sun at the beach",
  skills: [
    {
      id: 0,
      text: "HTML+CSS",
      emoji: "🥶",
      backgroundColor: "#FF5733" // Example color code
    },
    {
      id: 1,
      text: "JAVA",
      emoji: "❄️",
      backgroundColor: "#33FF57" // Example color code
    },
    {
      id: 2,
      text: "JS",
      emoji: "🤣",
      backgroundColor: "#3357FF" // Example color code
    },
    {
      id: 3,
      text: "WEB DESIGN",
      emoji: "👍",
      backgroundColor: "#F333FF" // Example color code
    },
    {
      id: 4,
      text: "Git and Github",
      emoji: "💻",
      backgroundColor: "#FF33A6" // Example color code
    },
    {
      id: 5,
      text: "PHP",
      emoji: "💕",
      backgroundColor: "#33FFA6" // Example color code
    }
  ]
};

export default function App() {
  return (
    <div className="App">
      <div className="card container">
        <Avatar img={profile.src} />
        <div className="data">
          <About info={profile.about} name={profile.name} />
          <div className="skills">
            {profile.skills.map((skill) => (
              <Skill
                key={skill.id}
                skillName={skill.text}
                emoji={skill.emoji}
                backgroundColor={skill.backgroundColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
