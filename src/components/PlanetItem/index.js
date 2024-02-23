import './index.css'

const PlanetItem = planet => {
  const {name, imageUrl, description} = planet
  return (
    <div>
      <h1 className="heading">Planets</h1>
      <img src={imageUrl} alt={name} className="image" />
      <h1 className="planet-name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}
export default PlanetItem
