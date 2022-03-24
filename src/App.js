import "./App.scss";
import { useState } from "react";
import Card from "./components/Card";
import CreateBadgeModal from "./components/CreateBadgeModal";
import { badgeInfo } from "./badgeInfo";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [badgeName, setBadgeName] = useState("");
  const [badgeDescription, setBadgeDescription] = useState("");


  return (
    <div className="App">
      {isModalVisible && <CreateBadgeModal setBadgeName={setBadgeName} setBadgeDescription={setBadgeDescription} badgeName={badgeName} badgeDescription={badgeDescription} badgeInfo={badgeInfo}/>}

      <header>
        <button onClick={() => setIsModalVisible(true)}>Create badge</button>
      </header>

      <div className="grid-container">
        {badgeInfo.map((badge) => (
          <Card badgeName={badge.name} badgeDescription={badge.description} />
        ))}
      </div>
    </div>
  );
}
export default App;
