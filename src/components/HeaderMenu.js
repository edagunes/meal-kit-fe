
import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
  Image,
  Divider,
  Avatar,
  Drawer
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHome, IconChevronDown, IconPlant, IconDropCircle, IconBreadOff, IconMilkOff, IconCarrot, } from '@tabler/icons-react';
import { useState } from 'react';
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
    link: '/',
    label: 'Anasayfa'
  },
  {
    link: 2,
    label: 'Mutfaklar',
    links: [
      {
        link: 3,
        label: 'Avrupa Mutfağı'
      },
      {
        link: 4,
        label: 'Güney Amerika Mutfağı'
      },
      {
        link: 5,
        label: 'Güney Asya Mutfağı'
      },
      {
        link: 6,
        label: 'İtalya Mutfağı'
      },
      {
        link: 7,
        label: 'Kuzey Amerika Mutfağı'
      },
      {
        link: 8,
        label: 'Meksika Mutfağı'
      },
      {
        link: 9,
        label: 'Türk Mutfağı'
      },
      {
        link: 10,
        label: 'Uzak Doğu Mutfağı'
      }
    ]
  },
  {
    link: 3,
    label: 'Özel Beslenme',
    links: [
      {
        link: 1,
        label: 'Glutensiz',
        icon: <IconBreadOff size={14} />
      },
      {
        link: 2,
        label: 'Ketojenik',
        icon: <IconDropCircle size={14} />
      },
      {
        link: 3,
        label: 'Laktozsuz',
        icon: <IconMilkOff size={14} />
      },
      {
        link: 4,
        label: 'Vegan',
        icon: <IconPlant size={14} />
      },
      {
        link: 5,
        label: 'Vejetaryen',
        icon: <IconCarrot size={14} />
      }
    ]
  }
]

export function HeaderMenu() {
  const [ isAut, setIsAut ] = useState(true)
  const [ drawerOpen, setDrawerOpen] = useState(false);
  const { classes, theme } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item icon={item.icon} key={item.link}>{item.label}</Menu.Item>
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
        { !isAut && 
          <Group>
            <Button component="a" rel="noopener noreferrer" href="/login" color="teal" variant="light">Log in</Button>
            <Button component="a" rel="noopener noreferrer" href="/signup" color="teal" >Sign up</Button>
          </Group>
        }
        { isAut &&
          <Group>
            <Avatar color="green" />
            <Button onClick={() => setDrawerOpen(true)} color="teal">Sepet</Button>
          </Group>
        }
      </Container>
      <Drawer
        opened={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title="Register"
        padding="lg"
        size="lg"
        position="right"
      >
        {/* Drawer content */}
      </Drawer>
    </Header>
  );
}