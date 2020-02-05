const Component1 = props => ({ tag: 'div', attrs: {}, children: [props] })

let state = {
  count: 1
}

let dependences = [
  Component1
]

function changeState(data) {
  state.count = data
  dependences.forEach(deps => {
    const vNode = deps(state.count)
    console.log("TCL: changeState -> vNode", vNode)
  })
}

changeState(2)
