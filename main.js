// 2.
const obj = {
    username: "David_Jonas",
    age: "17",
    last_name: "Jonas",
    full_name: "David Jonas",
    orientation: "normal"
}

const obj2 = {
    ...obj,
    // distructorizacia
    key: "value",
    surname: "Ania",
    age: "99"
}
console.log(obj2)
// 1.

const arr0 = [1345663 , 46754 , 8975313]
const arr1 = [5234663 , 46754 , 89753]
const arr2 = [98545663 , 46754 , 89704963]
const arr3 = [54895663 , 46754 , 89753]
const arr4 = [656125663 , 467644 , 89753]

const arr5 = [...arr0, ...arr1, ...arr2, ...arr3, ...arr4, 325478, 4367697]
// 3.
const button = document.getElementById('button')
const input = document.getElementById('input')

button.onclick = () => {
    const div = document.createElement('div')
    const p = document.createElement('p')
    const hello = document.createElement("p")
    hello.innerText = "Hello,"

    p.setAttribute('class', 'text')
    div.setAttribute('class', 'block')
    p.innerText = input.value
    div.append(hello, p)
    document.body.append(div)
}

