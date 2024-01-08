
import Head from 'next/head';
import { Container, Typography, Divider, List, ListItem, ListItemText } from '@mui/material';

const Disclaimer = () => {
  return (
    <Container maxWidth="md" className="my-8">
      <Head>
        <title>Disclaimer</title>
      </Head>

      <Typography variant="h4" className="mb-4">
        Disclaimer
      </Typography>

      <Typography variant="body1" className="mb-4">
        The information provided on this website is for general informational purposes only. All content on this site is
        provided in good faith and for general informational purposes only. We do not make any warranties about the
        completeness, reliability, and accuracy of this information. Any action you take upon the information on our
        website is strictly at your own risk, and we will not be liable for any losses and damages in connection with
        the use of our website.
      </Typography>

      <Divider className="my-4" />
      <Typography variant="h5" className="mb-2">
        Contact Us
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="By email:nitinvermanv610506@gmail.com" />
        </ListItem>
        <ListItem>
          <ListItemText primary="By visiting this page on our website:contact us" />
        </ListItem>
      </List>
    </Container>
  );
};

export default Disclaimer;
