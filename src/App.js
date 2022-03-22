import './App.css';
import { useState } from 'react'
import Card from './components/Card';
import CreateBadgeModal from './components/CreateBadgeModal';

function App() {

const [isModalVisible, setIsModalVisible] = useState(false)


  return (
    <div className="App">

  {isModalVisible && <CreateBadgeModal  />}



<header>
  <button onClick={() => setIsModalVisible(true)}>Create badge</button>
</header>


<div className="grid-container">
<Card badgeName='Inclusion Champ' badgeDescription='Finished ten inclusion courses'/>
<Card badgeName='The Underdog' badgeDescription='Finished ten inclusion courses'/>
<Card badgeName='Fast Learner' badgeDescription='Finished ten inclusion courses'/>
<Card badgeName='Most Compassionate' badgeDescription='Finished ten inclusion courses'/>
</div>
    </div>
  );
}

export default App;
