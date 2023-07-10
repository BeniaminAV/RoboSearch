import { useEffect, useState } from "react"
import "./App.css"
import CardList from "./components/card-list"
import Input from "./components/input"

const App = () => {
  const [people, setPeople] = useState([])
  const [searchField, setSearchField] = useState('')
  const [filterPeople, setFilterPeople] = useState(people)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setPeople(users))
  }, [])

  useEffect(() => {
    const randomFilter = people.filter((peoples) => {
      return peoples.name.toLocaleLowerCase().includes(searchField)
    })

    setFilterPeople(randomFilter)
  }, [people, searchField])

  const onChangeSearch = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  return (
    <div className="App">
    
      <Input
        type="search"
        placeholder="Search People"
        onChange={onChangeSearch}
        className="search-box"
      />

      <CardList people={filterPeople} />
    </div>
  )
}

export default App
