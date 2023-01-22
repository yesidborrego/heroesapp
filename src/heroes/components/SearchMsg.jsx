
export const SearchMsg = ({ query, numberHereos }) => {
  const showPrimary = !query && !numberHereos ? (
    <div className="alert alert-primary animate__animated animate__fadeIn">
      Search a hero
    </div>
  ) : null;

  const showDanger = query && !numberHereos ? (
    <div className="alert alert-danger animate__animated animate__fadeIn">
      The hero <strong>{`${query}`}</strong> not found
    </div>
  ) : null;

  return (
    <>
      { showPrimary || showDanger }
    </>
  )
}
