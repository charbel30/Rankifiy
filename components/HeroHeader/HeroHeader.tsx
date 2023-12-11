import { Title, Text, Button, Container } from '@mantine/core';
import { Dots } from './Dots';
import classes from './HeroHeader.module.css';

export function HeroHeader() {
    return (
        <Container className={classes.wrapper} size={1400}>
          <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
          <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
          <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
          <Dots className={classes.dots} style={{ right: 0, top: 60 }} />
    
          <div className={classes.inner}>
            <Title className={classes.title}>
              Create Your Own{' '}
              <Text component="span" className={classes.highlight} inherit>
                Tier Lists
              </Text>{' '}
              Easily
            </Title>
    
            <Container p={0} size={600}>
              <Text size="lg" c="dimmed" className={classes.description}>
                Build and share your own tier lists with our easy-to-use interface. Perfect for ranking anything you want.
              </Text>
            </Container>
    
            <div className={classes.controls}>
              <Button className={classes.control} size="lg" variant="default" color="gray">
                Start Creating
              </Button>
              <Button className={classes.control} size="lg">
                View Popular Lists
              </Button>
            </div>
          </div>
        </Container>
      );
    }