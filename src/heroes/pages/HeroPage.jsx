import { useParams } from 'react-router-dom';

export const HeroPage = () => {

  // El id viene de la url, este es un parámetro dinámico que definimos anteriormente en el componente HeroesRoutes
  const { id } = useParams();
  console.log(id );

  return (
    <div>HeroPage</div>
  )
}
