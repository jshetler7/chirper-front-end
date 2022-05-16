import { useState } from "react";
import { Card } from "./Card";

const NewChirp = (props) => {
    const [userName, setUserName] = useState('');
    const [chirpText, setChirpText] = useState('');

    
    
    const handleClick = (e) => {
        e.preventDefault();
        props.liftUser(userName);
        props.liftText(chirpText);
        // const newCard = <Card key={userName} user={userName} text={chirpText} />
        // console.log(newCard);
    }
    
    return(
        <div className= 'card bg-dark border border-1 border-light-50 m-1 shadow-lg'>
            <div className= 'card-body'>
                <form>
                <div className="row mb-1">
                    <div className="col-2">
                        <img src="https://picsum.photos/50/50" className="rounded-circle"/>
                    </div>
                    <div className="col-10 d-flex justify-content-between align-items-end">
                        <div className="card-title text-light">
                            <h5 className="m-0">
                                <input 
                                value={userName} 
                                className="bg-dark border-0 text-light" 
                                placeholder="Enter your username"
                                onChange={e => setUserName(e.target.value)} 
                                />
                            </h5>
                        </div>
                    </div>
                </div>
                    <div className="row g-3">
                        <div className="col-12 text-start input-group">
                            <textarea 
                            value={chirpText} 
                            className="form-control bg-dark text-light border-0 rows-3" 
                            placeholder="What's happening?"
                            onChange={e => setChirpText(e.target.value)}
                            />
                        </div>
                        <div className="col-2 justify-content-end">
                            <button className="btn btn-light" onClick={handleClick}>Chirp</button>
                        </div>
                    </div>    
                </form>
            </div>
        </div>
    );
}

export default NewChirp;