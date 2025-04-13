import { Avatar, HStack, Text, VStack } from '@chakra-ui/react';

import avatar from '~/assets/user-account/photo.png';

export const CurrentUserInfo = () => (
    <HStack maxW='432px' spacing='12px' px='24px' height='48px'>
        <Avatar name='Oshigaki Kisame' src={avatar} />
        <VStack align='flex-start' spacing='auto'>
            <Text fontSize='18px' color='black' fontWeight='500' lineHeight='7'>
                Екатерина Константинопольская
            </Text>
            <Text fontSize='14px' color='blackAlpha.700' fontWeight='400' lineHeight='5'>
                @bake_and_pie
            </Text>
        </VStack>
    </HStack>
);
