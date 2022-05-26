import{
    BrowserRouter as Router,
   // Switch, 
   Routes,
    Route

} from "react-router-dom";

import { Login } from "./pages/Login";
import { OSForm } from "./pages/OSForm";
import { OSList } from "./pages/OSList";


export function AppRoutes(){
return(
   <Router>
       <Routes>         
            <Route path="" element= {<Login />}></Route>
            <Route path="/Login" element= {<Login />}></Route>
            <Route path="/OSForm" element= {<OSForm />}></Route>
            <Route path="/OSList" element= {<OSList />}></Route>
        </Routes>
    </Router>   
)
}