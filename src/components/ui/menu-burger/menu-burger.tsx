import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons';
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FC } from 'react';

export const MenuBurger: FC = () => (
    <Menu>
        <MenuButton
            as={IconButton}
            aria-label='Menu'
            icon={<HamburgerIcon />}
            colorScheme='lime'
            color='black'
            variant='ghost'
            p='12px'
            boxSize='48px'
        />
        <MenuList>
            <MenuItem icon={<AddIcon />} command='⌘T'>
                New Tab
            </MenuItem>
            <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                New Window
            </MenuItem>
            <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
                Open Closed Tab
            </MenuItem>
            <MenuItem icon={<EditIcon />} command='⌘O'>
                Open File...
            </MenuItem>
        </MenuList>
    </Menu>
);
