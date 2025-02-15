// javascript
const addButton = document.getElementById("addButton");
const deleteButton = document.getElementById("deleteButton");
const list = document.getElementById('chore-list');
const chore = document.getElementById('textInput');

let chores = JSON.parse(localStorage.getItem("chores") || []);

addButton.addEventListener("click", function() {
    const choreValue = chore.value.trim();
    if(chores.includes(chore.value)) {
        alert('Task already exists!');
    } else if (choreValue !== '') {
        alert('Input is empty!');
    }
    else {
        chores.push(choreValue);
        localStorage.setItem('chores', JSON.stringify(chores));
        display();

    }
    
})

function display () {
    list.innerHTML('');
    if(chores.length !== 0) {
        chores.forEach(chore => {
            const li = document.createElement('li');
            li.textContent = chore;
            list.append(li);
        });
    }
}

deleteButton.addEventListener('click', function() {
    chore.innerHTML('');
});

li.addEventListener("click", function(e) {
    let chore = e.target.textContent;
    const index = chores.indexOf(chore);
    if( index !== -1) {
        chores.splice(index, 1);
        localStorage.setItem("chores", JSON.stringify(chores));
    }
    display();
});


//calling this function first on every load
display();

