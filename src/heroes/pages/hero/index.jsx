import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../";

export const HeroPage = () => {
  const { heroId } = useParams();
  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  const navigate = useNavigate();

  if(!hero) {
    return <Navigate to={"/marvel"} />
  }

  return (
    <div className="row mt-5">
      <div className="col-4 animate__animated animate__zoomIn">
        <img
          alt={ hero.superhero }
          className="img-thumbnail"
          src={`/assets/heroes/${ heroId }.jpg`}
        />
      </div>

      <div className="col-8">
        <h3>{ hero.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Alter ego:</strong> { hero.alter_ego }
          </li>
          <li className="list-group-item">
            <strong>Publisher:</strong> { hero.publisher }
          </li>
          <li className="list-group-item">
            <strong>First appearance:</strong> { hero.first_appearance }
          </li>
        </ul>

        <h5 className="mt-5">Characters</h5>
        <p>{ hero.characters }</p>

        <button
          className="btn btn-outline-primary"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  )
}
