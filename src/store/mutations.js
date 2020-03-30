import {
 UPDATE_LOADING,UPDATE_HEADE,UPDATE_NAV,UPDATE_BACK,UPDATE_BOTTOM
} from './types';

export default {
  [UPDATE_HEADE]:(state,payload)=>state.bHeade=payload,
	[UPDATE_NAV]:(state,payload)=>state.bNav=payload,
	[UPDATE_BACK]:(state,payload)=>state.bBack=payload,
	[UPDATE_BOTTOM]:(state,payload)=>state.bBottom=payload,
  [UPDATE_LOADING]:(state,payload)=>state.bLoading=payload,
}
