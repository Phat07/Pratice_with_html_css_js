fetch("http://localhost:8080/api/authenticate", {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({ item })
})
  .then(resp => resp.json())
  .then(data => {
    if (data.message) {
    } else {
      localStorage.setItem("token", data.jwt)
      useDispatch(userPostFetch(data.item))
    }
  })