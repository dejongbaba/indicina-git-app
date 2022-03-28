import { CONSTANTS } from "../../utils/utils";
import "./card.scss";

type CardProps = {
  type: string;
};
function Card(props: CardProps & RepoCardProps & UserCardProps) {
  if (props.type === CONSTANTS.CARD_TYPE_USER) {
    return <UserCard {...props} />;
  }
  return <RepoCard {...props} />;
}

type RepoCardProps = { title: string; description: string; header: string };

function RepoCard(props: RepoCardProps) {
  const { header, title, description } = props;
  return (
    <div className="repo__card">
      <h4 className="repo__card__header">{header}</h4>
      <p className="repo__card__title">{title}</p>
      <p className="repo__card__desc">{description}</p>
    </div>
  );
}

type UserCardProps = { title: string; description: string; header: string };

function UserCard(props: UserCardProps) {
  const { header, title, description } = props;
  return (
    <div className="user__card">
      <div className="user__card__header">
        <p>{header}</p>
        <p className="user__card__title">{title}</p>
      </div>

      <p className="user__card__desc">{description}</p>
    </div>
  );
}

export default Card;
