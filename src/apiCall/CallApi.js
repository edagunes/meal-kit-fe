const URL = "http://localhost:";
const PORT = "8085";
const ORDER_PORT = "8090";
const ORDER_ENDPOINT = "/api/v1";
const PRODUCT_ENDPOINT = "/api/product";
const TAG_ENDPOINT = "/api/tag";
const BUSINESS_ENDPOINT = "/api/business";

export const getProductById = async (productId) => {
  try {
    const response = await fetch(
      `${URL}${PORT}${PRODUCT_ENDPOINT}/getProductById/${productId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getProductsByTag = async (tags) => {
  try {
    const response = await fetch(
      `${URL}${PORT}${PRODUCT_ENDPOINT}/getProductsByTag`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tags),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getProductsById = async (productIdList) => {
  try {
    const response = await fetch(
      `${URL}${PORT}${PRODUCT_ENDPOINT}/getProductsById`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productIdList),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getTagsByIds = async (tagIdList) => {
  try {
    const response = await fetch(`${URL}${PORT}${TAG_ENDPOINT}/getTagsByIds`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tagIdList),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getTagById = async (tagId) => {
  try {
    const response = await fetch(
      `${URL}${PORT}${TAG_ENDPOINT}/getTagById/${tagId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getTags = async () => {
  try {
    const response = await fetch(`${URL}${PORT}${TAG_ENDPOINT}/getTags`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const businessGetProductById = async (productId) => {
  try {
    const response = await fetch(
      `${URL}${PORT}${BUSINESS_ENDPOINT}/getProductById/${productId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
export const placeOrder = async (products) => {
  try {
    const response = await fetch(
      `${URL}${ORDER_PORT}${ORDER_ENDPOINT}/placeOrder`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
