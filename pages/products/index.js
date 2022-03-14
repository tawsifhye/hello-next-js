// https://fakestoreapi.com/products

import Image from "next/image";
import ProductCard from "../../Components/ProductCard";
import styles from "../../styles/ProductContainer.module.css";
function User({ products }) {


    return (
        <div className={`${styles.product_container} container`}>
            {
                products.map(product => {
                    return (
                        <div key={product.id} className={styles.product_card}>
                            <Image
                                src={product.image}
                                alt='Picture'
                                width='300px'
                                height='300px'
                            />
                            <ProductCard key={product.id} product={product} />
                        </div>
                    );
                })
            }
        </div >
    );
}



export async function getServerSideProps() {

    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json()


    return {
        props: {
            products,
        },
    }
}

export default User;