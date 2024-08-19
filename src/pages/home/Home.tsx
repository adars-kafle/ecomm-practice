import {
  Typography,
  Container,
  Paper,
  Button,
  Grid,
  Card,
  Box,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: number;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Product 1",
    description: "This is the description for Product 1",
    price: 49.99,
    image: "https://via.placeholder.com/500x300",
    category: "Category A",
    inStock: 10,
  },
  {
    id: "2",
    name: "Product 2",
    description: "This is the description for Product 2",
    price: 79.99,
    image: "https://via.placeholder.com/500x300",
    category: "Category B",
    inStock: 5,
  },
  {
    id: "3",
    name: "Product 3",
    description: "This is the description for Product 3",
    price: 99.99,
    image: "https://via.placeholder.com/500x300",
    category: "Category A",
    inStock: 20,
  },
];

export const styles = {
  paper: {
    padding: "20px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    transition: "box-shadow 0.3s ease-in-out",
    "&:hover": {
      boxShadow:
        "0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19)",
    },
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

const Home = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(https://via.placeholder.com/1920x400)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Welcome to Varicon Store
        </Typography>
        <Button
          component={Link}
          to="/products"
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 2 }}
        >
          <Typography color="primary" fontWeight={500}>
            Shop Now
          </Typography>
        </Button>
      </Box>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          gutterBottom
          color="primary"
          sx={{
            fontWeight: "bold",
          }}
        >
          All Products
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Paper sx={styles.paper}>
                <Card>
                  <CardMedia
                    component="img"
                    height="220"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography
                      component={Link}
                      to={`/product/${product.id}`}
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
                  <CardActions sx={styles.cardActions}>
                    <Typography variant="h6">${product.price}</Typography>
                    <Button
                      component={Link}
                      to="/cart"
                      size="small"
                      variant="contained"
                      color="secondary"
                    >
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          gutterBottom
          color="primary"
          sx={{
            fontWeight: "bold",
          }}
        >
          Featured Products
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Paper sx={styles.paper}>
                <Card>
                  <CardMedia
                    component="img"
                    height="220"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography
                      component={Link}
                      to={`/product/${product.id}`}
                      gutterBottom
                      variant="h5"
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
                  <CardActions sx={styles.cardActions}>
                    <Typography variant="h6">${product.price}</Typography>
                    <Button
                      component={Link}
                      to="/cart"
                      size="small"
                      variant="contained"
                      color="secondary"
                    >
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
