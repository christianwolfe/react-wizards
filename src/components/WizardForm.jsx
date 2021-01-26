import React, { useState } from 'react'


function WizardForm(props) {

    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [house, setHouse] = useState('');
    return (
        <section className="form-container">
            <h2>Wizard Form</h2>
            <form>
                <label>
                    Name:
                <input  
                placeholder="Hermoine Granger"
                value={name}
                onChange={(e) => {
                    console.log(e.target.value);
                    setName(e.target.value);
                }}/>
                </label>
                <br />
                <label>
                Occupation:
                <input  
                placeholder="Student"
                value={occupation}
                onChange={(e) => {
                    console.log(e.target.value);
                    setOccupation(e.target.value);
                }}/>
                </label>
                <br />
                <label>
                House:
                <input  
                placeholder="Gryffindor"
                value={house}
                onChange={(e) => {
                    console.log(e.target.value);
                    setHouse(e.target.value);
                }}/>
                </label>
            </form>
        </section>
    )
}

export default WizardForm;