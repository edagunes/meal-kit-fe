import { useState, useRef } from 'react';
import { Card, Image, Text, Group, createStyles, Button, Modal, NumberInput, ActionIcon, NumberInputHandlers} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    card: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    modalTitle: {
        '&::after': {
          content: '""',
          display: 'block',
          backgroundColor: 'teal',
          width: '35px',
          height: '1.5px',
          marginTop: theme.spacing.xs,
        },
    },
  
    imageSection: {
      padding: theme.spacing.md,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: `${'1px'} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
  
    label: {
      marginTop: theme.spacing.sm,
      fontSize: theme.fontSizes.xs,
      letterSpacing: '0.25px',
    },

    value: {
        fontSize: theme.fontSizes.xs,
        letterSpacing: '0.25px',
      },
  
    section: {
      paddingTop: theme.spacing.md,
      paddingBottom: theme.spacing.md,
      borderTop: `${'1px'} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
  }));
  
const mockdata = [
    { label: 'Pişirme süresi:', value: '30 dakika' },
    { label: 'Kalori:', value: '480' },
    { label: 'Zorluk:', value: 'Orta' },
];

export function MealDetail(
    {
    close,
    opened
    }
){
    const { classes } = useStyles();
    const [numberValue, setNumberValue] = useState(1);
    const handlers = useRef();
    const features = mockdata.map((feature) => (
        <Card.Section key={feature.label}>
            <Text fz="sm" fw={500} c="dimmed" className={classes.label}>{feature.label}</Text>
            <Text fz="sm" className={classes.value}>{feature.value}</Text>
        </Card.Section>
    ));

    return(
        <Modal opened={opened} onClose={close} size="xl" withCloseButton={false}>
            <Image height={350} src="https://www.seriouseats.com/thmb/_Bm7MuoZztRNzPjQv2W7ACWC7OQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20220217-pressure-cooker-mushroom-risotto-mariel-delacruz-082-cd5cc0b0b13f4239aeab86d88df6a1b0.jpg" />
            <Card.Section position="apart" mt="md">
                <Text fz="xl" fw={550} className={classes.modalTitle}>Mantarlı Risotto</Text>
                <Group spacing={100}>
                    {features}
                </Group>
            </Card.Section>
            <Card.Section className={classes.section} mt="md">
                <Text fz="lg" fw={500}>
                    Description
                </Text>
                <Text fz="md" fw={400}>
                It's not a coincidence that bistec sounds like best steak because this will be the best sliced steak sandwich you'll ever put together. You can show off your skills in the kitchen with this Culinary Collection of melty cheese, crispy fries, and tender savory steak all on one plate. Your friends and family will be full and impressed.
                </Text>
            </Card.Section>
            <Card.Section className={classes.section}>
                <Group spacing={30}>
                    <div>
                        <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
                        $168.00
                        </Text>
                        <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
                        porsiyon
                        </Text>
                    </div>
                    <Group spacing={5}>
                        <ActionIcon size={36} variant="default" onClick={() => handlers.current.decrement()}>
                            –
                        </ActionIcon>

                        <NumberInput
                            hideControls
                            value={numberValue}
                            onChange={(val) => setNumberValue(val)}
                            handlersRef={handlers}
                            max={10}
                            min={0}
                            styles={{ input: { width: '54px', textAlign: 'center' } }}
                        />

                        <ActionIcon size={36} variant="default" onClick={() => handlers.current.increment()}>
                            +
                        </ActionIcon>
                    </Group>
                    <Button radius="sm" color="teal" style={{ flex: 1 }}>
                        Sepete Ekle
                    </Button>
                </Group>
            </Card.Section>
        </Modal>
    )
}
