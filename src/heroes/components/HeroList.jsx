import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";

export const HeroList = ({ publisher }) => {
    const heroes = getHeroesByPublisher(publisher);

    return (
        <ul>
            {/* 
            Cuando usamos heroes.map, retornamos una nueva lista de heroes donde la key es el id del heroe y el value es el superheroe, algo que podemos ver en el data.js
        */}
            <li>
                {heroes.map((hero) => (
                    <li key={hero.id}>{hero.superhero}</li>
                ))}
            </li>
        </ul>
    );
};
