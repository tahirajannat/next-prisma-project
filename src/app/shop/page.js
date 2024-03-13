import Brands from '../components/common/Brands';
import HeroBanner from '../components/common/HeroBanner';
import PopularBlock from '../components/common/PopularBlock';
import BestSeller from '../components/section/BestSeller';
import NewArival from '../components/section/NewArival';
export const products = [
    {
        id: 1,
        product_name: 'Product Name',
        slug: 'product-name',
        regular_price: 49.99,
        sale_price: 39.99,
        stock_quantity: 100,
        manage_stock: true,
        stock_status: 'instock',

        category: [
            {
                id: 1,
                name: 'Electronics',
                slug: 'electronics',
            },
        ],
        tags: [
            {
                id: 2,
                name: 'Smartphone',
                slug: 'smartphone',
            },
        ],
        featured_image: 'product-image.jpg',
        short_description: 'Short description goes here.',
        description: 'Long product description.',

        reviews: [
            {
                id: 1,
                rating: 4.5,
                author: 'John Doe',
                comment: 'Great product!',
            },
        ],
        created_at: '2022-01-01T12:00:00Z',
        updated_at: '2022-01-10T15:30:00Z',
    },
];
export default function Shop() {
    const handleChange = () => {
        console.log('Button clicked');
    };
    return (
        <div className='bg-white'>
            {/* Shop Page */}
            {/* <ProductCard items={products} /> */}
            <HeroBanner />
            <Brands />
            <PopularBlock />
            <NewArival />
            <BestSeller />
            {/* <Button
                onClick={handleChange}
                buttonStyle='buttonPrimary'
                iconPosition='after'
                addBgColor={true}
                classNames='!text-white border-b border-primary bg-primary w-auto flex-shrink-0'
                classes='!px-5 py-[0.8rem] text-base'
                icon={
                    <FaLocationArrow className='text-lg text-white !shadow-none' />
                }
            >
                Add Product
            </Button> */}
        </div>
    );
}
