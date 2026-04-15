import React from 'react'

interface ContactInfoProps {
    onComplete: () => void;
}

const ContactInfo = ({onComplete}:ContactInfoProps) => {


  return (
    <div onClick={onComplete} className='flex flex-col gap-4'>

    </div>
  )
}

export default ContactInfo