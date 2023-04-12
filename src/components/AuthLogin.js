import { Link } from 'react-router-dom';
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Container,
    Group,
    Button,
  } from '@mantine/core';
  
  export function AuthLogin() {
    return (
        <div>
            <Container size={420} my={40}>
                <Title
                align="center"
                sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
                >
                Hoşgeldiniz!
                </Title>
        
                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Email" placeholder="you@gmail.com" required />
                <PasswordInput label="Şifre" placeholder="Şifreniz" required mt="md" />
                <Group position="apart" mt="lg">
                    <Checkbox label="Beni Hatırla" sx={{ lineHeight: 1 }} />
                    <Anchor component={Link} to="/forgetpass" size="sm">
                    Şifreni mi unuttun?
                    </Anchor>
                </Group>
                <Button fullWidth mt="xl">
                    Giriş
                </Button>
                </Paper>
            </Container>
        </div>
    );
  }