import React from 'react';
import {useFormik} from "formik";


function ProductForm({product, isEdit, onCreate, onSave}) {

    const {handleSubmit, handleChange, values, errors} = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: isEdit ? product.name : "",
            description: isEdit ? product.description : "",
            price: isEdit ? product.price : ""
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            if (isEdit) onSave({...product,...values})
            else onCreate(values)
        },
    });
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={values.name}
                />
                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    name="description"
                    type="text"
                    onChange={handleChange}
                    value={values.description}
                />
                <label htmlFor="price">Price</label>
                <input
                    id="price"
                    name="price"
                    type="number"
                    onChange={handleChange}
                    value={values.price}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ProductForm;
