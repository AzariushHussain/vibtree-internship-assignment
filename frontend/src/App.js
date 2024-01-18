import './App.css';
//component imports
import Navbar from './components/Navbar';

import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Link } from 'react-router-dom';
//icons import 
import SendIcon from '@mui/icons-material/Send';
import TableChartIcon from '@mui/icons-material/TableChart';

// screens import
import SendMessageScreen from './screens/SendMessageScreen';
import RecodsScreen from './screens/RecodsScreen';

function App() {

  return (

    <div className='App'>
    
    <Router>
      <div className='rightComponent'>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className='rightComponentItem' >
            <SendIcon style={{marginRight:"1vw"}}/>Action
          </div>
        </Link>

        <Link to="/records" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className='rightComponentItem'>
            <TableChartIcon style={{marginRight:"1vw"}}/>Records
          </div>
        </Link>
      </div>

      <div className="leftComponent" style={{width:"82%",}}>
      
      <Navbar/>
      <Routes>
      <Route >
        <Route path="/" exact Component={SendMessageScreen}/>
        <Route path="/records" Component={RecodsScreen}/>
      </Route>
      </Routes>
      </div>
    </Router>
    
   </div>
  );
}

export default App;
