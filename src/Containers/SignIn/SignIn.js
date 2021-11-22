import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import './SignIn.scss'
import Form from "../../Components/Form/Form";
import FormInput from "../../Components/FormInput/FormInput";
import { registerUser, loginUser } from '../../Store/actions/userAction'

function SignIn(props) {

    const [email, setEmail] = useState('')
    const [emailError, setemailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setpasswordError] = useState('')
    const [submitted, setsubmitted] = useState(false)
    const onChangeEmail = (val) => {
        setEmail(val)
        // val && setemailError('')
    }
    const onChangePassword = (val) => {
        setPassword(val)
        // val && setpasswordError('')
    }
    const onSubmit = (e) => {
        e.preventDefault()
        setsubmitted(true)
        if (!email) setemailError('Email required')
        if (!password) setpasswordError('Password required')
        if (email && password) {
            const data = {
                email, password
            }
            props.actions.loginUser(data)
            console.log(data, 'submited dorm')
        }
    }
    return (
        <div className="SignInBoard">
            <Form
                submit={true}
                submitname="Sign In"
                onClick={(e) => onSubmit(e)}
            >
                <FormInput
                    label="Email"
                    placeholder="Enter Email"
                    type="text"
                    value={email}
                    onChange={(value) => onChangeEmail(value)}
                    // maxlength={10}
                    errormsg={submitted && !email ? emailError : ""}
                />
                <FormInput
                    label="Password"
                    placeholder="Enter Password"
                    type="password"
                    value={password}
                    onChange={(value) => onChangePassword(value)}
                    // maxlength={10}
                    errormsg={submitted && !password ? passwordError : ""}
                />
            </Form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        {
            registerUser,
            loginUser
        },
        dispatch
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);