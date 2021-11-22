import React, { useState } from "react";
import Form from '../../Components/Form/Form'
import FormInput from "../../Components/FormInput/FormInput";

function HomePage() {
    const [email, setEmail] = useState('')
    const onChange = (val) => {
        setEmail(val)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(email, 'submited dorm')
    }
    return (
        <div className="App">
            <p>
                Homepage
            </p>
            {/* <Form
                submit={true}
                submitname="Sign In"
                onClick={(e) => onSubmit(e)}
            >
                <FormInput
                    label="Email"
                    placeholder="Enter Email"
                    type="text"
                    value={email}
                    onChange={(value) => onChange(value)}
                // maxlength={10}
                // errormsg={submitted && mobError ? mobError : ""}
                />
            </Form> */}
        </div>
    );
}

export default HomePage;
