import { useState } from "react";
import { Card } from "./components/Card";
import NewChirp from "./components/NewChirp";

const App = () => {

    const [user, setUser] = useState('');
    const [chirp, setChirp] = useState('');

    const [makeCards, updateMakeCards] = useState([
    {
        id: "origin-first",
        name: "will",
        text: "this is podracing"
    },
    {
        id: "origin-second",
        name: "thomas",
        text: "please god just let this work i want to go to bed so bad"
    },
    {
        id: "origin-third",
        name: "billy",
        text: "this is frustrating."
    }]);


    const handleClick = (e) => {
        e.preventDefault();
        updateMakeCards([...makeCards, {
            id: user,
            name: user,
            text: chirp
        }]);
        setUser('');
        setChirp('');
    }

    return(
        <>
        <form>
            <input placeholder="user" value={user} onChange={(e) => setUser(e.target.value)} />
            <input placeholder="text" value={chirp} onChange={(e) => setChirp(e.target.value)} />
            <button className="btn btn-dark" onClick={handleClick}>Chirp</button>
        </form>
        <div className="container">
            <div className="row">
                <div className="col-md-6" id="insertHere">
                    {makeCards.map(val => <Card key={val.id} name={val.name} text={val.text} />)}
                </div>
            </div>
        </div>
        
        </>
    );
};

export default App;