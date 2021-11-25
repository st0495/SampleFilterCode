import { Checkbox, Typography } from "antd";
import "./style.scss";
const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" },
];
const { Text } = Typography;
const BrandsList = (props) => {
  const { options, setBrand } = props;
  return (
    <div className="list-container">
      <div>
        <Text>Brands</Text>
      </div>
      <Checkbox.Group options={options} onChange={(e) => setBrand(e)} />
    </div>
  );
};
export default BrandsList;
