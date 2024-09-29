
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
                            <p className="card-text"></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

// Me quedé en el capítulo 126 minuto 7:24