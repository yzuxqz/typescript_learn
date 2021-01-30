let a: number = 10

function f() {
    // alert(this)
}

let box1 = document.getElementById('box1')
if (box1 !== null) {
    box1.addEventListener('click', function () {
        alert('hello')
    })
}

