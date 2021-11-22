import React, { Component } from 'react'
import './FormInput.scss'
import { Link } from 'react-router-dom'
export default class FormInput extends Component {
    render() {
        return (
            <div className="FormInput" id={this.props.id} style={this.props.parentstyle}>
                <label style={{ color: `${this.props.custom ? '#727781' : ''}`, fontSize: `${this.props.custom ? '16px' : ''}` }}>
                    {this.props.label}
                    {this.props.required ? <span className="required">*</span> : ''}
                    {this.props.preference ? <Link className="preference" to={this.props.path} onClick={() => this.props.action(true) || ""}> {this.props.namedprefernce} </Link> : ''}
                </label>
                <div className="input-blk">
                    <input pattern={this.props.pattern} style={this.props.style} onKeyPress={this.props.keyPress} className={this.props.class} /* autocomplete="new-password" */ 
                        maxLength={this.props.maxlength} type={this.props.type} onChange={(e) => this.props.onChange(e.target.value)} placeholder={this.props.placeholder} value={this.props.value} disabled={this.props.disabled} onFocus={this.props.onFocus} onBlur={this.props.onBlur}
                    />

                    {this.props.children}
                </div>

                {this.props.errormsg ? <span className="error">{this.props.errormsg}</span> : ''}
            </div>
        )
    }
}
