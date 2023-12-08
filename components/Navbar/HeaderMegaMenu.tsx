'use client';

import { Group, Button, Divider, Box, Burger, Drawer, ScrollArea, rem } from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';
import Websitelogo from '@/public/Websitelogo';
import classes from './HeaderMegaMenu.module.css';
import Link from 'next/link';
import { CreateButton, SignUpButton } from './CustomButtons';
import { ActionToggle } from '../ColorSchemeToggle/ActionToggle';

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box pb={70} pt={15}>
      <header className={`${classes.header}`}>
        <Group justify="space-between" h="100%" pl={20} pt="sm" pb="sm" pr={20} visibleFrom="md" >
          <Group h="100%" gap={75} justify="center" visibleFrom="md">
            <Link href="/" passHref>
              <Websitelogo />
            </Link>
            <Link href="/" passHref>
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

          <Group visibleFrom="md" gap={25} >
            <Button variant="default" className={classes.loginbutton}>
              Log in
            </Button>
            <Link href="/register" passHref>
              <SignUpButton />
            </Link>
            <ActionToggle />
          </Group>
        </Group>
        <Group justify="space-between" h="100%" pl={20} pt="sm" pb="sm" pr={20} hiddenFrom="md">
          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="md" />

          <Group hiddenFrom="md" justify="space-between" gap={50} pr={5}>
            <Link href="/" passHref>
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

          <Group justify="center" pb="xl" >
            <Link href="/">
              <Button variant="default" className={classes.mobilebutton}>
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button className={classes.mobilebutton}>Sign up</Button>
            </Link>
          </Group>
          <Group justify="center" grow pb="xl" px="md">
            
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
