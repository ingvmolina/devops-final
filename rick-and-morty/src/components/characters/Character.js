import {
    Card,
    CardBody,
    Stack,
    Heading,
    Avatar,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import props from "./props";
const Character = ({id, name, image, episode}) => {
    return (
        <Link to={`/characters/${id}`}>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                pt='2' pl='2'
                >
                    <Avatar
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src={image}
                        alt={name}
                    />
                <Stack>
                    <CardBody>
                        <Heading size='md'>{name}</Heading>
                    </CardBody>
                </Stack>
            </Card>
        </Link>
    );
};

Character.propTypes = props.propTypes;
Character.defaultProps = props.defaultProps;

export default Character;