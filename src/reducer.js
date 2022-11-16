export const initialState={
  user:null,
  playlist:[],
  playing:false,
  item:null,
  //remove after finished developing
  //token:"XiH4U8r7seZEk4gP7sxV0Y3_b10PUWJzCOz6th5KDH_khPl0g2JJvAht8x-uiaIODD9Wu3jwPgr4rFv5SDSgDyO7fCehl60cJyqH6iEHLZLyVGtVPfT9hcCLiGJdbVQF8xAT6SEpWo6GTnbX4F2LMdZCLiZpaBlofBtVb-T2ZZgjafdKuIKYT5ZwaV5Tdfepj6nneYkbJr",
};

const reducer=(state,action)=>{
//console.log(state);
//console.log(action);

switch(action.type){
  case "SET_USER":
    return{
      ...state,
      user:action.user,
    };

    case "SET_TOKEN":
      return{
        ...state,
        token:action.token
      };

    case "SET_PLAYLISTS":
      return{
      ...state,
      playlist:action.playlists
      };

      case "SET_DISCOVER_WEEKLY":
        return{
          ...state,
          discover_weekly:action.discover_weekly,
        }

    default:
      return state;
} 
};

export default reducer;