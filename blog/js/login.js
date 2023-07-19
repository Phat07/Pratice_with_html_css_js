console.log(11);
const login=document.getElementById('login-form')
const loginEmail=document.getElementById('loginEmail')
const loginPassword=document.getElementById('loginPassword')
const err1=document.getElementById('err')
login.addEventListener('submit',(e)=>{
  e.preventDefault();
  const email=loginEmail.value.trim()
  const password=loginPassword.value.trim()
  const form={email,password}
  API.post(`auth/login`,form).then(res=>{
    console.log(res.data);
    localStorage.setItem(ACCESS_TOKEN , res.data.access_token)
    window.location='index.html'
  }).catch(err =>{
    err1.innerHTML=`
    <div class="alert alert-danger alert-icon alert-dismissible fade show" role="alert">
        <i class="uil uil-times-circle"></i> Thông tin đăng nhập không đúng
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `
    console.log(err);
  })
})
