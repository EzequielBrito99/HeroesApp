import { heroes } from "../data/heroes";

export const getHeroByPublisher = (publisher) => {
    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if(!validPublisher.includes(publisher)){
        throw new Error(`${publisher} no es un publisher valido`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
}