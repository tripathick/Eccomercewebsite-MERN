import {Row , Col} from 'react-bootstrap';
import Product from '../components/Product';
import {useGetProductsQuery} from '../slices/productsApiSlice';
import Loader from '../components/Loader';

const HomeScreen = () => {
  const {data : products , isLoading , error} = useGetProductsQuery();
  
  return (
    <>
    {isLoading ? (
           <Loader/>
    ) : error ? (
      <div>{error?.data?.message || error.error} </div>
      ) : (
      <>
          <h1>Latest Product.</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        {/* <h2>{product.name}</h2> */}
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
    
      </>
    ) }
    </>
  );
};

export default HomeScreen;

// import React from 'react';
// import {Row , Col} from 'react-bootstrap';
// import Product from '../components/Product';
// import products from '../products';

// const HomeScreen = () => {
//   return (
//     <>
//         <h1>Latest Product.</h1>
//         <Row>
//             {products.map((product) => (
//                 <Col sm={12} md={6} lg={4} xl={3}>
//                     {/* <h2>{product.name}</h2> */}
//                     <Product product={product} />
//                 </Col>
//             ))}
//         </Row>
//     </>
//   );
// };

// export default HomeScreen;

