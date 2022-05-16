import { createRoot } from 'react-dom/client'
// import UserSearch from './state/UserSearch'
// import EventComponent from './events/EventComponent'
import UserSearch from './refs/UserSearch'

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
