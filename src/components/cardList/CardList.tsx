import { ReactNode } from "react";
import { Empty, Pagination, Skeleton } from "antd";
import "./cardList.scss";
import { CardNodeFormatProps } from "../../pages/home/Home";

type CardListProps = {
  data: Array<any>;
  title: string;
  errorMessage: string;
  currentPage: number;
  totalPages: number;
  paginated: boolean;
  loading: boolean;
  view: (data: CardNodeFormatProps) => ReactNode;
};

function CardList(props: CardListProps) {
  const {
    title,
    data,
    errorMessage,
    currentPage,
    totalPages,
    paginated,
    loading,
    view,
  } = props;

  if (loading) {
    return <Skeleton />;
  }
  return (
    <div className="card__list">
      <h4 className="card__list__title">{title}</h4>
      {data?.length ? (
        data?.map((d) => view(d))
      ) : (
        <Empty description={errorMessage} />
      )}
      {data?.length && paginated ? (
        <div className="card__list__pagination__section">
          <Pagination
            className="card__list__pagination"
            current={currentPage}
            total={totalPages}
          />
        </div>
      ) : null}
    </div>
  );
}

export default CardList;
