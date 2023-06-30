import { useState, useEffect } from "react";
import { useParams } from "react-router";

import Location from "../../locations";
import { getSomeLocations } from "../../../libs/fetch";

import props from "./props";

const LocationsPage = ({ids}) => {
    const [locations, setLocations] = useState([]);

    const { id } = useParams();

    useEffect(() => {
    const param = (id) ? id : ids;
        getSomeLocations({ids: param}).then((locationsData) => setLocations(locationsData));
    }, [ids, id]);
    if(locations.length < 1) return (<h1>La ubicación no existe</h1>);
    return (
        <>
            {locations.map((location) =>{
                return (
                    <Location
                        id={location.id}
                        key={`LocationsPage-Location-${location.id}`}
                        name={location.name}
                        type={location.type}
                        dimension={location.dimension}
                        residents={location.residents}
                    />
                );
            })}
        </>
    );
};

Location.propTypes = props.propTypes;
Location.defaultProps = props.defaultProps;

export default LocationsPage;