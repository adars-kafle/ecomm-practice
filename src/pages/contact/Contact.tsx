import {
  Typography,
  Button,
  Grid,
  Container,
  Box,
  Card,
  CardContent,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

type FormDataProps = {
  name: string;
  email: string;
  message: string;
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormDataProps>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value, // we can destructure the name and value from target
    }));
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();

    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h5" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="body1" paragraph>
              Have a question or need assistance? Feel free to reach out to us
              using the form below, and we'll get back to you as soon as
              possible.
            </Typography>
            <ContactForm
              onSubmit={handleSubmit}
              onChange={handleChange}
              formData={formData}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Our Location
              </Typography>
              <Typography variant="body1" paragraph>
                Pulchowk
                <br />
                Lalitpur, Nepal
              </Typography>
              <Typography variant="h5" gutterBottom>
                Contact Info
              </Typography>
              <Typography variant="body1" paragraph>
                Phone: (+977) 9812345678
                <br />
                Email: ecom@mail.com
              </Typography>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.2767386734076!2d85.31403521111025!3d27.677840426692878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cbbeac9357%3A0x8f35a679609cb5b9!2z4KSq4KWB4KSy4KWN4KSa4KWL4KSVLCDgpLLgpLLgpL_gpKTgpKrgpYHgpLAgNDQ2MDA!5e0!3m2!1sne!2snp!4v1723114948686!5m2!1sne!2snp"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

const ContactForm: React.FC<{
  onSubmit: (ev: React.FormEvent) => void;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  formData: FormDataProps;
}> = ({ onSubmit, onChange, formData }) => {
  return (
    <Box onSubmit={onSubmit} component="form" noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={onChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={onChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            name="message"
            value={formData.message}
            onChange={onChange}
            multiline
            rows={4}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactPage;
