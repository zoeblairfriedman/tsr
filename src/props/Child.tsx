interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  )
}

// better way: This tells TS that it's going to be a react function component.
// also: we can use propTypes, contextTypes, etc
export const OtherChild: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      {color}
      <br></br>
      {children}
      <br></br>
      <button onClick={onClick}>Click me!</button>
    </div>
  )
}

