import React from 'react'
import { Text } from '../Text'

type InputProps = React.HTMLAttributes<HTMLTextAreaElement>

type OwnProps = {
  label: string
}

type Props = InputProps & OwnProps

const Textarea = ({ label, ...props }: Props) => {
  return (
    <div className="w-full">
      <label htmlFor={props.id} className="mb-2">
        <Text color="gold-500" type="heading" weight="bold">
          {label}
        </Text>
      </label>

      <textarea
        {...props}
        className="block px-0 py-4 font-body font-medium w-full border-b border-gold-500 focus:border-gold-800 outline-none"
      />
    </div>
  )
}

export { Textarea }
