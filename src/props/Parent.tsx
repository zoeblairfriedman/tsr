import { OtherChild } from './Child'

const Parent = () => {
  return <OtherChild color="pretty text here!" onClick={() => console.log("Clicked")}>blah</OtherChild>
}

export default Parent;
