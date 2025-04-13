import { Box, Button, Flex, HStack, Image, type ImageProps } from '@chakra-ui/react';
import { FC } from 'react';

type ActionButtonProps = {
    value?: number;
    icon?: ImageProps;
};

export const ActionButton: FC<ActionButtonProps> = ({ value, icon }) => (
    <Button h='24px' variant='ghost' px='8px'>
        <Flex align='center'>
            <HStack>
                <Image src={icon?.src} alt={icon?.alt} boxSize={{ base: '12px' }} />
                <Box as='text' color='lime.600' fontSize='12px' fontWeight='600'>
                    {value}
                </Box>
            </HStack>
        </Flex>
    </Button>
);
