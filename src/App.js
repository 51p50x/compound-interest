import { useState } from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import Input from './components/Input'
import Button from './components/Button'
import Container from './components/Container.js'
import Section from './components/Section'
import Balance from './components/Balance.js'

const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit
  for (let i = 0; i < years; i++){
    total = (total + contribution) * (rate + 1)
  }

  return Math.round(total)
}

const formatter = new Intl.NumberFormat('en-US',{
  style : 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

const App = () => {

  const[balance, setBalance] = useState('')

  const handleSubmit = ({deposit, contribution, years, rate}) => {
    const val = compoundInterest(Number(deposit), Number(contribution), Number(years), Number(rate))
    setBalance(formatter.format(val))
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
          validationSchema ={Yup.object({
            deposit: Yup
              .number()
              .required('You should add a Deposit Number')
              .typeError('Must be a number value')
              .min(0, 'Min value is 0'),
            contribution: Yup
              .number()
              .required('You should add a Contribution Number')
              .typeError('Must be a number value')
              .min(0, 'Min value is 0'),
            years: Yup
              .number()
              .required('You should add a Years Number')
              .typeError('Must be a number value')
              .min(1, 'Min value is 1')
              .max(20, 'Max value is 20'),
            rate: Yup
              .number()
              .required('You should add a Rate Number')
              .typeError('Must be a number value')
              .min(0, 'Min value is 0')
              .max(1, 'Max value is 1'),
          })}
        >
          <Form>
            <Input name = "deposit" label="Initial Deposit"/>
            <Input name = "contribution" label="Anual Contribution"/>
            <Input name = "years" label="Years"/>
            <Input name = "rate" label="Interest Rate"/>
            <Button type = "submit">Calculate</Button>
          </Form>
        </Formik>
        {balance != '' ? <Balance>Final Balance: {balance}</Balance>:null}
      </Section>
    </Container>
  );
}

export default App;
