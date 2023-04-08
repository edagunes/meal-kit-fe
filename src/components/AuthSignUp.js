import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';
  
  export function AuthSignUp() {
    return (
        <div>
            <Container size={420} my={40}>
                <Title align="center"
                sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
                >
                Kendini Bize Tanıt!
                </Title>
        
                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Email" placeholder="you@gmail.com" required />
                <PasswordInput label="Şifre" placeholder="Şifreniz" required mt="md" />
                <PasswordInput label="Şifre Tekrarı" placeholder="Şifreniz" required mt="md" />
                <Button fullWidth mt="xl">
                    Kayıt ol
                </Button>
                </Paper>
            </Container>
        </div>
    );
  }