import {
    createStyles,
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon
  } from '@mantine/core';
  import { IconCircleCheck } from '@tabler/icons-react';
  import image from '../images/healthy.png'
  
  const useStyles = createStyles((theme) => ({
    inner: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: `calc(${theme.spacing.xl} * 4)`,
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },
  
    content: {
      maxWidth: '600px',
      marginRight: `calc(${theme.spacing.xl} * 3)`,
  
      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        marginRight: 0,
      },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: '44px',
      lineHeight: 1.2,
      fontWeight: 900,
  
      [theme.fn.smallerThan('xs')]: {
        fontSize: '28px',
      },
    },
  
    control: {
      [theme.fn.smallerThan('xs')]: {
        flex: 1,
      },
    },
  
    image: {
      flex: 1,
  
      [theme.fn.smallerThan('md')]: {
        display: 'none',
      },
    },
  
    highlight: {
      position: 'relative',
      backgroundColor: theme.fn.variant({ variant: 'light', color: 'teal' }).background,
      borderRadius: theme.radius.sm,
      padding: `${'4px'} ${'12px'}`,
    },
  }));
  
  export function SectionOne() {
    const { classes } = useStyles();
    return (
        <Container size="lg" py="xl" mb={40}>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                Her zaman <span className={classes.highlight}>tazelik</span> <br />güvencesiyle
              </Title>
              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon color="teal" size={24} radius="lg">
                    <IconCircleCheck size={'12px'} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <b>Hem taze</b> – Sizin için en güvenilir markalarla çalışıyor ve en taze malzemeleri özenle seçiyoruz.
                </List.Item>
                <List.Item>
                  <b>Hem ekonomik</b> – Bütçenizi düşünüyor ve gurme lezzetlere ulaşmanızın en ekonomik yolunu sunuyoruz.
                </List.Item>
                <List.Item>
                  <b>Hem de nefis!</b> – Dünya mutfağından yemekleri kolayca size ulaştırmanın hazzını yaşıyoruz.
                </List.Item>
              </List>
  
              <Group mt={20}>
                <Button color="teal" radius="md" size="md" className={classes.control}>
                  Hemen Keşfet
                </Button>
              </Group>
            </div>
            <Image src={image} className={classes.image} radius="md" />
          </div>
        </Container>
    );
  }