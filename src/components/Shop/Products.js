import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummy_products = [
    {
        id: 1,
        title: "Book",
        price: 100,
        description: "A simple book",
    },
    {
        id: 2,
        title: "Laptop",
        price: 150,
        description: "Old laptop",
    },
];

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {dummy_products.map((product) => (
                    <ProductItem
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
