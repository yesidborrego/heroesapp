import { Link } from "react-router-dom";

//* se pueden crear pequeños componentes para reutilizalos en este componente
/* const CharactersByHero = ({alter_ego, characters}) => {
  return (
    <p className="card-text font-12 my-1 w-100" style={{ height: "90px" }}>{ alter_ego !== characters ? characters : "" }</p>
  )
} */

export const HeroCard = ({
  alter_ego,
  id,
  superhero,
}) => {

  const imgHeroe = `./assets/heroes/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn d-flex">
      <div className="card mx-auto px-2" style={{width: "18rem"}}>
        <div className="row no-gutters">
          <div className="col-5 d-flex align-items-center px-2 py-1">
            <img src={ imgHeroe } className="card-img" alt={ superhero } />
          </div>

          <div className="col-7 p-0">
            <div className="card-body p-2 d-flex flex-column justify-content-between" style={{ height: "100%" }}>
              <div>
                <h5 className="card-title m-0">{ superhero }</h5>
                <p className="card-text font-12">{ alter_ego }</p>
              </div>
              <Link to={`/hero/${ id }`} className="font-14">
                More...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
