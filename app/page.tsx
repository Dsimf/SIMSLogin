import React from 'react';
import { Button, Flex, Form, Typography} from 'antd';

export default function Home() {
  return(
    <div style={{backgroundImage: 'url("./images/med.jpg")', backgroundSize: 'cover',minHeight: '100vh', display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
    <Form style={{ backgroundColor: 'white',padding: '0px 16px 16px 16px',borderEndEndRadius: '16px',borderTopRightRadius: '16px',borderTopLeftRadius: '16px',borderBottomLeftRadius: '16px',borderBottomRightRadius: '16px'}}>
    <Typography style={{fontSize: '50px'}}><b>SIMS MEDICAL CARE</b></Typography>
    <br></br>
    <Flex justify="space-between">
    <Button type="primary" size="large" href="Signin">
      SignIn
    </Button>
    <Button type="primary" size="large" href="Signup">
      SignUP
    </Button>
    </Flex>
    </Form>
  </div>
  )
}
