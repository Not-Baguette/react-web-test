import './App.css'
import Card from "./card/Card.jsx"
import Header from "./header/Header.jsx"
import List from "./list/List.jsx"
import Profile from "./profile/Profile.jsx";
import profilePic from "./assets/pfp.webp";
import reactPic from "./assets/react.svg";


function App() {
  let personalInfo = {
    name: "Baguette",
    age: 18,
    location: "Jakarta, Indonesia",
    hobbies: ["Coding", "Gaming", "Eating"],
    languages: ["English", "Indonesian", "German"],
  }
  return (
    <>
      <Header /> 
      <div className="inline">
      <Profile img={profilePic} title={personalInfo.name} textFront="Hi! Click me!" textBack="Bah" upstream="https://not-baguette.github.io"/>
      </div>

      <h1>About Me</h1>
      <div className="inline">
        <List title="Hobbies" items={personalInfo.hobbies} />
        <List title="Languages" items={personalInfo.languages} />
      </div>
      
      {/* Skills page */}
      <h1>My Skills</h1>
      <div className="inline">
        <Card picture="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" upstream="https://www.python.org/"
              title="Python" description="anti-braces, anti-semicolon jumpscare" isFramework={false} />
        <Card picture="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" upstream="https://en.wikipedia.org/wiki/C_(programming_language)"
              title="C" description="Professional Memory Leak developer" isFramework={false} />
        <Card picture="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" upstream="https://www.javascript.com/"
              title="Javascript" description="Vibe-based Programming language" isFramework={false} />
        <Card picture={reactPic} upstream="https://reactjs.org/"
              title="React" description="Gobshite Webdev framework" isFramework={true} />
      </div>
    </>
  )
}

export default App
