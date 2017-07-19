import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
		super(props)
		this.state = {
      inputValue: '',
      inputData: []
    }
	}

  render() {
    const { inputData, inputValue } = this.state

    return (
      <div>
        <input 
          type="text" 
          value={inputValue} 
          onChange={e => this.setState({ inputValue: e.target.value })}
        />
        <input 
          type="button"  
          value="新增"
          onClick={() => this.setState({
            inputData: [...inputData, inputValue],
            inputValue: ''
          })}
        />
        <table>
          <tbody>
            {inputData.map((data, index) =>
              <tr key={index}>
                <td>{data}</td>
                <td>
                  <input 
                    type="button" 
                    value="刪除" 
                    onClick={() => {
                      inputData.splice(index, 1)
                      this.setState({ inputData })
                    }}
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));