import React,{Component} from 'react'
import { connect } from 'react-redux'
import * as countActions  from '../actions'
// import { addOne } from '../actions'
// import { removeOne } from '../actions'
import { bindActionCreators } from 'redux'


class AddCount extends Component{
    render() {
        const { actions } = this.props
        // const {addOne} = this.props
        // const {removeOne} = this.props
        // console.log("AddCount Props:")
        // console.log(this.props)
        return (
            <div>
                <input type="button" value="+" onClick={() => actions.addOne()}/>
                <input type="button" value="-" onClick={() => actions.removeOne()}/>
                {/*<input type="button" value="+" onClick={() => addOne()}/>
                <input type="button" value="-" onClick={() => removeOne()}/>*/}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(countActions, dispatch)
})


// const mapDispatchToProps = (dispatch) => {
//   return {
//     addOne: () => {
//       dispatch(addOne())
//     },
//     removeOne: () => {
//       dispatch(removeOne())
//     },
//   }
// }
// console.log(AddCount)
AddCount = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCount)
// console.log(AddCount)
export default AddCount