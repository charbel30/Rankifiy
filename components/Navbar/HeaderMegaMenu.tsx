'use client';

import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';
import Websitelogo from './Websitelogo';
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from '@tabler/icons-react';
import classes from './HeaderMegaMenu.module.css';
import Link from 'next/link';
import CreateButton from './CreateButton';

const mockdata = [
  {
    icon: IconCode,
    title: 'Open source',
    description: 'This Pokémon’s cry is very loud and distracting',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargle’s tail secretions changes',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
  {
    icon: IconFingerprint,
    title: 'Security',
    description: 'The shell’s rounded shape and the grooves on its.',
  },
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'This Pokémon uses its flying ability to quickly chase',
  },
  {
    icon: IconNotification,
    title: 'Notifications',
    description: 'Combusken battles with the intensely hot flames it spews',
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={48} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={70} pt={15}>
      <header className={`${classes.header}`}>
        <Group justify="space-between" h="100%" pl={20} pt="sm" pb="sm" pr={20} visibleFrom="md">
          <Group h="100%" gap={100} justify="center" visibleFrom="sm">
            <Link href="/" passHref>
              <Websitelogo />
            </Link>
            <CreateButton />
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
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </Group>
        <Group justify="space-between" h="100%" pl={20} pt="sm" pb="sm" pr={20} hiddenFrom="md">
          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="md" />
          <Group hiddenFrom="md">
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
