import { Link } from "react-router-dom";
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
  Text,
  Avatar,
  Drawer,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconHome,
  IconChevronDown,
  IconPlant,
  IconDropCircle,
  IconBreadOff,
  IconMilkOff,
  IconCarrot,
} from "@tabler/icons-react";
import { useState, useEffect } from "react";
import mainLogo from "../logo.png";
import { Cart } from "./Cart";
import { getTags } from "../apiCall/CallApi";

const HEADER_HEIGHT = 80;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

export function HeaderMenu() {
  const [isAut, setIsAut] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tagData, setTagData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let response = await getTags();
        // let data = response.json();
        setTagData(response);
        console.log(response);
      } catch (error) {
        console.error("Error:", error);
      }
    })();
  }, []);

  const links = [
    {
      link: "/",
      label: "Anasayfa",
    },
    {
      link: "/cuisine",
      label: "Kategoriler",
      links: tagData.map((tag) => {
        return {
          link: tag.id,
          label: tag.name,
        };
      }),
    },
  ];
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item component={Link} to={`/cuisine/${item.link}`} key={item.link}>
        {item.label}
      </Menu.Item>
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
      <Text component={Link} to="/" className={classes.link}>
        <Center>
          <span className={classes.linkLabel}>{"Anasayfa"}</span>
          <IconHome size={15} stroke={2} />
        </Center>
      </Text>
    );
  });

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={1}>
      <Container className={classes.inner} fluid>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
        <Image src={mainLogo} style={{ width: "115px", height: "30px" }} />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        {!isAut && (
          <Group>
            <Button
              component="a"
              rel="noopener noreferrer"
              href="/login"
              color="teal"
              variant="light"
            >
              Giriş
            </Button>
            <Button
              component="a"
              rel="noopener noreferrer"
              href="/signup"
              color="teal"
            >
              Kayıt Ol
            </Button>
          </Group>
        )}
        {isAut && (
          <Group>
            <Button color="red">Çıkış</Button>
            <Button onClick={() => setDrawerOpen(true)} color="teal">
              Sepet
            </Button>
          </Group>
        )}
      </Container>
      <Drawer
        opened={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title="Sepet"
        padding="md"
        size={700}
        position="right"
      >
        <Cart />
      </Drawer>
    </Header>
  );
}
