'use client';
import cx from 'clsx';
import { ActionIcon, useMantineColorScheme, useComputedColorScheme, Group } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import classes from './ActionToggle.module.css';

export function ActionToggle() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <Group justify="center">
      <ActionIcon
        onClick={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
        className={cx({[classes.darkMode]: colorScheme === 'dark'})}
      >
        <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
        <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
      </ActionIcon>
    </Group>
  );
}