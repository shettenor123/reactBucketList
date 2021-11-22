import React, { useEffect } from "react";
import './index.scss'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllTask, deleteTask, getAllBucketTask, deleteBucketTask, getTask } from '../../Store/actions/taskAction'
import history from "../../Utils/history";
import moment from "moment";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import queryString from 'query-string'
function TaskList(props) {
    useEffect(() => {
        props.actions.getAllTask({})
        props.actions.getAllBucketTask({})
        // return () => {
        //     cleanup
        // }
    }, [])
    const addTaskHandler = () => {
        history.push('/addTask')
    }
    const editTaskHandler = (id) => {
        // props.actions.getTask({ id: id })
        history.push(`/editTask?id=${id}`)
    }
    const deleteHandle = (id) => {
        confirmAlert({
            title: 'Are you sure?',
            message: 'You want to delete this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => props.actions.deleteTask({ id })
                },
                {
                    label: 'No',
                    // onClick: () => alert('Click No')
                }
            ]
        });
        // props.actions.deleteTask({ id })
    }

    const deleteHandleBucket = (id) => {
        confirmAlert({
            title: 'Are you sure?',
            message: 'You want to delete this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => props.actions.deleteBucketTask({ id })
                },
                {
                    label: 'No',
                    // onClick: () => alert('Click No')
                }
            ]
        });
        // props.actions.deleteTask({ id })
    }
    const { taskList, bucketTaskList } = props
    return (
        <>
            <div className="SubscriptionList">
                <h2>Task List</h2>
                <button className="add-task" style={{ coloe: "#363463" }} onClick={() => addTaskHandler()}>Add Task</button>
                <table>
                    <tr style={{
                        borderTop: '1px solid #f6f6f67d',
                        borderBottom: '1px solid #f6f6f67d'
                    }}>
                        <th>Task Name</th>
                        <th>Priorty</th>
                        <th>Details</th>
                        <th>Due Date</th>
                        <th>Task Status</th>
                        <th>Created Date</th>
                        <th>Action</th>
                    </tr>
                    {taskList && taskList.length && taskList.map((rec) =>
                        <tr>
                            <td>{rec.taskName}</td>
                            <td>{rec.priority && rec.priority.label}</td>
                            <td>{rec.details}</td>
                            <td>{moment(rec.dueData).format('DD-MM-YYYY')}</td>
                            <td>{rec.taskStatus && rec.taskStatus.label}</td>
                            <td>{moment(rec.createdAt).format('DD-MM-YYYY')}</td>
                            <td><span style={{ cursor: 'pointer' }} onClick={() => editTaskHandler(rec._id)}>Edit</span> | <span style={{ cursor: 'pointer' }} onClick={() => deleteHandle(rec._id)}>Delete</span></td>
                        </tr>
                    ) || <p>No Task</p>
                    }


                </table>
            </div>

            <div className="SubscriptionList">
                <h2>Task Bucket List</h2>
                <button className="add-task" style={{ coloe: "#363463" }} onClick={() => { history.push('/addBucketList') }}>Add Bucket List</button>
                <table>
                    <tr style={{
                        borderTop: '1px solid #f6f6f67d',
                        borderBottom: '1px solid #f6f6f67d'
                    }}>
                        <th>Bucket</th>
                        <th>Created Date</th>
                        <th>Action</th>
                    </tr>
                    {bucketTaskList && bucketTaskList.length && bucketTaskList.map((rec) =>
                        <tr>
                            {/* <td>{rec.taskName}</td> */}
                            <td>{rec.task && rec.task.length && rec.task.map((val) => val.taskName).join(', ')}</td>
                            <td>{moment(rec.createdAt).format('DD-MM-YYYY')}</td>
                            <td>{/* <span style={{ cursor: 'pointer' }} onClick={() => editTaskHandler(rec._id)}>Edit</span> |  */}<span style={{ cursor: 'pointer' }} onClick={() => deleteHandleBucket(rec._id)}>Delete</span></td>
                        </tr>
                    ) || <p>No Bucket Task</p>
                    }


                </table>
            </div>
        </>
    )
}
const mapStateToProps = (state) => ({
    taskList: state.task.allTask.task,
    bucketTaskList: state.task.allBucketTask.bucketTask,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        {
            getAllTask,
            deleteTask,
            getAllBucketTask,
            deleteBucketTask,
            getTask
        },
        dispatch
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);