import { Link } from 'react-router-dom';

// Le pasamos el heroe como prop para que lo renderice en el componente HeroCard
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters, }) => {

    // Creamos la url de la imagen del heroe, en este caso usamos el id del heroe ya que el nombre del heroe es único
    const heroImageUrl = `/assets/heroes/${id}.jpg`;

    return (
        <div className="col">
            <div className="card">

                <div className="row no-gutters">
                    <div className="col-4">
                        <img
                            src={heroImageUrl}
                            className="card-img"
                            alt={superhero} />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>

                            {/* Si el alter_ego es distinto de characters, mostramos el characters, de esta forma evitamos mostrar el alter_ego doblemente */}
                            {/* Podemos ver que es cada propiedad dentro de el heroe en el data/data.js */}
                            {
                                (alter_ego !== characters) && <p>{characters}</p>
                            }

                            <div className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </div>

                            {/* Recordar siempre que la importacion de el Link en este caso debe de react-router-dom */}
                            <Link to={`/hero/${id}`}>Mas...</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
