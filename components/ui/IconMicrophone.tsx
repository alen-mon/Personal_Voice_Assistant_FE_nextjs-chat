import React, { SVGProps } from 'react'

interface IconMicrophoneProps extends SVGProps<SVGSVGElement> {
  // Define any additional props specific to your icon if needed
}

function IconMicrophone(props: IconMicrophoneProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      {...props}
      viewBox="0 0 16 16"
    >
      <path d="M11.5 4.96a2 2 0 1 1-3 1.77V11h-.75a2.25 0 0 1-2.25-2.25V5.73a2 2 0 0 1 3-1.77v-.73a2.25 0 0 1 4.5 0v.73zM8 0a2.5 2.5 0 0 1 2.5 2.5V5.5a1 1 0 0 0 2 0V2.5A2.5 2.5 0 0 0 8 0z" />
    </svg>
  )
}

export default IconMicrophone
