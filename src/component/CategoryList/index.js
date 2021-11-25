import { Checkbox, Typography } from "antd";
import "./style.scss";
const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" },
];
const { Text } = Typography;
const CategoryList = (props) => {
  const { options, setCategory } = props;
  return (
    <div className="list-container">
      <div>
        <Text>Categories</Text>
      </div>
      <Checkbox.Group options={options} onChange={(e) => setCategory(e)} />
    </div>
  );
};
export default CategoryList;
