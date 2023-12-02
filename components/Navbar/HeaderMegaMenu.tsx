'use client';

import {
  Group,
  Button,

  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';
import Websitelogo from './Websitelogo';
import classes from './HeaderMegaMenu.module.css';
import Link from 'next/link';
import CreateButton from './CreateButton';
import { ActionToggle } from '../ColorSchemeToggle/ActionToggle';


export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box pb={70} pt={15}>
      <header className={`${classes.header}`}>
        <Group justify="space-between" h="100%" pl={20} pt="sm" pb="sm" pr={20} visibleFrom="md">
          <Group h="100%" gap={100} justify="center" visibleFrom="sm">
            <Link href="/" passHref>
              <Websitelogo />
            </Link>
            <Link href="/" passHref className={classes.link}>

            <CreateButton />
            </Link>
          </Group>

          <Group h="100%" gap={10} visibleFrom="sm">
            <Link href="/" passHref className={classes.link}>
              Home
            </Link>

            <Link href="#" className={classes.link}>
              TierLists
            </Link>
            <Link href="#" className={classes.link}>
              Categories
            </Link>
            <Link href="#" className={classes.link}>
              About
            </Link>
              <Link href="#" className={classes.link}>
              Support
            </Link>

          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
            <ActionToggle />
            
          </Group>
        </Group>
        <Group justify="space-between" h="100%" pl={20} pt="sm" pb="sm" pr={20} hiddenFrom="md">
          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="md" />
        
          <Group hiddenFrom="md" justify='space-between' gap={50}   pr={5} >
                  <Link href="/" passHref >

        <CreateButton />
        </Link>
            <Link href="/" passHref>
              <Websitelogo />
            </Link>
          </Group>
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Menu"
        hiddenFrom="md"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="md" />
          <Link href="/" passHref className={classes.link}>
            Create
          </Link>
          <Link href="/" passHref className={classes.link}>
            Home
          </Link>
          <Link href="#" className={classes.link}>
            Categories
          </Link>
          <Link href="#" className={classes.link}>
            About
          </Link>
          <Link href="#" className={classes.link}>
            Support
          </Link>
          <Divider my="md" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
