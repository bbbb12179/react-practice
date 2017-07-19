import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import * as accountMaintainActions from '../actions'
import { bindActionCreators } from 'redux'

const options = [
    {
        key: 'tw',
        text: '新臺幣',
        value: '新臺幣'
    }, {
        key: 'us',
        text: '美金',
        value: '美金'
    }
]

class InsertModal extends Component {
    render() {
        const { actions, dataForInsert } = this.props
        return (
            <Form widths='equal'>
                <Form.Group>
                    <Form.Field>
                        <Form.Select label='幣別' options={options} placeholder='幣別'
                            value = {dataForInsert.currencyName}
                            onChange={(e, result) => {
                                actions.insertValueChange("currencyName",result.value)
                            }} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input label='帳號名稱' placeholder='帳號名稱'
                            value = {dataForInsert.acntName}
                            onChange={e => {
                                actions.insertValueChange("acntName",e.target.value)
                            }} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input label='帳號狀態' placeholder='帳號狀態'
                            value = {dataForInsert.acntStatusName}
                            onChange={e => {
                                actions.insertValueChange("acntStatusName",e.target.value)
                            }} />
                    </Form.Field>
                </Form.Group>
                <Form.Group>
                    <Form.Field>
                        <Form.Input label='帳號性質' placeholder='帳號性質'
                            value = {dataForInsert.acntTypeName}
                            onChange={e => {
                                actions.insertValueChange("acntTypeName",e.target.value)
                            }} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input label='銀行帳號' placeholder='銀行帳號'
                            value = {dataForInsert.bankAccount}
                            onChange={e => {
                                actions.insertValueChange("bankAccount",e.target.value)
                            }} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input label='國家' placeholder='country'
                            value = {dataForInsert.countryName}
                            onChange={e => {
                                actions.insertValueChange("countryName",e.target.value)
                            }} />
                    </Form.Field>
                </Form.Group>
                <Form.Group>
                    <Form.Field>
                        <Form.Input label='銀行' placeholder='銀行'
                            value = {dataForInsert.bankName}
                            onChange={e => {
                                actions.insertValueChange("bankName",e.target.value)
                            }} />
                    </Form.Field>
                    <Form.Field></Form.Field>
                    <Form.Field></Form.Field>
                </Form.Group>
            </Form>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(accountMaintainActions, dispatch)
})

const mapStateToProps = (state, ownProps) => {
    return ({
        dataForInsert: state.dataForInsert
    })
}

InsertModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(InsertModal)

export default InsertModal;