import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import NotesContainer from './Components/NotesContainer';
import ArchiveContainer from './Components/ArchiveContainer';
import TrashContainer from './Components/TrashContainer';

function App() {

const routeConfig= createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/dashboard",
    element:<Dashboard/>,

    children: [
      {
        path:"notes",
        element:<NotesContainer/>
      },
      {
        path:"archive",
        element:<ArchiveContainer/>
      },
      {
        path:"trash",
        element:<TrashContainer/>
      }
    ]
  }
])
  return (
  <RouterProvider router={routeConfig}></RouterProvider>
    
  );
}

export default App;
