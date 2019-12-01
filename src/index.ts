// hreact

type Maybe<T> = T | null

const render = (element: HReactElement, container: Maybe<HTMLElement>) => {
  if (container === undefined || container === null) {
    throw new Error('Container should be is valid DOM element.')
  }
  const domElement = document.createElement(element.type)
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
  type: string
  props: {
    children: string[]
  }
}

const createElement = (type: string, props: any, children: string[] | string): HReactElement => {
  const childs = Array.isArray(children) ? children : [children]
  const processedChilds = childs.map(child => {
    return typeof child === 'object'
      ? child
      : createTextElement(child)
  })

  return {
    type,
    props: {
      // TODO: Handle children from props and convert them into array.
      ...props,
      children: processedChilds,
    },
  }
}
