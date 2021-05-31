
let URL_DEV

if(process.env.NODE_ENV==='development'){
    URL_DEV='http://127.0.0.1:3007/api/v1/'
}else{
    URL_DEV='https://whispering-shore-12976.herokuapp.com/api/v1/'
}
export const URL=URL_DEV