import { combineReducers } from 'redux'
import UserInventoryReducer from '../Components/ModeratorPage/UserInventory/UserInventoryReducer'
import RegisterUserReducer from '../Components/Register/RegisterUser/RegisterUserReducer'

const reducers = combineReducers({
  UserInventoryReducer,
  RegisterUserReducer
})

export default reducers;