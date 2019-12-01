import { FC, render, createElement } from './index'

const Button: FC = (props) => {
  return (
    <button>props.children</button>
  )
}

const App = () => {
  return (
    <div>
      Hello world
      <Button>Click me huh!</Button>
    </div>
  )
}

render(<App />, document.getElementById('root'))
