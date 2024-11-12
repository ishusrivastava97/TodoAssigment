import { useEffect, useState } from 'react'

import './App.css'
import { fetchData } from './Services/api';
import SelectByGroup from './Components/SelectByGroup';
import SelectBySorting from './Components/SelectBySorting';
import Dropdown from './Components/DropDown/Dropdown';
import Body from './Components/Body/Body';

function App() {
  const options = [
  { label: 'Option 1', value: 'option1' },


];
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);
    const [groupBy, setGroupBy] = useState('status');
    const [sortBy, setSortBy] = useState('priority');

        useEffect(() => {
        const loadData = async () => {
            const { tickets, users } = await fetchData();
            console.log('tickets', tickets);
            console.log('users', users);
            setTickets(tickets);
            setUsers(users);
        };
        loadData();
    }, []);
  return (<>
    <header className='container' >
      <Dropdown options={options} placeholder="Display"  groupBy={groupBy} setGroupBy={setGroupBy} sortBy={sortBy} setSortBy={setSortBy} />
    </header>
    <Body tickets={tickets} users={users} groupBy={groupBy} sortBy={sortBy} />
    </>
  )
}

export default App
