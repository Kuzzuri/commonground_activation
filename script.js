const params = new URLSearchParams(window.location.search)
const uid = params.get('uid')
const token = params.get('token')

if(!uid | !token){
    document.body.innerHTML = "<h1>Invalid activation link.</h1>"
}else{
    console.log(uid)
    console.log(token)
}