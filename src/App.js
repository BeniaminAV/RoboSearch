import { Component } from "react"
import "./App.css"
import InputField from "./components/search-box/inputField.components"
import CardList from "./components/card-list/card-list.components"

class App extends Component {
  constructor() {
    super()

    this.state = {
      peoples: [],
      searchPeople: "",
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return { peoples: users }
          },
          () => {
            console.log(this.state)
          }
        )
      })
  }

  onSearchChange = (event) => {
    const searchPeople = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchPeople }
    })
  }

  render() {
    const { peoples, searchPeople } = this.state
    const { onSearchChange } = this

    const findPeople = peoples.filter((people) => {
      return people.name.toLocaleLowerCase().includes(searchPeople)
    })
    return (
      <div className="App">
        <InputField
          type="search"
          className="search-box"
          placeholder="Search People"
          onChange={onSearchChange}
        />

        <CardList peoples={findPeople} />
      </div>
    )
  }
}

export default App
