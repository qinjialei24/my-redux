export const Component1 = props => {
  console.log("Component1: props", props)
  return { tag: 'div', attrs: {}, children: [props] }
}

export const Component2 = props => {
  console.log("Component2: props", props)
  return { tag: 'div', attrs: {}, children: [props] }
}