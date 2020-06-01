export const parseProductCategories = (products) => { //根據原資料Category Key 返回出所有Category
    const categories = {};
    products.forEach((product) => {
        categories[product.category] = product.category;
    });
    return Object.keys(categories);
}

export let setProductPagination = (currentCategory, products, itemPerPage) => {
    const paginationData = [];
    let filteredProducts = [...products];//先設定全部的商品

    // 若是有選中分類(無選中全部)，將產品根據分類過濾出來
    if (currentCategory !== '全部') {
        filteredProducts = products.filter(product => product.category === currentCategory);
    }

    // 製作分頁
    filteredProducts.forEach((product, index) => {
        if (index % itemPerPage === 0) {
            paginationData.push([]);
        }
        const page = parseInt(index / itemPerPage, 10);
        paginationData[page].push(product);
    });
    return paginationData;

}