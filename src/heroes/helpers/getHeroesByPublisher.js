import { heroes } from '../data';

export const getHeroesByPublisher = (publicher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if (!validPublishers.includes(publicher)) {
        throw new Error(`${publicher} is not a valid publisher`);
    }
    return heroes.filter(hero => hero.publisher === publicher);
}