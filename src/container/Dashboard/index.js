import React, { useEffect, useState } from "react";
import { PageHeader } from "antd";
import "antd/dist/antd.css";
import CategoryList from "../../component/CategoryList";
import BrandsList from "../../component/BrandsList";
import Cards from "../../component/Cards";
import useDashBoard from "./action";
import "./style.scss";

const Dashboard = () => {
  const {
    createCategory,
    categoryList,
    brandList,
    itemsList,
    createBrand,
    createItems,
  } = useDashBoard();

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  useEffect(() => {
    createItems(selectedCategory, selectedBrand);
    createCategory();
    createBrand();
  }, []);
  const updateCategory = (value) => {
    setSelectedCategory(value);
  };
  const updateBrand = (value) => {
    setSelectedBrand(value);
  };
  useEffect(() => {
    createItems(selectedCategory, selectedBrand);
  }, [selectedBrand, selectedCategory]);
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="category-container">
          <CategoryList options={categoryList} setCategory={updateCategory} />
        </div>
        <div className="brand-container">
          <BrandsList options={brandList} setBrand={updateBrand} />
        </div>
      </div>
      <div className="page-container">
        <div>
          <PageHeader className="page-header" title="Product Catalog" />
          <div className="card-container">
            {itemsList.map((value) => {
              return <Cards data={value} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
