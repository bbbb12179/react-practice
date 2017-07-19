import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button, Modal, Header } from 'semantic-ui-react'
import * as accountMaintainActions from '../actions'
import { bindActionCreators } from 'redux'
import MaintainModal from './MaintainModal';
class MaintainTable extends Component {

    openUpdateModal = () => {this.props.actions.updateModalControl(true)}
    closeUpdateModal = () => {this.props.actions.updateModalControl(false)}
    openDeleteModal = () => {this.props.actions.deleteModalControl(true)}
    closeDeleteModal = () => {this.props.actions.deleteModalControl(false)}
    updatePk = ''
    deletePk = ''

    render() {
        const { actions, resultList, updateOpenModalFlag, deleteOpenModalFlag } = this.props
        return (
            <Table selectable celled >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>幣別</Table.HeaderCell>
                        <Table.HeaderCell>帳號名稱</Table.HeaderCell>
                        <Table.HeaderCell>帳號狀態</Table.HeaderCell>
                        <Table.HeaderCell>帳號性質</Table.HeaderCell>
                        <Table.HeaderCell>銀行帳號</Table.HeaderCell>
                        <Table.HeaderCell>國家</Table.HeaderCell>
                        <Table.HeaderCell>銀行</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {resultList.map((data, index) => {
                        return (
                            <Table.Row key={data.pk}>
                                <Table.Cell>{data.currencyName}</Table.Cell>
                                <Table.Cell>{data.acntName}</Table.Cell>
                                <Table.Cell>{data.acntStatusName}</Table.Cell>
                                <Table.Cell>{data.acntTypeName}</Table.Cell>
                                <Table.Cell>{data.bankAccount}</Table.Cell>
                                <Table.Cell>{data.countryName}</Table.Cell>
                                <Table.Cell>{data.bankName}</Table.Cell>
                                <Table.Cell textAlign="center">
                                     <Modal
                                        trigger={
                                            <Button onClick={() => {
                                                this.openUpdateModal()
                                                this.updatePk = data.pk;
                                                return(actions.updDataInit(index))
                                            }}>修改</Button>
                                        }
                                        open={updateOpenModalFlag}
                                        onClose={this.closeUpdateModal}//按closeIcon觸發的事件
                                        closeIcon='close'>

                                        <Header icon='info circle' content='修改帳戶資料' />
                                        <Modal.Content>
                                            <MaintainModal />
                                        </Modal.Content>
                                        <Modal.Actions>
                                            <Button color='green' icon='checkmark' content='確認'
                                                onClick={() => {
                                                this.closeUpdateModal()
                                                return(actions.doUpdate(this.updatePk),actions.doQuery())
                                            }} />
                                            <Button color='red' icon='close' content='取消' onClick={this.closeUpdateModal} />
                                        </Modal.Actions>
                                    </Modal>

                                     <Modal
                                        trigger={
                                            <Button onClick={() => {
                                                this.deletePk = data.pk
                                                this.openDeleteModal()
                                            }}>刪除</Button>
                                        }
                                        open={deleteOpenModalFlag}
                                        onClose={this.closeDeleteModal}//按closeIcon觸發的事件
                                        closeIcon='close'>

                                        <Header icon='info circle' content='刪除帳戶資料' />
                                        <Modal.Content>
                                            是否刪除此筆資料?
                                        </Modal.Content>
                                        <Modal.Actions>
                                            <Button color='green' icon='checkmark' content='確認'
                                                onClick={() => {
                                                this.closeDeleteModal()
                                                return(actions.doDelete(this.deletePk),actions.doQuery())
                                            }} />
                                            <Button color='red' icon='close' content='取消' onClick={this.closeDeleteModal} />
                                        </Modal.Actions>
                                    </Modal> 
                                    
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(accountMaintainActions, dispatch)
})

const mapStateToProps = (state, ownProps) => {
    return ({
        updateOpenModalFlag : state.updateOpenModalFlag,
        deleteOpenModalFlag : state.deleteOpenModalFlag,
        dataUpdIndex: state.dataUpdIndex,
        resultList: state.resultList 
    })
}

MaintainTable = connect(
    mapStateToProps,
    mapDispatchToProps
)(MaintainTable)

export default MaintainTable;