import { Box, Container, Flex, Grid, GridItem, Image, Spacer } from '@chakra-ui/react';
import { FC } from 'react';

import labelImage from '~/assets/brand/label.svg';
import logoIcon from '~/assets/brand/logo.svg';
import likeIcon from '~/assets/icon/actions/like.png';
import saveIcon from '~/assets/icon/actions/save.png';
import subscribeIcon from '~/assets/icon/actions/subscribe.png';
import { ActionButton } from '~/components/ui/buttons';
import { MenuBurger } from '~/components/ui/menu-burger';

import { Breadcrumbs } from './breadcrumb';
import { CurrentUserInfo } from './current-user-info';

export const Header: FC = () => (
    <Box as='header' maxH={{ base: '64px', xl: '80px' }}>
        <Container
            maxW={{ base: '100%' }}
            px={{ base: '16px', md: '20px', xl: 0 }}
            py={{ base: '8px', xl: '16px' }}
        >
            <Grid templateColumns={{ base: 'auto 1fr auto', xl: 'auto 1fr auto' }}>
                <GridItem alignContent='center'>
                    <Flex
                        align='center'
                        height={{ base: '32px' }}
                        gap={{ sm: '7px' }}
                        ml={{ xl: '16px' }}
                    >
                        <Image
                            src={logoIcon}
                            alt='yee-da-logo'
                            objectFit='cover'
                            boxSize={{ base: '32px' }}
                        />
                        <Image
                            display={{ base: 'none', md: 'inline-block' }}
                            src={labelImage}
                            alt='yee-da-logo'
                            objectFit='cover'
                            height={{ md: '25px' }}
                        />
                    </Flex>
                </GridItem>
                <GridItem
                    display={{ base: 'none', xl: 'block' }}
                    ml={{ xl: '128px' }}
                    alignContent='center'
                >
                    <Breadcrumbs />
                </GridItem>
                <GridItem display={{ base: 'none', xl: 'block' }} mr={{ xl: '56px' }}>
                    <CurrentUserInfo />
                </GridItem>
                <GridItem
                    display={{ base: 'flex', xl: 'none' }}
                    alignItems='center'
                    justifyContent='end'
                >
                    <Flex px={{ base: '8px', md: '16px' }} alignItems='flex-end'>
                        <ActionButton icon={{ src: saveIcon, alt: 'saved' }} value={185} />
                        <Spacer />
                        <ActionButton
                            icon={{ src: subscribeIcon, alt: 'subscribes' }}
                            value={589}
                        />
                        <Spacer />
                        <ActionButton icon={{ src: likeIcon, alt: 'likes' }} value={587} />
                    </Flex>
                </GridItem>
                <GridItem display={{ base: 'block', xl: 'none' }}>
                    <MenuBurger />
                </GridItem>
            </Grid>
        </Container>
    </Box>
);
