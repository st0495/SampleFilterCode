import { Card } from "antd";
import "antd/dist/antd.css";
const { Meta } = Card;
const Cards = (props) => {
  const { data } = props;
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={data.image} />}
      >
        <Meta title={data.brand} description={data.category} />
      </Card>
    </div>
  );
};
export default Cards;
