const initState = {
  username:'',
  password:'',
  profilePic:'',
  userId:0
}

const AUTH_UPDATE = 'AUTH_UPDATE' 

export function auth_update(userId,username,profilePic){
  return{
    type:AUTH_UPDATE,
    payload:{
      userId:userId,
      username:username,
      profilePic:profilePic
    }
  }
}

export default function reducer(state=initState,action){
  switch(action.type){
    case AUTH_UPDATE:
    return {...state, Userid:action.payload.userId,username:action.payload.username,profilePic:action.payload.profilePic}
    default:return state
  }
}