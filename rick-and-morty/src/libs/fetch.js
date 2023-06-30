/* const API_DOMAIN = "https://rickandmortyapi.com/api";
const API_CHARACTER_ENDPOINT = "/character";
const API_EPISODE_ENDPOINT = "/episode";
const API_LOCATION_ENDPOINT = "/location"; */

const getSomeCharacters = async ({ids = []}) => {
    console.log("here:",`${process.env.REACT_APP_API_DOMAIN}${process.env.REACT_APP_API_CHARACTER_ENDPOINT}/${ids}`);
    return await fetch(`${process.env.REACT_APP_API_DOMAIN}${process.env.REACT_APP_API_CHARACTER_ENDPOINT}/${ids}`)
        .then((response) => response.json() )
        .then((characters) => {
            if (characters.error) return [];
            return characters.id
            ? [characters]
            : characters
        })
        .catch(() => []);
};

const getSomeEpisodes = async ({ids = []}) => {
    console.log("here:",`${process.env.REACT_APP_API_DOMAIN}${process.env.REACT_APP_API_EPISODE_ENDPOINT}/${ids}`);
    return await fetch(`${process.env.REACT_APP_API_DOMAIN}${process.env.REACT_APP_API_EPISODE_ENDPOINT}/${ids}`)
        .then((response) => response.json() )
        .then((episodes) => {
            if (episodes.error) return [];
            return episodes.id
            ? [episodes]
            : episodes
        })
        .catch(() => []);
};

const getSomeLocations = async ({ids = []}) => {
    console.log("here:",`${process.env.REACT_APP_API_DOMAIN}${process.env.REACT_APP_API_LOCATION_ENDPOINT}/${ids}`);
    return await fetch(`${process.env.REACT_APP_API_DOMAIN}${process.env.REACT_APP_API_LOCATION_ENDPOINT}/${ids}`)
        .then((response) => response.json() )
        .then((locations) => {
            if (locations.error) return [];
            return locations.id
            ? [locations]
            : locations
        })
        .catch(() => []);
};

export { getSomeCharacters, getSomeEpisodes, getSomeLocations };