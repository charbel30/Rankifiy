import cx from 'clsx';
import { ActionIcon, useMantineColorScheme, useComputedColorScheme, Group } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import classes from './ActionToggle.module.css';

export function ActionToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const handleClick = () => {
    const newColorScheme = computedColorScheme === 'light' ? 'dark' : 'light';
    setColorScheme(newColorScheme);
    document.body.className = newColorScheme;
  };

  return (
    <Group justify="center">
      <ActionIcon
        onClick={handleClick}
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
        className={classes.themeToggle}
      >
        <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
        <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
      </ActionIcon>
    </Group>
  );
}
