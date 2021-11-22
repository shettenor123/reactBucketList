import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Select from "react-select";
import Form from '../../Components/Form/Form'
import history from "../../Utils/history";
import { addBucketTask } from "../../Store/actions/taskAction";

class BucketList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedOption: "" };
    }

    formateTask = () => {
        const { taskList } = this.props
        const data = taskList && taskList.length && taskList.map((val) => {
            return ({
                value: val._id, label: val.taskName
            })
        }
        )
        return data
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
    };
    onSubmit = (e) => {
        e.preventDefault()
        const { selectedOption } = this.state
        const data = {
            task: selectedOption && selectedOption.length && selectedOption.map((val) => val.value)
        }
        console.log(data, ' submited form')
        this.props.actions.addBucketTask(data)
        // history.push('/tasks')
    }
    clear = (e) => {
        e.preventDefault()
        history.push('/tasks')
    }

    render() {
        return (
            <div className="SignInBoard">
                <h2> Select task</h2>
                <Form
                    multi={true}
                    submit={true}
                    resetvalue={'Cancel'}
                    submitname="Create"
                    reset={(e) => this.clear(e)}
                    onClick={(e) => this.onSubmit(e)}
                >
                    <Select
                        isMulti
                        value={this.state.selectedOption}
                        onChange={this.handleChange}
                        options={this.formateTask()/* this.options */}
                    />
                </Form>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    taskList: state.task.allTask.task,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        {
            addBucketTask
        },
        dispatch
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(BucketList)