import { useState, useRef, useEffect } from "react";
import {
  Card,
  Image,
  Text,
  Group,
  createStyles,
  Button,
  Modal,
  NumberInput,
  ActionIcon,
  NumberInputHandlers,
} from "@mantine/core";
import { businessGetProductById } from "../apiCall/CallApi";
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  modalTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: "teal",
      width: "35px",
      height: "1.5px",
      marginTop: theme.spacing.xs,
    },
  },

  imageSection: {
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `${"1px"} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginTop: theme.spacing.sm,
    fontSize: theme.fontSizes.xs,
    letterSpacing: "0.25px",
  },

  value: {
    fontSize: theme.fontSizes.xs,
    letterSpacing: "0.25px",
  },

  section: {
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    borderTop: `${"1px"} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export function MealDetail({ close, opened, id }) {
  const { classes } = useStyles();
  const [numberValue, setNumberValue] = useState(1);
  const handlers = useRef();
  const [product, setProduct] = useState({
    id: 0,
    productName: "string",
    description: "string",
    imageUrl: "string",
    recipe: "string",
    price: 0,
    cookingTime: 0,
    calories: 0,
    difficulty: "string",
    ingredients: [
      {
        id: 0,
        count: 0,
        unitOfMeasure: "string",
        ingredientName: "string",
      },
    ],
    tagIds: [0],
  });

  useEffect(() => {
    (async () => {
      try {
        let response = await businessGetProductById(id);
        setProduct(response);
        console.log(response);
      } catch (error) {
        console.error("Error:", error);
      }
    })();
  }, [id]);

  const mockdata = [
    { label: "Pişirme süresi:", value: product.cookingTime },
    { label: "Kalori:", value: product.calories },
    { label: "Zorluk:", value: product.difficulty },
  ];

  const features = mockdata.map((feature) => (
    <Card.Section key={feature.label}>
      <Text fz="sm" fw={500} c="dimmed" className={classes.label}>
        {feature.label}
      </Text>
      <Text fz="sm" className={classes.value}>
        {feature.value}
      </Text>
    </Card.Section>
  ));

  return (
    <Modal opened={opened} onClose={close} size="xl" withCloseButton={false}>
      <Image height={350} src={product.imageUrl} />
      <Card.Section position="apart" mt="md">
        <Text fz="xl" fw={550} className={classes.modalTitle}>
          {product.productName}
        </Text>
        <Group spacing={100}>{features}</Group>
      </Card.Section>
      <Card.Section className={classes.section} mt="md">
        <Text fz="lg" fw={500}>
          Açıklama
        </Text>
        <Text fz="md" fw={400}>
          {product.recipe}
        </Text>
      </Card.Section>
      <Card.Section className={classes.section} mt="sm">
        <Text fz="lg" fw={500}>
          İçindekiler
        </Text>
        {product.ingredients.map((ingredient) => {
          return (
            <Text fz="md" fw={400}>
              {ingredient.ingredientName}
            </Text>
          );
        })}
      </Card.Section>
      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
              ₺{product.price}
            </Text>
            <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
              porsiyon
            </Text>
          </div>
          <Group spacing={5}>
            <ActionIcon
              size={36}
              variant="default"
              onClick={() => handlers.current.decrement()}
            >
              –
            </ActionIcon>

            <NumberInput
              hideControls
              value={numberValue}
              onChange={(val) => setNumberValue(val)}
              handlersRef={handlers}
              max={10}
              min={0}
              styles={{ input: { width: "54px", textAlign: "center" } }}
            />

            <ActionIcon
              size={36}
              variant="default"
              onClick={() => handlers.current.increment()}
            >
              +
            </ActionIcon>
          </Group>
          <Button radius="sm" color="teal" style={{ flex: 1 }}>
            Sepete Ekle
          </Button>
        </Group>
      </Card.Section>
    </Modal>
  );
}
