import React from 'react'
import Form, { Input, Submit } from 'components/Form'

export default function FormTestPage() {
  return (
    <main className='row'>
      <div className='columns'>
        <h2>Form Test</h2>
        <Form id='zwtrd7608mqb1q'>
          <Input
            id='Field1'
            label='Name'
          />
          <Input
            id='Field2'
            label='Phone'
          />
          <Input
            id='Field3'
            label='Email'
            placeholder='example@test.com'
          />
          <Input
            id='Field4'
            label='Message'
          />
          <Submit>Submit</Submit>
        </Form>
      </div>
    </main>
  )
}