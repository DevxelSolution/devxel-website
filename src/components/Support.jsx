import React from 'react';
import { Container, Grid, Typography, Card, CardContent, Box } from '@mui/material';

const Support = () => {
  const supportServices = [
    {
      title: 'Post Deployment Infra Support',
      content: 'The actual success journey of a digital solution or product starts after the deployment. Once your new system goes live, it is crucial that you get a dedicated support team to ensure the maintenance, stability, and security of your product.',
    },
    {
      title: 'Extensive Warranty On Delivered Systems',
      content: 'After delivering your product, we offer you a warranty to ensure the longevity and quality of the product and that it works efficiently in the exact way it is intended to.',
    },
    {
      title: '24/7 Dedicated Support Available',
      content: 'Under our 24/7 dedicated support model, we help you to manage your customer’s/user’s queries at any time including weekdays and holidays. This allows you to ensure that critical issues are addressed promptly, and minimize downtime or disruptions to the business operations.',
    },
    {
      title: 'Enterprise-grade SLA Compliances',
      content: 'We comply with all the Enterprise Grade Compliances which include information and outline the performance standards, guarantees, and obligations that we are dedicated to meet all the performance standards and obligations stated in the SLA.',
    },
    {
      title: 'Tech support for system users',
      content: 'We provide you with continuous guidance, and troubleshooting to help your business users and customers to resolve any technical issues they may face while using the system, ensuring a smooth user experience.',
    },
    {
      title: 'Hot Fix & Rapid Deployment Support',
      content: 'If your product needs a critical issue immediately, we offer hotfixes and quick deployment support to ensure that your business operations remain unaffected by any sudden technical glitches.',
    },
  ];

  return (
    <Container className='!border !border-red-500 !mt-20'>
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography variant="h4" component="h1">
          Extensive <Box component="span" sx={{ color: 'success.main' }}>Customer Support</Box>
        </Typography>
        <Typography variant="h4" component="h1">
          For Startups To Enterprise Grade
        </Typography>
        <Typography variant="body1" component="p" color="textSecondary" mt={2}>
          Devxel offers you enterprise-grade support which includes comprehensive and specialized technical support and
          assistance for your large-scale enterprise-level software. We have designed our enterprise-grade support to meet the unique needs
          and challenges faced by large-size organizations which are dependent on complex software solutions for their day-to-day operations.
          Additionally, Startups have a different type of support needs in their rapidly changing deployments, we have specialized teams
          trained to cater the same as well.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {supportServices.map((service, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card sx={{ border: '1px solid #e0e0e0', borderRadius: 2, padding: 2, boxShadow: 1, display: 'flex', alignItems: 'center' }}>
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body1" component="p" color="textSecondary">
                  {service.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Support;
