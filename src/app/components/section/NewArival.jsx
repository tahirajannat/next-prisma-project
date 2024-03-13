'use client';

import { useState } from 'react'; // Correct import statement

import ProductCard from '../common/ProductCard';
import Tab from '../common/Tab';
import Tabs from '../common/Tabs';

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

export default function NewArival() {
    const [active, setActive] = useState(0);

    const handleChange = (newActive) => setActive(newActive);

    return (
        <div className='container px-20 mx-auto my-40'>
            <h2 className='text-center text-4xl font-semibold my-20'>
                New Arrival
            </h2>
            <Tabs active={active} onChange={handleChange}>
                <Tab title='All Product'>
                    <div className='grid grid-cols-4 gap-10 '>
                        <ProductCard
                            items={products}
                            startIndx={0}
                            endIndx={8}
                        />
                    </div>
                </Tab>
                {/* Other tabs go here */}
            </Tabs>
        </div>
    );
}
