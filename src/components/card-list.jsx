import Card from "./card"

const CardList = ({ people }) => {
  return (
    <div className="card-list">
      {people.map((peoples) => {
        return (
          <div key={peoples.id}>
            <Card peoples={peoples} />
          </div>
        )
      })}
    </div>
  )
}

export default CardList
