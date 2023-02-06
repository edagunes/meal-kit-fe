import { IconHeart } from '@tabler/icons-react';
import { Card, Image, Text, Group, Badge, Button, ActionIcon, Container, SimpleGrid, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

const mockdata = [
    {
      title: 'Top 10 places to visit in Norway this summer',
      image:
        'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      country: 'August 18, 2022',
      description: 'Top 10 places to visit in Norway this summer',
      badges: [
        {
            label: '#vegan'
        },
        {
            label: '#vejetaryen'
        }
      ]
    },
    {
      title: 'Best forests to visit in North America',
      image:
        'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      country: 'August 27, 2022',
      description: 'Top 10 places to visit in Norway this summer',
      badges: [
        {
            label: '#vegan'
        },
        {
            label: '#vejetaryen'
        }
      ]
    },
    {
      title: 'Hawaii beaches review: better than you think',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      country: 'September 9, 2022',
      description: 'Top 10 places to visit in Norway this summer',
      badges: [
        {
            label: '#vegan'
        },
        {
            label: '#vejetaryen'
        }
      ]
    },
    {
      title: 'Mountains at night: 12 best locations to enjoy the view',
      image:
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      country: 'September 12, 2022',
      description: 'Top 10 places to visit in Norway this summer',
      badges: [
        {
            label: '#vegan'
        },
        {
            label: '#vejetaryen'
        }
      ]
    },
  ];

export function MealCard() {
  const { classes, theme } = useStyles();

  const cards = mockdata.map((card) => {
    const cardItems = card.badges.map((item) => (
    <Badge
      color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
      key={item.label}
    >
      {item.label}
    </Badge>
    ));

    return (
        <Card withBorder radius="md" p="md" className={classes.card}>
          <Card.Section>
            <Image src={card.image} alt={card.title} height={180} />
          </Card.Section>
    
          <Card.Section className={classes.section} mt="md">
            <Group position="apart">
              <Text size="lg" weight={500}>
                {card.title}
              </Text>
              <Badge size="sm">{card.country}</Badge>
            </Group>
            <Text size="sm" mt="xs">
              {card.description}
            </Text>
          </Card.Section>
    
          <Card.Section className={classes.section}>
            <Text mt="md" className={classes.label} color="dimmed">
              Perfect for you, if you want:
            </Text>
            <Group spacing={7} mt={5}>
              {cardItems}
            </Group>
          </Card.Section>
    
          <Group mt="xs">
            <Button radius="md" style={{ flex: 1 }}>
              Show details
            </Button>
          </Group>
        </Card>
      );
  });

  return (
    <Container size= 'lg' py="xl">
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}