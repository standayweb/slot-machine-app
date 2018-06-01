import { combineReducers } from 'redux';
import { slotMachineReducer } from './slot-machine/reducer';

export default combineReducers({
  slotMachine: slotMachineReducer,
});
