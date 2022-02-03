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
                            addPost={props.addPost}
                            newPostText={props.newPostText}
                            updateNewPostText={props.updateNewPostText}
                        />
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
