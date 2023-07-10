const Card = ({ peoples: { id, email, name } }) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set3&size=180x180`}
        alt={`names ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Card
