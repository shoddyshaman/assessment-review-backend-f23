const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneBtn")
const goalBtn = document.getElementById("get-goals-btn")
const goalInput = document.getElementById("add-goal-input")
const goalSubmit = document.getElementById("goal-submit")

let parentEl = document.createElement('h2')

const BaseURL = 'http://localhost:4000'

const getCompliment = () => {
    axios.get(`${BaseURL}/api/compliment`)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get(`${BaseURL}/api/fortune`)
    .then(res => {
        alert(res.data)
    })
    .catch(err => console.log(err))
}

const deleteBtnFunc = (evt) => {
    console.log(evt.target.id)
    axios.delete(`${BaseURL}/api/goals/${evt.target.id}`)
    .then(res => displayList(res.data))
    .catch(err => console.log(err))
}

const displayList = (arr) => {
        parentEl.remove()
        parentEl.textContent = 'My Goals'
        let goalList = document.createElement('ul')
        parentEl.appendChild(goalList)
        arr.map(element => {
            let goalEl = document.createElement('li')
            let deleteBtn = document.createElement('button')
            deleteBtn.textContent = "delete me"
            deleteBtn.setAttribute('id',element.goalId)
            goalEl.textContent = element.goal
            goalEl.appendChild(deleteBtn)
            goalList.appendChild(goalEl)
            deleteBtn.addEventListener('click', deleteBtnFunc)
        })
        document.body.appendChild(parentEl)
}

const getGoals = () => {
    axios.get(`${BaseURL}/api/goals`)
    .then(res => {
        console.log(res.data)
        displayList(res.data)
    })
    .catch(err => console.log(err))
}

const addGoal = () => {
    let body = {
        goal:goalInput.value
    }
    axios.post(`${BaseURL}/api/goals`, body)
    .then(res => {
        console.log(res.data)
        displayList(res.data)
        goalInput.value = ''
    })
    .catch(err => console.log(err))
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
goalBtn.addEventListener('click', getGoals)
goalSubmit.addEventListener('click',addGoal)