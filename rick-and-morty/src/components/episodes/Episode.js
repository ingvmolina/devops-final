import {
    Card,
    CardBody,
    Stack,
    Heading,
    Divider
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import props from "./props";

const Episode = ({id, name, air_date, episode, characters}) => {
    const charsIds = [];
    characters.forEach(character => {
        charsIds.push(character.match(/\d+\/*$/)[0]);
    });

    return (
        <Card size='md'>
            <CardBody>
                    <Stack mt='4' spacing='3'>
                    <Heading size='md'>{episode}: {name}</Heading>
                        <Heading size='md'>{air_date}</Heading>
                        <Link to={`/characters/${charsIds}`}>
                            <Heading size='md'>Ver personajes en este episodio</Heading>
                        </Link>
                    </Stack>
                </CardBody>
                <Divider />
        </Card>
    );
};

Episode.propTypes = props.propTypes;
Episode.defaultProps = props.defaultProps;

export default Episode;