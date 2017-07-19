import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
		// 對於 OOP 物件導向程式設計熟悉的讀者應該對於 constructor 建構子的使用不陌生，事實上它是 ES6 的語法糖，骨子裡還是 prototype based 物件導向程式語言。透過 extends 可以繼承 React.Component 父類別。super 方法可以呼叫繼承父類別的建構子
		super(props);
    // this.addData = this.addData.bind(this);
    // this.deleteData = this.deleteData.bind(this);
    // this.changeInput = this.changeInput.bind(this);
		this.state = {
      inputValue: '',
      inputData: [],
      // tableData: []
    }
	}
  // addData(e){
  //   let {inputData,inputValue} = this.state;
  //   inputData.push(inputValue);
  //   var listItems = inputData.map(function(data,index,inputData){
  //       return (
  //         <tr key={index}>
  //           <td>{data}</td>
  //           <td>
  //             <input type="button" onClick={this.deleteData.bind(this,inputData[index])} value="刪除" />
  //           </td>
  //         </tr>
  //       )
  //     },this
  //   );
  //   this.setState({
  //     tableData: listItems,
  //     inputValue: ""
  //   });

  // }

  // deleteData(dataForDelete,e){
  //   let {inputData} = this.state;
  //   // console.log(e.target)
  //   var index = inputData.indexOf(dataForDelete);
  //   if (index > -1) {
  //     inputData.splice(index, 1);
  //   }

  //   var listItems = inputData.map((data,index,inputData) =>
  //     <tr>
  //       <td>{data}</td>
  //       <td>
  //         <input type="button" onClick={this.deleteData.bind(this,inputData[index])} value="刪除" />
  //       </td>
  //     </tr>
  //   );
  //   this.setState({tableData: listItems});
  // }

  // changeInput(e){
  //   this.setState({inputValue: e.target.value});
  // }

  render() {
    const {inputData,inputValue} = this.state

    return (
      <div>
        <input 
          type="text" 
          value={inputValue} 
          onChange={e => this.setState({ inputValue: e.target.value })} 
          id="enterText" 
        />
        <input type="button"  
          onClick={()=>{
            inputData.push(inputValue);
            this.setState({
              inputData: inputData,
              inputValue: ""
            });
          }} 
          value="新增" />
        <table>
          <tbody>
            {inputData.map((data,index,inputData) =>
              <tr key={index}>
                <td>{data}</td>
                <td>
                  <input type="button" 
                    onClick={() =>{
                      {/*console.log(data)*/}
                      inputData.splice(index, 1);
                      this.setState({inputData: inputData});
                    }} 
                    value="刪除" />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));