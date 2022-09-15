const data = {
    products: [
        {
            id: '1',
            name: 'MacBook',
            price: 1400,
            image: 'https://picsum.photos/id/180/2400/1600',
            discount: {
                qtyForDiscount: 2,
                discountGiven: 0.10
            }
        },
        {
            id: '2',
            name: 'Car',
            price: 2400,
            image: 'https://picsum.photos/id/111/4400/2656',
            discount: {
                qtyForDiscount: 5,
                discountGiven: 0.05
            }
        },
        {
            id: '3',
            name: 'Shoes',
            price: 1000,
            image: 'https://picsum.photos/id/21/3008/2008',
            discount: {
                qtyForDiscount: 0,
                discountGiven: 0
            }
        },
    ],
};

export default data
