import { useState } from 'react';
import data from './data';
import TeamCard from './components/TeamCard';
import styled from 'styled-components';

const MembersDiv = styled.div`
    margin: 5rem auto;
    disply: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    
    width: 60%;
`

function App() {
  const [teamData, setTeamData] = useState(data);

  return (
    <div>
      <header>
        <h1>Welcome</h1>
      </header>
      <h2>To our wonderful team of engineers</h2>
      <MembersDiv>
        {teamData.map(data => (<TeamCard member={data} key={data.id} />))}
      </MembersDiv>
    </div>
  );
}

export default App;
