import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as accountMaintainActions from '../actions'
import { bindActionCreators } from 'redux'
import { Segment, Form, Button, Modal, Header } from 'semantic-ui-react'
import InsertModal from './InsertModal';
import '../css/styles.css'

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
// 幣別、帳號名稱、帳號狀態、帳號性質、銀行帳號、國家、銀行
class Query extends Component {

    openModal = () => {this.props.actions.insertModalControl(true)}
    closeModal = () => {this.props.actions.insertModalControl(false)}

    render() {
        const { actions, queryCondition, queryIsActive, insertOpenModalFlag } = this.props
        return (
            <Segment>
                <Form widths='equal'>
                    <Form.Group>
                        <Form.Field>
                            <Form.Select label='幣別' options={options} placeholder='幣別'
                                value = {queryCondition.currencyName}
                                onChange={(e, result) => {
                                    actions.queryValueChange("currencyName",result.value)
                                }} />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input label='帳號名稱' placeholder='帳號名稱'
                                value = {queryCondition.acntName}
                                onChange={e => {
                                    actions.queryValueChange("acntName",e.target.value)
                                }} />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input label='帳號狀態' placeholder='帳號狀態'
                                value = {queryCondition.acntStatusName}
                                onChange={e => {
                                    actions.queryValueChange("acntStatusName",e.target.value)
                                }} />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group>
                        <Form.Field>
                            <Form.Input label='帳號性質' placeholder='帳號性質'
                                value = {queryCondition.acntTypeName}
                                onChange={e => {
                                    actions.queryValueChange("acntTypeName",e.target.value)
                                }} />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input label='銀行帳號' placeholder='銀行帳號'
                                value = {queryCondition.bankAccount}
                                onChange={e => {
                                    actions.queryValueChange("bankAccount",e.target.value)
                                }} />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input label='國家' placeholder='country'
                                value = {queryCondition.countryName}
                                onChange={e => {
                                    actions.queryValueChange("countryName",e.target.value)
                                }} />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group>
                        <Form.Field>
                            <Form.Input label='銀行' placeholder='銀行'
                                value = {queryCondition.bankName}
                                onChange={e => {
                                    actions.queryValueChange("bankName",e.target.value)
                                }} />
                        </Form.Field>
                        <Form.Field></Form.Field>
                        <Form.Field></Form.Field>
                    </Form.Group>
                    <Form.Group>
                        <Form.Field className="FormField_Right">
                            <Modal
                                trigger={
                                    <Button icon='add' content='新增' onClick={this.openModal} />
                                }
                                closeOnDimmerClick={false}
                                open={insertOpenModalFlag}
                                onClose={this.closeModal}//按closeIcon觸發的事件
                                closeIcon='close'>
                                <Header icon='info circle' content='新增帳戶資料' />
                                <Modal.Content>
                                    <InsertModal />
                                </Modal.Content>
                                <Modal.Actions>
                                    <Button color='green' icon='checkmark' content='確認'
                                        onClick={() => {
                                            this.closeModal()
                                            if(queryIsActive){
                                                return(actions.doInsert(),actions.doQueryAfterUpdate())
                                            }
                                            return(actions.doInsert())
                                        }} />
                                    <Button color='red' icon='close' content='取消' onClick={this.closeModal} />
                                </Modal.Actions>
                            </Modal>
                            <Button floated="right" onClick={() => actions.doQuery()}>查詢</Button>
                        </Form.Field>
                    </Form.Group>
                </Form>
            </Segment>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(accountMaintainActions, dispatch)
})

const mapStateToProps = (state, ownProps) => {
    return ({
        ...state
    })
}

Query = connect(
    mapStateToProps,
    mapDispatchToProps
)(Query)

export default Query