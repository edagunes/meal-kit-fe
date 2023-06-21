import { FooterSocial } from "../components/FooterSocial";
import { HeaderMenu } from "../components/HeaderMenu";
import { MealCard } from "../components/MealCard";
import { useParams } from "react-router-dom";
import { getProductsByTag } from "../apiCall/CallApi";
import { useState, useEffect } from "react";
import { Container, SimpleGrid } from "@mantine/core";
const Cuisine = () => {
  const { tagId } = useParams();
  const tagArr = [tagId];

  const [productData, setProductData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        let response = await getProductsByTag(tagArr);
        // let data = response.json();
        setProductData(response);
        console.log(response);
      } catch (error) {
        console.error("Error:", error);
      }
    })();
  }, [tagArr]);

  return (
    <>
      <HeaderMenu />
      <Container size="lg" py="xl">
        <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          {productData.map((product) => {
            return (
              <MealCard
                id={product.id}
                productName={product.productName}
                description={product.description}
                imageUrl={product.imageUrl}
                recipe={product.recipe}
                price={product.price}
                cookingTime={product.cookingTime}
                calories={product.calories}
                difficulty={product.difficulty}
                ingredients={product.ingredients}
                tagIds={product.tagIds}
              />
            );
          })}
        </SimpleGrid>
      </Container>

      <FooterSocial />
    </>
  );
};

export default Cuisine;
