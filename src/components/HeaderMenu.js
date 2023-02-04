import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
  Image
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantine/ds';
import { IconHome, IconChevronDown } from '@tabler/icons-react';
import mainLogo from '../logo.png'

const HEADER_HEIGHT = 80;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

const links = [
  {
    link: 1,
    label: 'Menu'
  },
  {
    link: 4,
    label: 'Mutfaklar',
    links: [
      {
        link: 5,
        label: 'Uzak Doğu Mutfağı'
      },
      {
        link: 6,
        label: 'Meksika Mutfağı'
      },
      {
        link: 6,
        label: 'Türk Mutfağı'
      }
    ]
  },
  {
    link: 7,
    label: 'Özel Beslenme',
    links: [
      {
        link: 8,
        label: 'Vegan'
      },
      {
        link: 9,
        label: 'Vejetaryen'
      }
    ]
  }
]

export function HeaderMenu() {
  const { classes, theme } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        <Center>
          <span className={classes.linkLabel}>{link.label}</span>
          <IconHome size={15} stroke={2} />
        </Center>
      </a>
    );
  });

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={1}>
      <Container className={classes.inner} fluid>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
          <Image src={mainLogo} style={{ width: "115px", height: "30px" }} />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Group>
          <Button component="a" rel="noopener noreferrer" href="/login" color="teal" variant="light">Log in</Button>
          <Button color="teal" >Sign up</Button>
        </Group>
      </Container>
    </Header>
  );
}