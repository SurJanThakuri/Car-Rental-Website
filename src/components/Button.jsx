import React from 'react'

function Button({
    children,
    type = "button",
    bgColor = "bg-[#21408E]",
    textColor = "text-white",
    hover = "hover:bg-[#405eab]",
    className = "",
    isActive = "active:bg-[#21408e]",
    ...props
}) {
  return (
    <button className={`py-2 rounded-lg shadow-md ${bgColor} ${textColor} ${hover} ${className} ${isActive} `} {...props}>
        {children}
    </button>
  )
}

export default Button
