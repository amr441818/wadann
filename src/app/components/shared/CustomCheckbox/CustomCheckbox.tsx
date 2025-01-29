
type checkboxProps ={
    label?:string;
    checked?:boolean

}
const CustomCheckbox = (props:checkboxProps) => {
  return (
    <div className="flex gap-2 items-center">
  <input
    type="checkbox"
    checked={props.checked}
    className="w-5 h-5 appearance-none checked:bg-secondaryBg checked:border-secondaryBg checked:border-none border-[.7px] border-[#6B665F]  rounded-[2px] focus:outline-none cursor-pointer checked:after:content-['✓'] checked:after:text-white checked:after:block checked:after:text-center checked:after:justify-start"
  />

  {props.label&& props.label}
    </div>
  
  )
}

export default CustomCheckbox