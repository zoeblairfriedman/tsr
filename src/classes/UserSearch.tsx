import { Component } from 'react'

interface UserSearchProps {
  users: {
    name: string
    age: number
  }[]
}

class UserSearch extends Component<UserSearchProps> {
}


export default UserSearch
