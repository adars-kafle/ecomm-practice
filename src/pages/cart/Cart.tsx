import {
  Typography,
  Button,
  Grid,
  Container,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { products, type Product } from "../home/Home";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId: string) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  useEffect(() => {
    setCartItems(products);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography
        color="primary"
        variant="h3"
        sx={{
          fontWeight: "bold",
        }}
        gutterBottom
      >
        Cart
      </Typography>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <Grid container spacing={4}>
          {cartItems.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <CartItemCard>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="primary"
                    sx={{
                      fontWeight: 500,
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6">${product.price}</Typography>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </Button>
                </CardActions>
              </CartItemCard>
            </Grid>
          ))}
        </Grid>
      )}
      <Box mt={4}>
        {cartItems.length == 0 ? (
          <Button
            component={Link}
            to="/products"
            variant="contained"
            color="secondary"
          >
            Browse Products
          </Button>
        ) : (
          <Button
            component={Link}
            to="/checkout"
            variant="contained"
            color="secondary"
            disabled={cartItems.length === 0}
          >
            Proceed to Checkout
          </Button>
        )}
      </Box>
    </Container>
  );
};

const EmptyCart = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="50vh"
    >
      <Typography variant="h5" gutterBottom>
        Your cart is empty
      </Typography>
      <Typography variant="body1">
        Browse our products and add items to your cart.
      </Typography>
    </Box>
  );
};

const CartItemCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
}));

export default CartPage;
