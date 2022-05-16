import { useState } from "react";
import Card from "./components/Card";
import ChirpForm from "./components/ChirpForm";
import { v4 as uuidv4 } from 'uuid';
import moment from "moment";

const App = () => {
    
    const [chirps, setChirps] = useState([
    {
        id: uuidv4(),
        name: "Some Random Dude Who Found A Blue Box",
        message: "You guys are never going to believe this...",
        time: moment("1/01/2025 9:01 AM").format("M/DD/YYYY h:mm A").toString()
    },
    {
        id: uuidv4(),
        name: "Thomas the Developer",
        message: "please god just let this work i want to go to bed so bad",
        time: moment("5/16/2022 4:19 AM").format("M/DD/YYYY h:mm A").toString()
    },
    {
        id: uuidv4(),
        name: "Will the Optimist",
        message: "Happy New Year everybody! I'm so excited for this next year, I know it has great things in store!",
        time: moment("12/31/2019 11:59 PM").format("M/DD/YYYY h:mm A").toString()
    }]);

    return(
        <main className="container">
            <h1 className="text-light text-center">Chirper, the Twitter from Wish.com</h1>
            <section className="row mt-5 justify-content-center">
                <section className="col-md-6">
                    <ChirpForm chirps={chirps} setChirps={setChirps} />
                </section>
            </section>
            <section className="row justify-content-center">
                <h1 className="text-light text-center">Timeline</h1>
                <section className="col-md-6 justify-content-center">
                    {chirps.map((chirp) => (
                        <Card key={chirp.id} time ={chirp.time} name={chirp.name} message={chirp.message} />
                    ))}
                </section>
            </section>            
        </main>
    );
};

export default App;