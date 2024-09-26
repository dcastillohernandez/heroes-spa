import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({ publisher }) => {

    // Creamos la constante heroes y la inicializamos con la función getHeroesByPublisher que nos va a retornar una lista de heroes por publisher
    const heroes = getHeroesByPublisher(publisher);

    return (
        <ul>
            {/* 
            Cuando usamos heroes.map, retornamos una nueva lista de heroes donde la key es el id del heroe y el value es el superheroe, algo que podemos ver en el data.js
        */}
            {heroes.map((hero) => (
                <li key={hero.id}>{hero.superhero}</li>
            ))}
        </ul>
    );
};
