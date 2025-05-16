//2.1
const nuevoDiv = document.createElement('div')
document.body.appendChild(nuevoDiv)

//2.2
const nuevoDiv2 = document.createElement('div')
document.body.appendChild(nuevoDiv2)
const nuevoP = document.createElement('p')
nuevoDiv2.appendChild(nuevoP)

//2.3
const nuevoDiv3 = document.createElement('div')
for (let i = 1; i <= 6; i++) {
  const nuevoP2 = document.createElement('p')
  nuevoDiv.appendChild(nuevoP2)
}
document.body.appendChild(nuevoDiv)

//2.4
const nuevoP3 = document.createElement('p')
nuevoP3.textContent = 'Soy dinámico!'
document.body.appendChild(nuevoP3)

//2.5
document.querySelector('.fn-insert-here').textContent = 'Wubba Lubba dub dub'

//2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ulList = document.createElement('ul')

for (let i = 0; i < apps.length; i++) {
  const li = document.createElement('li')
  li.textContent = apps[i]
  ulList.appendChild(li)
}

document.body.appendChild(ulList)

//2.7
const removeNode = document.querySelectorAll('.fn-remove-me')
removeNode.forEach((element) => {
  element.remove()
})

//2.8
const nuevoP4 = document.createElement('p')
nuevoP4.textContent = 'Voy en medio!'
const divs = document.querySelectorAll('div')
divs[0].after(nuevoP4)

//2.9
const divs2 = document.querySelectorAll('.fn-insert-here')
for (i = 0; i <= divs2.length; i++) {
  const nuevoP5 = document.createElement('p')
  nuevoP5.textContent = 'Voy dentro!'
  divs2[i].appendChild(nuevoP5)
}
