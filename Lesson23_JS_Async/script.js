// const start = Date.now()
//
// while (true) {
//     const current = Date.now()
//
//     if (current - start > 5000) {
//         break
//     }
//     console.log(current)
// }
//
// let count = 0
// const interval = setInterval(() => {
//     console.log(count)
//     count++
//     if (count > 10){
//         clearInterval(interval)
//     }
// }, 1000)
//
// setTimeout(() => {
//     console.log('Hello from async code')
// }, 3000)

// let promise = new Promise((resolve, reject) => {
//     let random = Math.random()
//
//     if (random > 0.5) {
//         resolve(random)
//     } else {
//         reject(random)
//     }
// })
//     .then((data) => {
//         console.log(data)
//         return (data * 100).toFixed(0)
//     })
//     .then((result) => {
//         const p = document.createElement('p')
//         p.innerText = result
//
//         document.body.appendChild(p)
//     })
//     .catch(error => {
//         alert(error)
//     })
//     // .finally(() => {
//     //     alert('Done')
//     // })



// console.log(promise)
//
// console.log(promise)
//
// setTimeout(() => console.log(promise), 3000)

// const promise1 = new Promise((resolve) => {
//     setTimeout(() => resolve('first promise is done'), 2000)
// }).then(data => data.toUpperCase())
//
// const promise2 = new Promise((resolve) => {
//     setTimeout(() => resolve('second promise is done'), 1000)
// })
//
// // Promise.all([promise1, promise2])
// //     .then(() => {
// //         console.log('Оба процесса отработали')
// //     })
//
// Promise.any([promise1, promise2])
//     .then((result) => console.log('Один процесс отработал', result))

/*fetch('https://jsonplaceholder.typicode.com/users/')
    .then(data => data.json())
    .then(users => {
        users.forEach((user) => {
            const name = document.createElement('h1')
            name.innerText = user.name

            const email = document.createElement('p')
            email.innerText = user.email

            const address = document.createElement('h3')
            address.innerText = `${user.address.city} | ${user.address.street}`

            const person = document.createElement('div')
            person.appendChild(name)
            person.appendChild(email)
            person.appendChild(address)
            person.classList.add('person')

            document.body.appendChild(person)
        })
    })*/

    /*const getPostAndComment = async (commentID) => {
        const comment = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentID}`).then(date => date.json())
        
        const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${comment.postID}`).then(date => date.json())

        const user = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userID}`).then(date => date.json())

        

        console.log('comment: ${comment.body} 
        post:  ${post.body}
        author: ${user.name}`)

    }

    getPostAndComment(commentID:25)*/

    const getPostALLCommentsByCommentID = async (commnetID) => {
        const comment = await fetch(`https://jsonplaceholder.typicode.com/posts/${commentID}`) .then(date => date.json())

        const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${comment.postID}`) .then(date => date.json())

        return comments
    }

    getPostALLCommentsByCommentID(commentID).then(console.log)

















