import { Avatar, Table, Group, Text, ActionIcon, Button, createStyles, Container } from '@mantine/core';
import {
  IconTrash,
} from '@tabler/icons-react';
import { QuantityInput } from './QuantityInput'

const useStyles = createStyles((theme) => ({
  section: {
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    borderTop: `${'1px'} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

    const data = [
      {
        "avatar": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Robert Wolfkisser",
        "job": "Engineer",
        "email": "rob_wolf@gmail.com",
        "rate": 22
      },
      {
        "avatar": "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Jill Jailbreaker",
        "job": "Engineer",
        "email": "jj@breaker.com",
        "rate": 45
      },
      {
        "avatar": "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Henry Silkeater",
        "job": "Designer",
        "email": "henry@silkeater.io",
        "rate": 76
      },
      {
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Bill Horsefighter",
        "job": "Designer",
        "email": "bhorsefighter@gmail.com",
        "rate": 15
      },
      {
        "avatar": "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Jeremy Footviewer",
        "job": "Manager",
        "email": "jeremy@foot.dev",
        "rate": 98
      }
    ]

export function Cart() {
  const { classes } = useStyles();
  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          <Avatar size='xl' src={item.avatar} />
          <div>
            <Text fz="sm" fw={500}>
              {item.name}
            </Text>
          </div>
        </Group>
      </td>
      <td>
        <QuantityInput/>
      </td>
      <td>
        <Text fz="sm">${item.rate.toFixed(1)}</Text>
      </td>
      <td>
        <Group spacing={0} position="right">
          <ActionIcon color="red">
            <IconTrash size="1rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <Container>
        <Table sx={{ minWidth: 400 }} verticalSpacing="md">
            <tbody>{rows}</tbody>
        </Table>
        <Group spacing={100} className={classes.section}>
                    <div>
                        <Text fz="sm" c="dimmed">
                          Toplam:
                        </Text>
                        <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
                        $168.00
                        </Text>
                    </div>
                    <Button radius="sm" color="teal" style={{ flex: 1 }}>
                        Sepete Ekle
                    </Button>
                </Group>
    </Container>
  );
}