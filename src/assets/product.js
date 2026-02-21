import monk from '@/assets/monk.jpg'
import ojay from '@/assets/ojay.jpg'
import stoned from '@/assets/stoned.jpg'
import toestrap from '@/assets/toestrap.jpg'
export const products = [
    {
        id: '1',
        name: 'Tee Slides',
        description: 'lorem lorem lorem and lorem',
        price: '3000',
        image: [monk, ojay, stoned],
        category: 'Men',
        subCategory: 'Slippers',
        sizes: ['40' - '47'],
        bestseller: true
    },
    {
        id: '2',
        name: 'Stoned Platforms',
        description: 'lorem lorem lorem and lorem',
        price: '2000',
        image: [stoned, toestrap, stoned],
        category: 'Men',
        subCategory: 'Slippers',
        sizes: ['40' - '47'],
        bestseller: true
    },
]