import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "../../Components/Form/Form";
import FormInput from "../../Components/FormInput/FormInput";
import FormTextarea from '../../Components/FormTextarea/FormTextarea'
import FormSelect from '../../Components/FormSelect/FormSelect'
import { addTask, getTask } from "../../Store/actions/taskAction";
import history from '../../Utils/history'
import moment from 'moment'
import queryString from 'query-string'
import { usePrevious } from '../../Utils/utils'
const prioriyData = [
    { value: 1, label: "Hight" },
    { value: 2, label: "Midium" },
    { value: 3, label: "Low" },
]
const taskStatusData = [
    { value: 1, label: "Completed" },
    { value: 0, label: "Incomplete" },]
const dateError = {
    fontSize: '12px',
    color: '#FF2929',
    paddingTop: '6px',
    display: 'block',
    border: 'none',
}
function AddTask(props) {
    const _details = useSelector(state => state.task.task.task)
    console.log("🚀 ~ file: addTask.js ~ line 32 ~ AddTask ~ name", _details, _details && new Date(_details.dueData))

    const [dueData, setdueData] = useState(_details && _details.dueData && new Date(_details.dueData) || "");
    const [taskStatus, settaskStatus] = useState(_details && _details.taskStatus || "");
    const [priority, setpriority] = useState(_details && _details.priority || "");
    const [taskName, settaskname] = useState(_details && _details.taskName || "")
    const [details, setdetails] = useState(_details && _details.details || '')
    const [submitted, setsubmitted] = useState(false)
    const prevState = usePrevious(props.taskDetails);

    useEffect(() => {
        const loc = props.location.search
        const query = queryString.parse(loc)
        if (query && query.id) {
            props.actions.getTask({ id: query.id })
        }
    }, [])

    // useEffect(() => {

    //     if (prevState && prevState.taskDetails && prevState.taskDetails.priority !== props.taskDetails && props.taskDetails.priority) {

    //         console.log(props.taskDetails.priority, ' 22222222222222222')
    //         setpriority(props.taskDetails.priority)

    //     }

    // }, [props.taskDetails])

    const onChange = (key, val) => {
    console.log("🚀 ~ file: addTask.js ~ line 63 ~ onChange ~ key, val", key, val)
        switch (key) {
            case "validity": {
                setdueData(val)
                break;
            }
            case "priority": {
                setpriority(val)
                break;
            }
            case "status": {
                settaskStatus(val)
                break;
            }
            case 'taskName':
                settaskname(val)
                break;
            case 'details':
                setdetails(val)
                break;
            default:
                break;
        }
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log('submites')
        // return true
        setsubmitted(true)
        // if (!taskName) setnameError('Name required')Password required')

        if (taskName && priority && dueData /*  && password && name && confirmPassword && (password === confirmPassword) */) {
            const data = {
                taskName,
                details,
                priority,
                dueData,
                taskStatus
            }
            console.log(data, 'register dorm')
            props.actions.addTask(data)
        }
    }
    const clear = (e) => {
        e.preventDefault()
        history.push('/tasks')
    }
    console.log(dueData, ' ffffffffffffffffffffff')
    return (
        <div className="SignInBoard" style={{ top: '60%' }}>

            <h2>Add Task</h2>
            <Form
                multi={true}
                resetvalue={'Cancel'}
                submit={true}
                submitname="Sumbmit"
                onClick={(e) => onSubmit(e)}
                reset={(e) => clear(e)}
            >
                <FormInput
                    label="Task Name"
                    placeholder="Enter Task"
                    type="text"
                    value={taskName}
                    onChange={(value) => onChange('taskName', value)}
                    required={true}
                    errormsg={submitted && !taskName ? "Required this field" : ""}
                />
                <FormTextarea
                    label="Details"
                    custom={true}
                    value={details}
                    onChange={(value) => onChange("details", value)}
                /*  disabled={true} */
                />

                <FormSelect
                    label="Priority"
                    custom={true}
                    isSearchable={true}
                    options={prioriyData}
                    onChange={(value) => onChange('priority', value)}
                    placeholder={"Search or Select Priority"}
                    classNamePrefix={"role"}
                    value={priority}
                    required={true}
                    error={submitted && !priority ? "Required this field" : ""}
                >
                </FormSelect>
                <FormSelect
                    label="Task Status"
                    custom={true}
                    isSearchable={true}
                    options={taskStatusData}
                    onChange={(value) => onChange('status', value)}
                    placeholder={"Search or Select Priority"}
                    classNamePrefix={"role"}
                    value={taskStatus}
                    required={true}
                    error={submitted && !taskStatus ? "Required this field" : ""}
                >
                </FormSelect>
                <div className="validity">
                    <label>Due Date<span style={{ color: 'red' }}>*</span></label>
                    <DatePicker
                        // locale="IST"
                        selected={dueData}
                        onChange={(value) => onChange("validity", value)}
                        // dateFormat="dd-MM-yyyy"
                    // dateFormat="yyyy/MM/dd"
                    // placeholderText={'Offer valid till'}
                    // customInput={<p className="putdate">{dueData ? moment(dueData).format('DD-MM-YYYY') : <span className="placeholder">Offer valid till</span>}</p>}
                    // minDate={new Date()}
                    // maxDate={new Date().setDate(new Date().getDate() + 30)}
                    />
                    {/* <span className="error">{validate(submitted, dueData, 'date')}</span> */}
                    <span style={dateError}>{submitted && !dueData ? "Required this field" : ""}</span>
                </div>

            </Form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    taskDetails: state.task.task.task,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        {
            addTask,
            getTask
        },
        dispatch
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddTask);