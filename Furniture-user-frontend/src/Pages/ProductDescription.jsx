import Breadcrumb from '../Components/Breadcrumb';
import ProductDisplay from '../Components/ProductDisplay';
import { useLocation } from 'react-router-dom';

const ProductDescription = () => {
    const location = useLocation()
    const productDetails = location?.state?.item
    return (
        <div>
            <Breadcrumb />
            <ProductDisplay productDetails={productDetails}/>
        </div>
    )
}

export default ProductDescription
