import "./App.css";
import Header from "./Components/Header/Header";
import NavBar from "./Components/Nav/NavBar";
import Dialogs from "./Components/Dialogs/Dialogs";
import Profile from "./Components/Profile/Profile";
import { Routes, Route } from "react-router-dom";

const App = props => {
    return (
        <div className='app-wrapper'>
            <Header />
            <NavBar />
            <Routes>
                <Route
                    path='/dialogs/*'
                    element={
                        <Dialogs
                            store={props.store}
                            dialogs={props.dialogs}
                            messages={props.messages}
                        />
                    }
                />
                <Route
                    path='/profile/*'
                    element={
                        <Profile
                            posts={props.posts}
                            dispatch={props.dispatch}
                            newPostText={props.newPostText}
                        />
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
