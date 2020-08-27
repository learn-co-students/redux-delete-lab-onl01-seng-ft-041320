//FUNCTIONS ARE ACTION CREATORS || THE OBJECTS THEMSELVES ARE ACTIONS
export const addBand = (name) => ({ type: 'ADD_BAND', name })
export const deleteBand = (id) => ({ type: 'DELETE_BAND', id })