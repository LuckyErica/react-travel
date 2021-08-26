import React from "react";
import { Image, Typography } from "antd";
import { withRouter, RouteComponentProps ,Link} from "react-router-dom";

interface PropsType extends RouteComponentProps {
  id: string | number;
  size: "large" | "small";
  imagesSrc: string;
  price: number | string;
  title: string;
}

const ProductImageComponent: React.FC<PropsType> = ({
  id,
  size,
  imagesSrc,
  price,
  title,
  history,
  location,
  match
}) => {
  return (
    // <div onClick={()=>{history.push(`detail/${id}`)}}>
    <Link to={`detail/${id}`}>
      {size === "large" ? (
        <Image src={imagesSrc} width={490} height={285} />
      ) : (
        <Image src={imagesSrc} width={240} height={120} />
      )}
      <div>
        <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
        <Typography.Text type="danger" strong>
          ￥{price}起
        </Typography.Text>
      </div>
    </Link>
  );
};

export const ProductImage = withRouter(ProductImageComponent);
