import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ServiceCard = ({ title, content }) => {
  return (
    <Card variant="outlined" className="mb-4">
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
