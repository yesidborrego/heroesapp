import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../../global"

//* librería opcional para obtener los query params de la URL
import queryString from "query-string";
import { getHeroesByName, HeroCard, SearchMsg } from "../..";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  //* librería opcional para obtener los query params de la URL
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const { searchText, onChangeInput } = useForm({
    searchText: q
  });

  const onSubmitSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1>Search Page</h1>
      <hr/>
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr/>

          <form onSubmit={ onSubmitSearch }>
            <input
              autoComplete="off"
              className="form-control"
              name="searchText"
              onChange={ onChangeInput }
              placeholder="Search a hero"
              type="text"
              value={ searchText }
            />

            <button
              className="btn btn-outline-primary mt-2"
            >
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr/>

          <SearchMsg
            numberHereos={ heroes.length }
            query={ q }
          />

          {
            heroes.map( hero => (
              <div
                className="mb-2"
                key={hero.id}
              >
                <HeroCard {...hero} />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
