import './button.css'
// eslint-disable-next-line react/prop-types
const Button=({children,clickHandler})=>{
	return(
		<>
			<button onClick={clickHandler}>{children}</button>
		</>

	)
}
export default Button