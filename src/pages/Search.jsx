// eslint-disable-next-line react/prop-types
export const Search = ({routeParams}) => {
  return (
    // eslint-disable-next-line react/prop-types
    <h1>Busqueda: {routeParams.query}</h1>
  )
}