import {
  Avatar,
  Table,
  Group,
  Text,
  ActionIcon,
  Button,
  createStyles,
  Container,
} from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { QuantityInput } from "./QuantityInput";
import { useState, useEffect, useCallback } from "react";
import { placeOrder } from "../apiCall/CallApi";
const useStyles = createStyles((theme) => ({
  section: {
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    borderTop: `${"1px"} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export function Cart({ cart, setCart }) {
  const { classes } = useStyles();
  const [rows, setRows] = useState([]);
  console.log(cart);

  const [total, setTotal] = useState(0);

  const handleDeleteProduct = useCallback(
    (id) => {
      setCart(cart.filter((item) => item.id !== id));
    },
    [cart, setCart]
  );

  useEffect(() => {
    setRows(
      cart.map((item) => (
        <tr key={item.name}>
          <td>
            <Group spacing="sm">
              <Avatar size="xl" src={item.imageUrl} />
              <div>
                <Text fz="sm" fw={500}>
                  {item.name}
                </Text>
              </div>
            </Group>
          </td>
          <td>
            <QuantityInput />
          </td>
          <td>
            <Text fz="sm">₺{item.price.toFixed(1)}</Text>
          </td>
          <td>
            <Group spacing={0} position="right">
              <ActionIcon
                onClick={() => handleDeleteProduct(item.id)}
                color="red"
              >
                <IconTrash size="1rem" stroke={1.5} />
              </ActionIcon>
            </Group>
          </td>
        </tr>
      ))
    );
    let totalValue = 0;
    cart.forEach((element) => {
      totalValue += element.price;
    });
    setTotal(totalValue);
  }, [cart, handleDeleteProduct]);

  const handlePlaceOrder = async () => {
    try {
      const response = await placeOrder(
        cart.map((item) => {
          return {
            id: item.id,
            count: 1,
            price: item.price,
            ingredientList: item.ingredients.map((ingredient) => {
              return {
                id: ingredient.id,
                count: ingredient.id,
              };
            }),
          };
        })
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
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
            ₺{total}
          </Text>
        </div>
        <Button
          onClick={handlePlaceOrder}
          radius="sm"
          color="teal"
          style={{ flex: 1 }}
        >
          Satın Al
        </Button>
      </Group>
    </Container>
  );
}
