import React, { useState } from 'react'


function WizardForm(props) {

    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('');
    return (
        <section>
            <h3>Wizard Form</h3>
            <form>
                <input  
                value={name}
                onChange={(e) => {
                    console.log(e.target.value);
                    setName(e.target.value);
                }}/>
                <br />
                <input  
                value={occupation}
                onChange={(e) => {
                    console.log(e.target.value);
                    setOccupation(e.target.value);
                }}/>
            </form>
        </section>
    )
}

export default WizardForm;