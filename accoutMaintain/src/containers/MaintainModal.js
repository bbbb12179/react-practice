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

class MaintainModal extends Component {
    render() {
        const { actions, dataForUpdate } = this.props
        // console.log(dataForUpdate)
        return (
            <Form widths='equal'>
                <Form.Group>
                    <Form.Field>
                        <Form.Select label='幣別' options={options} placeholder='幣別'
                            value = {dataForUpdate.currencyName}
                            onChange={(e, result) => {
                                actions.updateValueChange("currencyName",result.value)
                            }} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input label='帳號名稱' placeholder='帳號名稱'
                            value={dataForUpdate.acntName}
                            onChange={e => {
                                actions.updateValueChange("acntName",e.target.value)
                            }} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input label='帳號狀態' placeholder='帳號狀態'
                            value={dataForUpdate.acntStatusName}
                            onChange={e => {
                                actions.updateValueChange("acntStatusName",e.target.value)
                            }} />
                    </Form.Field>
                </Form.Group>
                <Form.Group>
                    <Form.Field>
                        <Form.Input label='帳號性質' placeholder='帳號性質'
                            value={dataForUpdate.acntTypeName}
                            onChange={e => {
                                actions.updateValueChange("acntTypeName",e.target.value)
                            }} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input label='銀行帳號' placeholder='銀行帳號'
                            value={dataForUpdate.bankAccount}
                            onChange={e => {
                                actions.updateValueChange("bankAccount",e.target.value)
                            }} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input label='國家' placeholder='country'
                            value={dataForUpdate.countryName}
                            onChange={e => {
                                actions.updateValueChange("countryName",e.target.value)
                            }} />
                    </Form.Field>
                </Form.Group>
                <Form.Group>
                    <Form.Field>
                        <Form.Input label='銀行' placeholder='銀行'
                            value={dataForUpdate.bankName}
                            onChange={e => {
                                actions.updateValueChange("bankName",e.target.value)
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
        dataForUpdate: state.dataForUpdate
    })
}

MaintainModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(MaintainModal)

export default MaintainModal;