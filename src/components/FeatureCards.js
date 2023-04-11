import {
    createStyles,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container
  } from '@mantine/core';
  import { IconSoup, IconTruckDelivery, IconChefHat } from '@tabler/icons-react';
  
  const mockdata = [
    {
      title: 'Yemek Kiti Seç',
      description:
        'Arkadaşlarınla beraber eğlenirken hazırlayabileceğin ya da randevunu gurme bir lezzetle taçlandırabileceğin dünya mutfağından yemekleri keşfet.',
      icon: IconSoup,
    },
    {
      title: 'Senin için hazırlayıp teslim edelim',
      description:
        'Özenle seçtiğimiz, taptaze malzemeleri kapına kadar getirelim.',
      icon: IconTruckDelivery,
    },
    {
      title: 'Keyfini Çıkar!',
      description:
        'Hali hazırda porsiyonlanmış malzemeler ve takip etmesi kolay tarifle yemek yapmanın tadını çıkar.',
      icon: IconChefHat,
    },
  ];
  
  const useStyles = createStyles((theme) => ({
    title: {
      fontSize: '34px',
      fontWeight: 900,
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: '24px',
      },
    },
  
    description: {
      maxWidth: 600,
      margin: 'auto',
  
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: 'teal',
        width: '45px',
        height: '2px',
        marginTop: theme.spacing.sm,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  
    card: {
      border: `${'1px'} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    cardTitle: {
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: 'teal',
        width: '45px',
        height: '2px',
        marginTop: theme.spacing.sm,
      },
    },
  }));
  
  export function FeaturesCards() {
    const { classes, theme } = useStyles();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon size={'50px'} stroke={2} color="teal" />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <Container size="lg" py="xl" mb={45}>
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Nasıl çalışır?
        </Title>
  
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Kategorileri filtrele ⋅ Lezzetini seç ⋅ Kapına ulaştıralım
        </Text>
  
        <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }