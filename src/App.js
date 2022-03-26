import {Formik, Form} from 'formik'
import Input from './components/Input'
import Button from './components/Button'
import Container from './components/Container.js'
import Section from './components/Section'

const App = () => {

  const handleSubmit = () => {

  }

  return (
    <Container>
      <Section>
        <Formik 
          initialValues = {{
            deposit: '',
            contribution: '',
            years: '',
            rate: '',
          }}
          onSubmit = {handleSubmit}
        >
          <Form>
            <Input name = "deposit" label="Initial Deposit"/>
            <Input name = "contribution" label="Anual Contribution"/>
            <Input name = "years" label="Years"/>
            <Input name = "rate" label="Interest Rate"/>
            <Button>Calculate</Button>
          </Form>
        </Formik>
      </Section>
    </Container>
  );
}

export default App;
