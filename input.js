let data = [
    'sultik',
]

let wrapperlists = document.getElementById("wrapper-lists")
let btn = document.getElementById("btn")

function getData() {
    data.map((item) => {
        let list = document.createElement("btn")
        let inputRadio = document.createElement("input")
        let deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = 'X'
        deleteBtn.style.marginLeft = 'auto'
        deleteBtn.classList.add('deleteBtn')
        deleteBtn.addEventListener('click' , ()=>{
            
            if (confirm(`men yozuman meni ochirma iltimos😭😭😭😭😭😭😭😭😭😭😭  ` + item)) {
                data.splice(index, 1)
                getData()
            }
        })
        inputRadio.addEventListener('change' , ()=>{
            if (confirm(`men yozuman meni ochirma iltimos😭😭😭😭😭😭😭😭😭😭😭  ` + item)) {
              
                
            }
        })
        
        let text = document.createElement("p")
        text.innerHTML = item

        list.appendChild(inputRadio)
        list.appendChild(text)
        list.appendChild(deleteBtn)
        list.classList.add('list')
        inputRadio.type = "radio"
        wrapperlists.appendChild(list)
    })

}
getData()

btn.addEventListener('click', () => {
    if (input.value.trim()) {
        data.push(input.value)
        console.log(data);

        input.value = ''
        getData()
    } else {
        alert('iputga yozing')
    }
})