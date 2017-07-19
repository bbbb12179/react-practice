export const doQuery = () => ({
  type: 'DO_QUERY',
})

export const doQueryAfterUpdate = () => ({
  type: 'DO_QUERY_AFTER_UPDATE',
})

export const doInsert = () => ({
  type: 'DO_INSERT',
})

export const doUpdate = (dataPk) => ({
  type: 'DO_UPDATE',
  pk: dataPk
})

export const doDelete = (dataPk) => ({
  type: 'DO_DELETE',
  pk: dataPk
})

export const updDataInit = (index) => ({
  type: 'UPD_DATA_INIT',
  dataUpdIndex: index
})

export const insertModalControl = (openFlag) => ({
  type: 'INSERT_MODAL_CONTROL',
  insertOpenModalFlag: openFlag
})

export const updateModalControl = (openFlag) => ({
  type: 'UPDATE_MODAL_CONTROL',
  updateOpenModalFlag: openFlag
})

export const deleteModalControl = (openFlag) => ({
  type: 'DELETE_MODAL_CONTROL',
  deleteOpenModalFlag: openFlag
})

export const queryValueChange = (col,value) => ({
  type: 'QUERY_VALUE_CNANGE',
  col: col,
  value: value
})

export const insertValueChange = (col,value) => ({
  type: 'INSERT_VALUE_CNANGE',
  col: col,
  value: value
})

export const updateValueChange = (col,value) => ({
  type: 'UPDATE_VALUE_CNANGE',
  col: col,
  value: value
})