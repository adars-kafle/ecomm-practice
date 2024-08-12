import {
  Typography,
  Button,
  Grid,
  Container,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Our Story
          </Typography>
          <Typography variant="body1" paragraph>
            This is some description for the ecommerce website. This and that
            was the result of all the environmental changes along with all the
            biological factors and stuff. But here we are in a incomprehensible
            universe floating like a mote of dust suspended in a ray of
            sunlight. (A Pale Blue Dot - Carl Sagan)
          </Typography>
          <Typography variant="body1" paragraph>
            At the heart of this ecommerce store there resides customer
            satisfaction. We value that loyal customers are the biggest asset a
            company can have. Therefore our customer are our highest of
            priority.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            color="primary"
          >
            Get Connected
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://via.placeholder.com/500x300"
            alt="About Us"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
      <Box mt={6}>
        <Typography variant="h5" gutterBottom>
          Our Team
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <TeamMemberCardComponent
              image="https://via.placeholder.com/150"
              name="Raman Shrestha"
              title="Sales Manager"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TeamMemberCardComponent
              image="https://via.placeholder.com/150"
              name="Ashim Poudel"
              title="Product Engineer"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TeamMemberCardComponent
              image="https://via.placeholder.com/150"
              name="Amulya Acharya"
              title="Engineering Manager"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TeamMemberCardComponent
              image="https://via.placeholder.com/150"
              name="Biswash Shrestha"
              title="Marketing Director"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

interface TeamMemberCardProps {
  image: string;
  name: string;
  title: string;
}

const TeamMemberCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
}));

const TeamMemberCardContent = styled(CardContent)({
  textAlign: "center",
});

const TeamMemberCardComponent: React.FC<TeamMemberCardProps> = ({
  image,
  name,
  title,
}) => {
  return (
    <TeamMemberCard>
      <CardMedia component="img" height="150" image={image} alt={name} />
      <TeamMemberCardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle1">{title}</Typography>
      </TeamMemberCardContent>
    </TeamMemberCard>
  );
};

export default AboutPage;
