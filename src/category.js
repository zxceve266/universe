export const parseProductCategories = (products) => {
    const categories = {};
    products.forEach((product) => {
        categories[product.category] = product.category;
    });
    return Object.keys(categories);
}

export let setProductCategories = (category,products) =>{
    if(category === "全部"){
        return products
    }else{
        let arr = []
        products.forEach((item)=>{
            if(item.category === category){
                arr.push(item)
            }
        })
        return arr
    }
}