import { heroes } from "../data/heroes"

export const getHeroByName = (name = '') => {
    if(name===''){
        return [];
    }

    const superhero = name.toLowerCase();

    return heroes.filter(hero => (hero.superhero.toLowerCase().includes(superhero)));
}