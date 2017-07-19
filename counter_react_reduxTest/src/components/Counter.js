import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddCount from '../containers/AddCount'

class Counter extends Component {

  render() {
    // console.log(this.props)
    const { count } = this.props
    return (
      <div>
       <AddCount/>
        Clicked: {count} times
        {' '}
        {/*<button className={`ui red ${disableCondition ? 'disable' : ''} button`}>
        </button>

        <Button
          color='red'
          disable={disableCondition}
        >
          </Button>*/}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    count: state
})

Counter = connect(
  mapStateToProps
)(Counter)

export default Counter

