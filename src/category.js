export const parseProductCategories = (products) => {//根據原資料Category Key 返回出所有Category
    const categories = {};
    products.forEach((product) => {
        categories[product.category] = product.category;
    });
    return Object.keys(categories);
}

export let setProductCategories = (category,products) =>{//根據category來過濾商品 返回新陣列
    if(category === "全部"){
        return products
    }else{
        let arr = products.filter((item)=>{
            return item.category === category
        })
        return arr
    }
}