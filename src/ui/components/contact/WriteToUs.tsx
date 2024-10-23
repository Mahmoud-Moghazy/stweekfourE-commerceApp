import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const WriteToUs: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-5">
        <span className="size-10 rounded-full bg-red-500 text-white flex items-center justify-center">
          <FontAwesomeIcon icon={faEnvelope} className="fa-fw"/>
        </span>
        <p className="font-medium">Write To US</p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-sm max-w-[250px]">Fill out our form and we will contact you within 24 hours.</p>
        <p className="text-sm">Emails: customer@exclusive.com</p>
        <p className="text-sm">Emails: support@exclusive.com</p>
      </div>
    </div>
  )
}

export default WriteToUs