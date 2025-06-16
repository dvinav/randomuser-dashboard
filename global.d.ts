declare global {
  type RN = React.ReactNode
  type FC<T = {}> = React.FC<T> // Functional Component
  type LC<T = {}> = React.FC<{ children?: React.ReactNode } & T>
  type CE<T = {}> = React.ChangeEvent<T>
  type IE = HTMLInputElement
}

export {}
