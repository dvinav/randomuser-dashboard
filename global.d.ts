declare global {
  type RN = React.ReactNode
  type FC = React.FC // Functional Component
  type LC<T = {}> = React.FC<{ children?: React.ReactNode } & T>
}

export {}
