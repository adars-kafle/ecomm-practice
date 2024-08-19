import {
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Container,
  Pagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  styled,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

import { type Product } from "../home/Home";
import { Link } from "react-router-dom";

const products: Product[] = [
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

const Paper = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  transition: "box-shadow 0.3s ease-in-out",
  "&:hover": {
    boxShadow:
      "0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19)",
  },
}));

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const [sortBy, setSortBy] = useState("");

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    setSortBy(event.target.value as string);
  };

  // Calculate the index range for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Sort the products based on the selected option
  const sortedProducts = sortBy
    ? [...currentProducts].sort((a, b) =>
        sortBy === "price-asc"
          ? a.price - b.price
          : sortBy === "price-desc"
          ? b.price - a.price
          : a.name.localeCompare(b.name)
      )
    : currentProducts;

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
        }}
      >
        All Products
      </Typography>
      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel id="sort-by-label">Sort By</InputLabel>
            <Select
              labelId="sort-by-label"
              id="sort-by"
              value={sortBy}
              onChange={handleSortChange}
            >
              <MenuItem value="">Default</MenuItem>
              <MenuItem value="price-asc">Price: Low to High</MenuItem>
              <MenuItem value="price-desc">Price: High to Low</MenuItem>
              <MenuItem value="name-asc">Name: A to Z</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        {sortedProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Paper>
              <CardMedia
                component="img"
                height="220"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component={Link}
                  to={`/product/${product.id}`}
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
                  component={Link}
                  to="/cart"
                  variant="contained"
                  color="secondary"
                  sx={{
                    color: "text.primary",
                  }}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <Pagination
          count={Math.ceil(products.length / productsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Grid>
    </Container>
  );
};

export default ProductsPage;
