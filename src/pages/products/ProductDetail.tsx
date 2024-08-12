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
import { useParams } from "react-router-dom";

import { products } from "../home/Home";

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  console.log(productId);
  console.log(products);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
          Product Not Found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image={product.image}
              alt={product.name}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            ${product.price}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Category: {product.category}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            In Stock: {product.inStock}
          </Typography>
          <Box mt={4}>
            <Button variant="contained" color="primary">
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box mt={6}>
        <Typography variant="h4" gutterBottom>
          You Might Also Like
        </Typography>
        <Grid container spacing={4}>
          {products
            .filter(
              (p) => p.id !== product.id && p.category === product.category
            )
            .slice(0, 3)
            .map((p) => (
              <Grid item xs={12} sm={6} md={4} key={p.id}>
                <RelatedProductCard>
                  <CardMedia
                    component="img"
                    height="200"
                    image={p.image}
                    alt={p.name}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {p.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {p.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained" color="primary">
                      Add to Cart
                    </Button>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ flexGrow: 1, textAlign: "right" }}
                    >
                      ${p.price}
                    </Typography>
                  </CardActions>
                </RelatedProductCard>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  );
};

const RelatedProductCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

export default ProductDetails;
