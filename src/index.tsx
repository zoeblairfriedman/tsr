import { createRoot } from 'react-dom/client'
import UserSearch from './state/UserSearch'

const App = () => {
  return (
    <div>
      <UserSearch/>
    </div>
  )
}

// ReactDOM.render(<App/>, document.querySelector('#root'))
const container = document.querySelector('#root')
const root = createRoot(container!)
root.render(<App/>)
