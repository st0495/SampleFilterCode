import { useDispatch, useSelector } from "react-redux";
import { Response } from "../../response";
export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const CREATE_BRAND = "CREATE_BRAND";
export const CREATE_ITEMS = "CREATE_ITEMS";
const useDashBoard = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector(
    (state) => state.DashBoardScreenReducer.categoryList
  );
  const brandList = useSelector(
    (state) => state.DashBoardScreenReducer.brandList
  );
  const itemsList = useSelector(
    (state) => state.DashBoardScreenReducer.itemsList
  );
  const createCategory = () => {
    const productList = Response.products;
    let categoryList = [];
    productList.forEach((data) => {
      const res = {
        label: data.category,
        value: data.category,
      };
      const productExists = categoryList.some(
        (category) => category.label === res.label
      );
      if (!productExists) {
        categoryList.push(res);
      }
    });
    dispatch({ type: CREATE_CATEGORY, payload: categoryList });
  };
  const createBrand = () => {
    const productList = Response.products;
    let brandsList = [];
    productList.forEach((data) => {
      const res = {
        label: data.brand,
        value: data.brand,
      };
      const productExists = brandsList.some(
        (brand) => brand.label === res.label
      );
      if (!productExists) {
        brandsList.push(res);
      }
    });
    dispatch({ type: CREATE_BRAND, payload: brandsList });
  };
  const createItems = (category, brand) => {
    const productList = Response.products;
    let productsList = [];
    if (category.length === 0 && brand.length === 0) {
      productList.forEach((data) => {
        const res = {
          category: data.category,
          image: data.images[0].src,
          brand: data.brand,
        };
        productsList.push(res);
      });
      dispatch({ type: CREATE_ITEMS, payload: productsList });
    } else if (category.length > 0 && brand.length === 0) {
      category.forEach((data) => {
        const list = productList.filter((x) => x.category === data);
        list.forEach((data) => {
          const res = {
            category: data.category,
            image: data.images[0].src,
            brand: data.brand,
          };
          productsList.push(res);
        });
      });
      dispatch({ type: CREATE_ITEMS, payload: productsList });
    } else if (category.length === 0 && brand.length > 0) {
      brand.forEach((data) => {
        const list = productList.filter((x) => x.brand === data);
        list.forEach((data) => {
          const res = {
            category: data.category,
            image: data.images[0].src,
            brand: data.brand,
          };
          productsList.push(res);
        });
      });
      dispatch({ type: CREATE_ITEMS, payload: productsList });
    } else {
      brand.forEach((data) => {
        const list = productList.filter((x) => x.brand === data);
        category.forEach((value) => {
          const categoryProducts = list.filter((x) => x.category === value);
          categoryProducts.forEach((data) => {
            const res = {
              category: data.category,
              image: data.images[0].src,
              brand: data.brand,
            };
            productsList.push(res);
          });
        });
      });
      dispatch({ type: CREATE_ITEMS, payload: productsList });
    }
  };
  return {
    createCategory,
    createBrand,
    categoryList,
    brandList,
    createItems,
    itemsList,
  };
};

export default useDashBoard;
