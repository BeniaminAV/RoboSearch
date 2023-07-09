import { Component } from "react"
import Card from "../card/card"
import "./card-list.css"

class CardList extends Component {
  render() {
    const { peoples } = this.props
    return (
      <div className="card-list">
        {peoples.map((people) => {
          return <Card people={people} />
        })}
      </div>
    )
  }
}

export default CardList
