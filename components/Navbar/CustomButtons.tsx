import Link from 'next/link';
import React, { useState } from 'react';
import styles from './CustomButton.module.css';
import { Button } from '@mantine/core';
import { Icon } from '@iconify-icon/react';

export function CreateButton() {
  const [translateValue, setTranslateValue] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    const randomX = Math.random() * 10 - 5; // Random value between -5 and 5
    const randomY = Math.random() * 10 - 5; // Random value between -5 and 5
    setTranslateValue({ x: randomX, y: randomY });
  };

  return (
    <Button
      className={styles.CreateButton}
      pr={40}
      variant="default"
      onMouseEnter={handleMouseEnter}
    >
      <span className={styles.Text}>Create</span>
      <span className={styles.IconContainer}>
        <Icon
          width={20}
          className={styles.Icon}
          icon="ic:round-plus"
          style={{ transform: `translate(${translateValue.x}px, ${translateValue.y}px)` }}
        />
      </span>
    </Button>
  );
}

export function SignUpButton() {
  return (
    <Button className={styles.signUpButton}>
      Register
      <Icon
        icon="material-symbols:arrow-forward-rounded"
        width={18}
        className={styles.signUpButtonicon}
      />
    </Button>
  );
}
