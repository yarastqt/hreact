import { FC, render, createElement } from './index'

const Button: FC = ({ children }) => {
  return (
    <button>{children}</button>
  )
}

const App = () => {
  return (
    <div>
      Hello world
      <Button>Click me</Button>
    </div>
  )
}

render(App(), document.getElementById('root'))
