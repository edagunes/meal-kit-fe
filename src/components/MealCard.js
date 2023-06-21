import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  Container,
  SimpleGrid,
  createStyles,
} from "@mantine/core";
import { MealDetail } from "./MealDetail";
import { useDisclosure } from "@mantine/hooks";
import { getTagsByIds } from "../apiCall/CallApi";
import { useState, useEffect, use } from "react";
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

export function MealCard({
  id,
  productName,
  description,
  imageUrl,
  recipe,
  price,
  cookingTime,
  calories,
  difficulty,
  ingredients,
  tagIds,
}) {
  const [opened, { close, open }] = useDisclosure(false);
  const { classes, theme } = useStyles();
  const [tags, setTags] = useState([{ id: 0, name: "" }]);
  useEffect(() => {
    (async () => {
      try {
        let response = await getTagsByIds(tagIds);
        // let data = response.json();
        setTags(response);
        console.log(response);
      } catch (error) {
        console.error("Error:", error);
      }
    })();
  }, [tagIds]);
  return (
    <>
      <Card withBorder radius="md" p="md" className={classes.card}>
        <Card.Section>
          <Image src={imageUrl} alt={productName} height={180} />
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
          <Group position="apart">
            <Text size="lg" weight={500}>
              {productName}
            </Text>
          </Group>
          <Text size="sm" mt="xs">
            {description}
          </Text>
        </Card.Section>

        <Card.Section className={classes.section}>
          <Text mt="md" className={classes.label} color="dimmed">
            SENİN İÇİN MÜKEMMEL, EĞER İSTİYORSAN:
          </Text>
          <Group spacing={7} mt={5}>
            {tags.map((tag) => {
              return (
                <Badge
                  color={theme.colorScheme === "dark" ? "dark" : "gray"}
                  key={tag.id}
                >
                  {tag.name}
                </Badge>
              );
            })}
          </Group>
        </Card.Section>

        <Group mt="xs">
          <Button onClick={open} color="teal" radius="md" style={{ flex: 1 }}>
            Detay
          </Button>
        </Group>
      </Card>
      <MealDetail open={open} opened={opened} close={close} id={id} />
    </>
  );
}
