// hreact

type Maybe<T> = T | null
type Dict = { [key in string]: any }

export const render = (element: HReactElement, container: Maybe<HTMLElement>) => {
  if (container === undefined || container === null) {
    throw new Error('Container should be is valid DOM element.')
  }

  const domElement = element.type === 'λ_TEXT_ELEMENT'
    ? document.createTextNode('')
    : document.createElement(element.type)

  for (const prop in element.props) {
    if (prop !== 'children') {
      (domElement as Dict)[prop] = (element.props as Dict)[prop]
    }
  }

  for (const child of element.props.children) {
    render(child, domElement as HTMLElement)
  }

  container.appendChild(domElement)
}

const createTextElement = (text: string) => {
  return {
    type: 'λ_TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  }
}

type HReactElement = {
  type: FC | string
  props: {
    children: HReactElement[]
  }
}

type HReactChildren = Array<HReactElement | string>
export type FC<T = any> = (props: T) => HReactChildren

// TODO: Use JSX helper for create element.
export const createElement = (type: string, props: any, ...children: HReactChildren): HReactElement => {
  const childs = children.map(child => {
    return typeof child === 'object'
      ? child
      : createTextElement(child)
  })

  return {
    type,
    props: {
      // TODO: Handle children from props and convert them into array.
      ...props,
      children: childs,
    },
  }
}
