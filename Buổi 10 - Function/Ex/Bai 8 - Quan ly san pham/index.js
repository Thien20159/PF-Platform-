let arr = []
let n = 5
let input
let result = document.getElementById('result')
let containerResult = document.getElementById('container-result')
let quantityList = document.getElementById('quantity-list')
let edit = document.getElementById('edit')
let deleteButton = document.getElementById('delete')
let clear = document.getElementById('clear')
function inputArray(obj) {
    input = obj.value
}
function add() {
    arr.push(input)
    display()
    // displayEdit()
    console.log(arr);
}
// display()
function display() {
    let str = ""
    let x = document.createElement('p')
    let btn = document.createElement('button')
    let btndelete = document.createElement('button')
    for (let i = 0; i < arr.length; i++) {
        str = arr[i] + "\t"
        quantityList.innerHTML = i + 1 + " product"
        x.innerText = str
        // x.className = i
        containerResult.appendChild(x)
        //
        // btn.innerText = "Delete"
        // btn.className = i
        btn.innerText = "Edit"
        btndelete.innerText = "Delete"
        edit.appendChild(btn)
        deleteButton.appendChild(btndelete)
    }

    // str += "\n"
    // x.innerText = str
    // containerResult.appendChild(x)
    // str.replace(/str/g, '')
}
// function displayEdit() {
//     let button = document.createElement('button')
//     for (let i = 0; i < arr.length; i++) {
//         button.innerText = "Edit"
//         edit.appendChild(button)
//     }
// }

