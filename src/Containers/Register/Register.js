import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import './SignIn.scss'
import Form from "../../Components/Form/Form";
import FormInput from "../../Components/FormInput/FormInput";
import { registerUser } from "../../Store/actions/userAction";
import history from '../../Utils/history'
// import { useHistory } from "react-router-dom";

function Register(props) {
    // let history = useHistory();
    const [name, setname] = useState('')
    const [nameError, setnameError] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setemailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setpasswordError] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [confirmPasswordError, setconfirmPasswordError] = useState('')
    const [submitted, setsubmitted] = useState(false)
    const onChange = (key, val) => {
        switch (key) {
            case 'name':
                setname(val)
                break;
            case 'email':
                setEmail(val)
                break;

            case 'password':
                setPassword(val)
                break;

            case 'confirm':
                setconfirmPassword(val)
                break;
            default:
                break;
        }
    }
    const onSubmit = (e) => {
        e.preventDefault()
        setsubmitted(true)
        if (!name) setnameError('Name required')
        if (!email) setemailError('Email required')
        if (!password) setpasswordError('Password required')
        if (!confirmPassword) setconfirmPasswordError('Confirm Password required')
        if (password !== confirmPassword) {
            console.log(' not match------------')
            setconfirmPasswordError('Password and Confirm Password Not Match')
        }
        if (email && password && name && confirmPassword && (password === confirmPassword)) {
            const data = {
                email, password, name
            }
            console.log(data, 'register dorm')
            props.actions.registerUser(data)
        }
    }
    return (
        <div className="SignInBoard">
            <Form
                submit={true}
                submitname="Register"
                onClick={(e) => onSubmit(e)}
            >
                <FormInput
                    label="Name"
                    placeholder="Enter Name"
                    type="text"
                    value={name}
                    onChange={(value) => onChange('name', value)}
                    // maxlength={10}
                    errormsg={submitted && !name ? nameError : ""}
                />
                <FormInput
                    label="Email"
                    placeholder="Enter Email"
                    type="text"
                    value={email}
                    onChange={(value) => onChange('email', value)}
                    // maxlength={10}
                    errormsg={submitted && !email ? emailError : ""}
                />
                <FormInput
                    label="Password"
                    placeholder="Enter Password"
                    type="password"
                    value={password}
                    onChange={(value) => onChange('password', value)}
                    // maxlength={10}
                    errormsg={submitted && !password ? passwordError : ""}
                />
                <FormInput
                    label="Confirm Password"
                    placeholder="Enter Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(value) => onChange('confirm', value)}
                    // maxlength={10}
                    errormsg={submitted && !confirmPassword ? confirmPasswordError : password !== confirmPassword ? confirmPasswordError : ""}
                />
            </Form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user.register.register,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        {
            registerUser,
        },
        dispatch
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(Register);