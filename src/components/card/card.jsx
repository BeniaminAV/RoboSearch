import { Component } from "react"
import "./card.css"

class Card extends Component {
  render() {
    const { id, name, email } = this.props.people
    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set3&size=180x180`}
          alt={`people ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
  }
}

export default Card
