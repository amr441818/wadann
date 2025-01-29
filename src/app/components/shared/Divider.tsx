import React from "react"

const Divider = ({ className }: { className?: string }) => {
    return <div className={`border-b-[.5px] border-[#A19E96] ${className ? className : ""}`}></div>
}

export default Divider
