
// let heading = React.createElement(
//     'h3', { class: 'blink slide' }, 'creating react element its core thing in react'
// ); //object
// let root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)

let heading = React.createElement('div', { id: 'parent' }, [React.createElement('div', { id: 'child1' }, React.createElement('h2', { id: 'child1_head' }, 'I am head of child 1 ')), React.createElement('div', { id: 'child2' }, React.createElement('h2', { id: 'child2_head' }, 'I am head 2 of child 2'))]);

let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)