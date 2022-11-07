const update = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')
const clock = document.querySelector('#clock')
const submit = document.querySelector('#submit')

update.addEventListener('click', _ => {
  let timeM = document.querySelector('#timeM').value
  let nameM = document.querySelector('#nameM').value
  let shiftM = document.querySelector('#clockM').value
  console.log(timeM, nameM, shiftM)
    fetch('/times', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          time: timeM,
          name: nameM,
          shift: shiftM
        })
    })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        window.location.reload(true)
    })
})

deleteButton.addEventListener('click', _ => {
  console.log('working')
    fetch('/times', {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        shift: 'TIME IN',
        shift: 'TIME OUT'
      })
    })
      .then(res => {
        if (res.ok) return res.json()
    })
    .then(response => {
        if (response === 'No entry to delete') {
          messageDiv.textContent = 'Board is clear'
        } else {
          window.location.reload(true)
        }
      })
})