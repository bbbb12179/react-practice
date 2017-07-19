var databaseList = [
  {
    "pk": 1,
    "currencyName": "新臺幣",
    "acntName": "高雄收入",
    "acntStatusName": "正常",
    "acntTypeName": "活期存款",
    "bankAccount": "107540536584",
    "countryName": "台灣",
    "bankName": "中國信託商業銀 "
  }, {
    "pk": 2,
    "currencyName": "新臺幣",
    "acntName": "西門零用金戶",
    "acntStatusName": "正常",
    "acntTypeName": "活期存款",
    "bankAccount": "186530018350 ",
    "countryName": "台灣",
    "bankName": "中國信託商業銀 "
  }, {
    "pk": 3,
    "currencyName": "新臺幣",
    "acntName": "中壢收入",
    "acntStatusName": "正常",
    "acntTypeName": "活期存款",
    "bankAccount": "901540540653 ",
    "countryName": "台灣",
    "bankName": "中國信託商業銀 "
  }, {
    "pk": 4,
    "currencyName": "新臺幣",
    "acntName": "新竹收入",
    "acntStatusName": "正常",
    "acntTypeName": "活期存款",
    "bankAccount": "174540582189 ",
    "countryName": "台灣",
    "bankName": "中國信託商業銀 "
  }, {
    "pk": 5,
    "currencyName": "新臺幣",
    "acntName": "新竹零用金戶",
    "acntStatusName": "正常",
    "acntTypeName": "活期存款",
    "bankAccount": "118540446980 ",
    "countryName": "台灣",
    "bankName": "中國信託商業銀 "
  }, {
    "pk": 6,
    "currencyName": "美金",
    "acntName": "西門零用金戶",
    "acntStatusName": "正常",
    "acntTypeName": "活期存款",
    "bankAccount": "1234566 ",
    "countryName": "台灣",
    "bankName": "中國信託商業銀 "
  }
]

var pkValue = 7;

const initialState = {
  databaseList: databaseList,
  resultList: [],
  queryCondition: {},
  originalQueryCondition: {},
  dataForInsert: {},
  dataForUpdate: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'QUERY_VALUE_CNANGE':
      state.queryCondition[action.col] = action.value
      state.queryCondition = {...state.queryCondition}
      return {...state}

    case 'INSERT_VALUE_CNANGE':
      state.dataForInsert[action.col] = action.value
      state.dataForInsert = {...state.dataForInsert}
      return {...state}
    
    case 'UPDATE_VALUE_CNANGE':
      state.dataForUpdate[action.col] = action.value
      state.dataForUpdate = {...state.dataForUpdate}
      return {...state}

    case 'INSERT_MODAL_CONTROL':
      state.insertOpenModalFlag = action.insertOpenModalFlag
      return {...state}
    
    case 'UPDATE_MODAL_CONTROL':
      state.updateOpenModalFlag = action.updateOpenModalFlag
      return {...state}

    case 'DELETE_MODAL_CONTROL':
      state.deleteOpenModalFlag = action.deleteOpenModalFlag
      return {...state}

    case 'DO_INSERT':
      state.dataForInsert.pk = pkValue
      pkValue++
      state.databaseList.push(state.dataForInsert)
      state.dataForInsert = {}
      return {...state}

    case 'UPD_DATA_INIT':
      state.dataForUpdate = state.resultList[action.dataUpdIndex]
      return {...state} 
    
    case 'DO_UPDATE':
       state.databaseList = state.databaseList.map((data,index)=>{
        if(data.pk === action.pk){
          return state.dataForUpdate
        }else{
          return data
        }
      })
      return {...state}

    case 'DO_DELETE':
      state.databaseList.map((data,index,databaseList)=>{
        if(data.pk === action.pk){
          databaseList.splice(index, 1)
        }
        return data
      })
      return {...state}

    case 'DO_QUERY':{
      let { queryIsActive, originalQueryCondition, queryCondition, resultList, databaseList } = state
      queryIsActive = true
      originalQueryCondition = {...queryCondition}
      resultList = []
      databaseList.map((data, index, databaseList) => {
        if((!queryCondition.currencyName || (data.currencyName === queryCondition.currencyName)) &&
            (!queryCondition.acntName || (data.acntName === queryCondition.acntName)) &&
            (!queryCondition.acntStatusName || (data.acntStatusName === queryCondition.acntStatusName)) &&
            (!queryCondition.acntTypeName || (data.acntTypeName === queryCondition.acntTypeName)) &&
            (!queryCondition.bankAccount || (data.bankAccount === queryCondition.bankAccount)) &&
            (!queryCondition.countryName || (data.countryName === queryCondition.countryName)) &&
            (!queryCondition.bankName || (data.bankName === queryCondition.bankName))
          ) {
            resultList.push(data)
        }
        return data
      })
      //需用拓展符號回傳一個被複製過的新物件，因state(此為物件)，要被修改過(在此換成新物件)才會觸發render。
      return {...state, queryIsActive, originalQueryCondition, queryCondition, resultList} 
    }

    case 'DO_QUERY_AFTER_UPDATE':
      state.resultList = []
      state.databaseList.map((data, index, databaseList) => {
        if((!state.originalQueryCondition.currencyName || (data.currencyName === state.originalQueryCondition.currencyName)) &&
            (!state.originalQueryCondition.acntName || (data.acntName === state.originalQueryCondition.acntName)) &&
            (!state.originalQueryCondition.acntStatusName || (data.acntStatusName === state.originalQueryCondition.acntStatusName)) &&
            (!state.originalQueryCondition.acntTypeName || (data.acntTypeName === state.originalQueryCondition.acntTypeName)) &&
            (!state.originalQueryCondition.bankAccount || (data.bankAccount === state.originalQueryCondition.bankAccount)) &&
            (!state.originalQueryCondition.countryName || (data.countryName === state.originalQueryCondition.countryName)) &&
            (!state.originalQueryCondition.bankName || (data.bankName === state.originalQueryCondition.bankName))
          ) {
            state.resultList.push(data)
        }
        return data
      })
      return {...state}

    default:
      return {...state}
  }
}