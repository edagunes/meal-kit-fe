import {
    createStyles,
    Paper,
    Title,
    Text,
    TextInput,
    Button,
    Container,
    Group,
    Anchor,
    Center,
    Box,
  } from '@mantine/core';
  import { IconArrowLeft } from '@tabler/icons-react';
  
  const useStyles = createStyles((theme) => ({
    title: {
      fontSize: 26,
      fontWeight: 900,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
  
    controls: {
      [theme.fn.smallerThan('xs')]: {
        flexDirection: 'column-reverse',
      },
    },
  
    control: {
      [theme.fn.smallerThan('xs')]: {
        width: '100%',
        textAlign: 'center',
      },
    },
  }));
  
  export function AuthForgetPass() {
    const { classes } = useStyles();
  
    return (
      <Container size={460} my={30}>
        <Title className={classes.title} align="center">
          Şifrenizi mi unuttunuz?
        </Title>
        <Text color="dimmed" size="sm" align="center">
          Şifrenizi sıfırlamak için email girin
        </Text>
  
        <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
          <TextInput label="Email" placeholder="you@gmail.com" required />
          <Group position="apart" mt="lg" className={classes.controls}>
            <Anchor href="/login" color="dimmed" size="sm" className={classes.control}>
              <Center inline>
                <IconArrowLeft size={12} stroke={1.5} />
                <Box ml={5}>Giriş ekranına dön</Box>
              </Center>
            </Anchor>
            <Button className={classes.control}>Şifremi sıfırla</Button>
          </Group>
        </Paper>
      </Container>
    );
  }