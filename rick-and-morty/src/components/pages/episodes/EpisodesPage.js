import { useState, useEffect } from "react";
import { useParams } from "react-router";

import Episode from "../../episodes";
import { getSomeEpisodes } from "../../../libs/fetch";

import props from "./props";

const EpisodesPage = ({ids}) => {
    const [episodes, setEpisodes] = useState([]);

    const { id } = useParams();

    useEffect(() => {
    const param = (id) ? id : ids;
        getSomeEpisodes({ids: param}).then((episodesData) => setEpisodes(episodesData));
    }, [ids, id]);
    if(episodes.length < 1) return (<h1>El episodio no existe</h1>);
    return (
        <>
            {episodes.map((episode) =>{
                return (
                    <Episode
                        id={episode.id}
                        key={`EpisodesPage-Episode-${episode.id}`}
                        name={episode.name}
                        air_date={episode.air_date}
                        episode={episode.episode}
                        characters={episode.characters}
                    />
                );
            })}
        </>
    );
};

Episode.propTypes = props.propTypes;
Episode.defaultProps = props.defaultProps;

export default EpisodesPage;