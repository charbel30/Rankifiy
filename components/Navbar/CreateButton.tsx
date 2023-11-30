/*<Button className=" group    scale-[1.20] hover:scale-125 transform   overflow-hidden   border-2  border-foreground bg-background text-foreground shadow-[1px_2px_#323232] transition-all  ease-in active:translate-x-[2px] active:translate-y-[2px] active:shadow-[0px_0px_#323232]  dark:border-foreground dark:bg-secondary dark:text-foreground dark:shadow-[1px_2px_#dedede] dark:active:shadow-[0px_0px_#dedede]">
<span className=" mr-8   font-semibold transition-all duration-700 ease-in-out  group-hover:text-transparent">
  Create
</span>
<span className="absolute right-0 flex h-full w-[37px]  items-center justify-center bg-[#dedede] dark:bg-background transition-all duration-300 ease-in-out group-hover:w-28 ">
  <Icon
    width={20}
    className=" scale-105  items-center justify-center text-foreground transition-all duration-500 ease-in-out hover:!translate-x-2 hover:translate-y-0 dark:text-foreground "
    icon="ic:round-plus"
  ></Icon>
</span>
</Button>*/

import React, { useState } from 'react';
import styles from './CreateButton.module.css';
import { Button } from '@mantine/core';
import { Icon } from '@iconify-icon/react';

export default function CustomButton() {
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
