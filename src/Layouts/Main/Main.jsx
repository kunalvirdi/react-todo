import styles from './main.module.css'
// eslint-disable-next-line react/prop-types
const Main=({children})=>{
    return(
        <main>
            <h1>TO DO APP</h1>
            {children}
        </main>
    )
}
export default Main;