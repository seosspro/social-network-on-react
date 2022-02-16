import "./App.css";
import Header from "./Components/Header/Header";
import NavBar from "./Components/Nav/NavBar";
import Profile from "./Components/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

const App = props => {
    return (
        <div className='app-wrapper'>
            <Header />
            <NavBar />
            <Routes>
                <Route path='/dialogs/*' element={<DialogsContainer />} />
                <Route path='/profile/*' element={<Profile />} />
            </Routes>
        </div>
    );
};

export default App;
