import React, { Component } from 'react'
import './FormTextarea.scss'
export default class FormTextarea extends Component {
    render() {
        return (
            <div className="FormTextarea">
                <label>{this.props.label} {this.props.required ? <span className="required">*</span> : ''}</label>
                <textarea disabled={this.props.disabled} onChange={this.props.onChange ? (e) => this.props.onChange(e.target.value) : ''} value={this.props.value} />
                {this.props.error? <span className="error">{this.props.selleraddress?'Address is Required.':'Required'}</span>:''}
            </div>
        )
    }
}
