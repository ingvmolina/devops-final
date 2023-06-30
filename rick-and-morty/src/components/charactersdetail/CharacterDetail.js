import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import '../../App.css'

import props from "./props";
const CharacterDetail = ({data}) => {
    const epIds = [];
    data.episode.forEach(ep => {
        epIds.push(ep.match(/\d+\/*$/)[0]);
    });
    var originId = "";
    var locationId = "";
    if (data.origin.url.length > 0){
        originId = data.origin.url.match(/\d+\/*$/)[0];
    }
    if (data.location.url.length > 0){
        locationId = data.location.url.match(/\d+\/*$/)[0];
    }
    return (
        <Card
                direction={{ base: 'column', sm: 'row' }}
                pt='2' pl='2'
                >
                    <Image size='md'
                    src={data.image}
                    alt={data.name}
                    borderRadius='md'
                    />
                <Stack>
                    <CardBody>
                        <Heading size='md'>{data.name} ({data.status})</Heading>
                        <Heading size='md' pt='1'>Especie: <span >{data.species}</span></Heading>
                        <Heading size='md' pt='1'>Tipo: {data.type}</Heading>
                        <Heading size='md' pt='1'>Genero: {data.gender}</Heading>
                        {originId.length === 0 ? (
                            <Heading size='md' pt='1'>Origen: {data.origin.name}</Heading>
                        ) : (
                            <Link to={`/locations/${originId}`}>
                                <Heading size='md' pt='1'>Origen: {data.origin.name}</Heading>
                            </Link>
                        )}
                        {locationId.length === 0 ? (
                            <Heading size='md' pt='1'>Ubicación: {data.location.name}</Heading>
                        ) : (
                            <Link to={`/locations/${locationId}`}>
                                <Heading size='md' pt='1'>Ubicación: {data.location.name}</Heading>
                            </Link>
                        )}
                        <Link to={`/episodes/${epIds}`}>
                            <Heading size='md' pt='1'>Episodios</Heading>
                        </Link>
                    </CardBody>
                </Stack>
            </Card>
    );
};

CharacterDetail.propTypes = props.propTypes;
CharacterDetail.defaultProps = props.defaultProps;

export default CharacterDetail;