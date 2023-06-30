import {
    Card,
    CardBody,
    Stack,
    Heading,
    Divider,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import props from "./props";

const Location = ({id, name, type, dimension, residents}) => {
    const charsIds = [];
    residents.forEach(residente => {
        charsIds.push(residente.match(/\d+\/*$/)[0]);
    });

    return (
        <Card size='md'>
                <CardBody>
                    <Stack mt='4' spacing='3'>
                        <Heading size='md'>{name} ({type})</Heading>
                        <Heading size='md'>{dimension}</Heading>
                        <Link to={`/characters/${charsIds}`}>
                            <Heading size='md'>Ver residentes</Heading>
                        </Link>
                    </Stack>
                </CardBody>
                <Divider />
        </Card>
    );
};

Location.propTypes = props.propTypes;
Location.defaultProps = props.defaultProps;

export default Location;