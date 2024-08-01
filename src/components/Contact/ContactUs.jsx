
import { TextField, Button, Grid, Box, Typography, IconButton, Container } from '@mui/material';
import { PhoneOutlined as PhoneIcon, Email as EmailIcon, LocationOn as LocationIcon } from '@mui/icons-material';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';

const contactDetails = [
  { icon: PhoneIcon, lines: ["+91 9741418103", "+91 8892769007"], hrefPrefix: "tel:" },
  { icon: EmailIcon, lines: ["alfaa2010@gmail.com", "rubysingh_india@yahoo.co.in"], hrefPrefix: "mailto:" },
  { icon: LocationIcon, lines: ["3B, CASSIA COURT 91/1", "COLES ROAD, BANGALORE"], hrefPrefix: "" }
];

// Define ContactForm component
const ContactForm = () => {
  const form = useRef(); // Ref for accessing form elements

  // State variables for managing validation errors
  const [errors, setErrors] = useState({
    yourName: '',
    yourEmail: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Validation function
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      yourName: '',
      yourEmail: '',
      phone: '',
      subject: '',
      message: ''
    };

    if (!form.current.yourName.value.trim()) {
      newErrors.yourName = 'Name is required';
      valid = false;
    }

    if (!form.current.yourEmail.value.trim()) {
      newErrors.yourEmail = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.current.yourEmail.value)) {
      newErrors.yourEmail = 'Email is invalid';
      valid = false;
    }
    if (!form.current.phone.value.trim()) {
      newErrors.phone = 'Phone is required';
      valid = false;
    } else if (!/^[6789]\d{9}$/.test(form.current.phone.value)) { // This regex checks for a 10-digit phone number starting with 6, 7, 8, or 9
      newErrors.phone = 'Phone is invalid';
      valid = false;
    }
    if (!form.current.subject.value.trim()) {
      newErrors.subject = 'Subject is required';
      valid = false;
    }

    if (!form.current.message.value.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors); // Update errors state
    return valid;
  };

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs.sendForm('service_ibpy7ve', 'template_w2na4rj', e.target, 'mIu77IZvu1ZMpfJ7X')
        .then((result) => {
          alert('Message Sent Successfully');
          form.current.reset(); 
        })
        .catch((error) => {
          console.error('Error sending message:', error);
          alert('Message Sending Failed. Please try again later.');
        });
    }
  };

  // JSX structure for rendering the component
  return (
    <Container>
      <Grid container spacing={2} sx={{ padding: { xs: '1rem', md: '2rem' } }}>
        {/* Left side content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#FE7F4C', fontWeight: 700 }}>
              CONTACT WITH ALFAA
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, lineHeight: 1.2 }}>
              Just have a quick <br /> any question?
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, color: '#6e7a7a' }}>
              Charity is the act of extending love and kindness to others <br /> unconditionally which is a conscious act but the decision is <br /> made by the heart, without expecting
            </Typography>
          </Box>
        </Grid>

        {/* Right side form */}
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            ref={form}
            noValidate
            autoComplete="off"
            onSubmit={sendEmail}
            sx={{
              padding: { xs: '1rem', md: '2rem' },
              bgcolor: '#F2F7F7',
              borderRadius: '8px',
            }}
          >
            <Grid container spacing={2}>
              {/* Form fields */}
              {[
                { label: 'Your Name', id: 'yourName' },
                { label: 'Your Email', id: 'yourEmail' },
                { label: 'Phone*', id: 'phone' },
                { label: 'Subject', id: 'subject' },
              ].map((item, idx) => (
                <Grid item xs={12} sm={6} key={idx}>
                  <TextField
                    fullWidth
                    label={item.label}
                    variant="outlined"
                    id={item.id}
                    name={item.id}
                    required={item.id !== 'phone'}
                    error={!!errors[item.id]}
                    helperText={errors[item.id]}
                    sx={{ bgcolor: 'white' }}
                  />
                </Grid>
              ))}
              {/* Message textarea */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Write Your Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  id="message"
                  name="message"
                  required
                  error={!!errors.message}
                  helperText={errors.message}
                  sx={{ bgcolor: 'white' }}
                />
              </Grid>
              {/* Submit button */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    marginRight: 3,
                    textTransform: 'unset',
                    bgcolor: '#fe7f4c',
                    height: '3.3rem',
                    width: '11rem',
                    boxShadow: 'none',
                    borderRadius: '1px',
                    fontSize: '13px',
                  }}
                >
                  Send Your Message
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Contact details */}
        <Grid item xs={12} sx={{ marginTop: '2rem' }}>
          <Box sx={{ padding: { xs: '2rem', md: '4rem' }, bgcolor: '#047470' }}>
            <Grid container justifyContent="center" spacing={5}>
              {contactDetails.map(({ icon: Icon, lines, hrefPrefix }, idx) => (
                <Grid item xs={12} md={4} key={idx}>
                  <Grid container alignItems="center">
                    <Grid item>
                      <IconButton sx={{ bgcolor: '#fff', height: { md: '70px' }, width: { md: '70px' }, color: '#07847f', '&:hover': { bgcolor: '#FE7F4C', color: '#fff' } }}>
                        <Icon sx={{ fontSize: { md: '32px' } }} />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <Box sx={{ ml: 1, fontSize: { xs: '15px' } }}>
                        {lines.map((line, lineIdx) => (
                          hrefPrefix ?
                            <a key={lineIdx} href={`${hrefPrefix}${line}`} style={{ color: '#fff', textDecoration: 'none', display: 'block' }}>{line}</a>
                            :
                            <Typography key={lineIdx} sx={{ color: '#fff', fontSize: { xs: '15px' } }}>{line}</Typography>
                        ))}
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>


        <Grid item xs={12} sx={{ marginTop: { xs: '1rem', md: '-1rem' }, textAlign: 'center' }}>
          <Box sx={{ overflow: 'hidden', height: { xs: '300px', md: '400px' }, position: 'relative' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31100.904245686746!2d77.5724740743164!3d12.996584499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16f67de17f21%3A0xbdb33d28abb75db9!2sAssisted%20Living%20For%20Autistic%20Adults!5e0!3m2!1sen!2sin!4v1722150550598!5m2!1sen!2sin"
            
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy='no-referrer-when-downgrade' title="Poorex Location"></iframe>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactForm;
