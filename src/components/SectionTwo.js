import {
    createStyles,
    Image,
    Container,
    Title,
    Col,
    Grid,
    List,
    ThemeIcon
  } from '@mantine/core';
  import { IconCircleCheck } from '@tabler/icons-react';
  import image from '../images/familydinner.jpeg'
  
  const useStyles = createStyles((theme) => ({
    inner: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: `calc(${theme.spacing.xl} * 4)`,
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },
  
    content: {
      maxWidth: '600px',
      paddingLeft: `calc(${theme.spacing.xl} * 3)`,
  
      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        paddingLeft: 0,
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
  
  export function SectionTwo() {
    const { classes } = useStyles();
    return (
        <Container size="lg" py="xl">
          <Grid className={classes.inner}>
            <Col span={12} md={6}>
                <Image src={image} className={classes.image} radius="md"/>
            </Col>
            <Col className={classes.content} span={12} md={6}>
              <Title className={classes.title} align="right">
                Sevdiklerinizle <span className={classes.highlight}>nefis</span> <br /> anılar biriktirin
              </Title>
              <List
                withPadding
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
                  <b>Birlikte yapın</b> – Ailenizle, eşinizle, arkadaşlarınızla beraber tarifleri adım adım izleyerek yemek yapmayı eğlenceli bir hale dönüştürün
                </List.Item>
                <List.Item>
                  <b>Sevdiklerinizi şaşırtın</b> – Misafirlerinize dünya mutfağının lezzetlerine kolayca ulaşmanın hazzını tattırın
                </List.Item>
                <List.Item>
                  <b>Sofranızı istediğiniz kadar büyütün</b> – İster 1 kişi, ister 20 kişiye yemek yapın
                </List.Item>
              </List>
            </Col>
          </Grid>
        </Container>
    );
  }