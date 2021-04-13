import React, {useState,useCallback,useEffect} from 'react';
import Card from "../Components/ProductCard/ProductCard";
import Header from "../Components/Header/Header";
import ServiceElements from "../Components/SeviceElements/ServiceElements";
import ProductForm from "../Components/ProductForm/ProductForm";
import initialProduct from "../data/initialProduct";

function MainPage(props) {
    const [productList, setProductList] = useState(initialProduct);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isEditMode,setIsEditMode] = useState(false);

    const handleProductClick = useCallback((productId) => {
        setSelectedProduct(null);
        setSelectedProduct(productList.find((p) => {
            return p.id === productId
        }))
        setIsEditMode(false);
    }, [productList]);

    const handleCreate = useCallback((newProduct)=>{
        setProductList([...productList,newProduct]);
        setIsEditMode(false);
    },[productList]);

    const handleEdit = useCallback((product)=>{
        const productIndex = productList.findIndex((p)=>{
            return p.id === product.id
        });
        const productListCopy = [...productList];
        productListCopy[productIndex]=product;
        setProductList(productListCopy);
        setSelectedProduct(null);
    },[productList]);

    const handleAddClick = useCallback(()=>{
        setIsEditMode(true);
        setSelectedProduct(null);
    },[]);

useEffect(()=>{
    localStorage.setItem("product-list",JSON.stringify(productList));
},[productList]);

    return (
        <div>
            <Header/>
            <ServiceElements onAddClick={handleAddClick} />
            {productList.map((product) => <Card onClick={handleProductClick} product={product} key={product.id}/>)}
            {selectedProduct && <ProductForm product={selectedProduct} isEdit={true} onSave={handleEdit} />}
            {isEditMode && <ProductForm isEdit={false} onCreate={handleCreate} />}
        </div>
    )
}

export default MainPage;
