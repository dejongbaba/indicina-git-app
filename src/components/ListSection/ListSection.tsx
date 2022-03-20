import { ReactNode } from "react";
import "./listSection.scss";

type ListSectioProp = {
  children: ReactNode;
};
export default function ListSection({ children }: ListSectioProp) {
  return <div className="list__section">{children}</div>;
}
