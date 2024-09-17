import Link from "next/link";
const Meals = () => {
    return ( 
        <>
            <h1>Meals</h1>
            <p>
                <Link href="/meals/share" className="Link">Share </Link>
            </p>
        </>
     );
}
 
export default Meals;