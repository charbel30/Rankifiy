import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';
import Image from 'next/image'

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
         my noods 
        </Text>
      </Title>
      <div className={classes.image}>
        <Image
          src="/images/image1.jpeg"
          alt="Noodles image 1"
         width={512}
          height={512}
          objectFit="cover"
        />
      </div>
      <div className={classes.image}>
        <Image
          src="/images/image2.jpeg"
          alt="Noodles image 2"
          width={512}
          height={512}
          objectFit="cover"
        />
      </div>
      <div className={classes.image}>
        <Image
          src="/images/image3.jpeg"
          alt="Noodles image 3"
          width={512}
          height={512}
          objectFit="cover"
        />
      </div>
    </>
  );
}
