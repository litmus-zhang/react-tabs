import "./cryptofrom.css"
import FormInput from './FormInput'


const inputs = [
    {
        label: 'Full Name',
        type: 'text',
        placeholder: 'Enter your name',
        name: 'name',
    },
    {
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your email',
        name: 'email',
    },
    {
        label: 'Amount',
        type: 'number',
        placeholder: '400.00',
        name: 'amount',
    },
    {
        label: 'Transaction receipt',
        type: 'file',
        placeholder: 'Enter your password',
        name: 'receipt',
    },
]

export default function Cryptoform() {
  return (
      <div className='crypto'>
          {inputs.map(input => <FormInput {...input} />)}
          <button>Send</button>
    </div>
  )
}
