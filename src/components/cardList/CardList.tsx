import { ReactNode } from "react";
import { Pagination } from "antd";
import "./cardList.scss";

type CardListProps = {
  data: Array<any>;
  title: string;
  currentPage: number;
  totalPages: number;
  view: (data: { [key: string]: any }) => ReactNode;
};

function CardList(props: CardListProps) {
  const { title, data, currentPage, totalPages, view } = props;
  return (
    <div className="card__list">
      <h4 className="card__list__title">{title}</h4>
      {data?.length ? data?.map((d) => view(d)) : <div> No Data Yet</div>}
      <Pagination
        className="card__list__pagination"
        current={currentPage}
        total={totalPages}
      />
    </div>
  );
}

export default CardList;
