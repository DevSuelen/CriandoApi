const findUsuarios = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {

        json.forEach(usuario=> {
    

           console.log(usuario)
        })
    })
}
findUsuarios(usuario)


