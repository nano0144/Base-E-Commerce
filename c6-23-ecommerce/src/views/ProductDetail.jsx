import productDetailImage from '../images/Product Detail.png';
import Navigate from '../components/Navigate/Navigate';
import CardDetail from '../components/CardDetail/CardDetail';


function ProductDetail() {
    return (
        <div>
            <Navigate/>
            <h4>Product Detail</h4>
            <img src={productDetailImage} />
            <CardDetail/>
        </div>
    );
}

export default ProductDetail;