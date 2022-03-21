import { ChangeEvent, useEffect, useState } from "react";
import Card from "../../components/card/Card";
import CardList from "../../components/cardList/CardList";
import ListSection from "../../components/ListSection/ListSection";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import SideMenu from "../../components/sideMenu/SideMenu";
import useDebounce from "../../hooks/useDebounce";
import ApiService from "../../services/apiService/ApiService";
import RepoService from "../../services/repoService/RepoService";
import { getToken } from "../../utils/utils";

type HomeProps = {};
function Home(props: HomeProps) {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 1000);
  useEffect(() => {
    ApiService.init(process.env.REACT_APP_GRAPH_QL_URI ?? "");
    ApiService.setHeader(getToken() ?? "");
    if (debouncedSearch) {
      RepoService.search(debouncedSearch)
        .then((res) => {
          console.log("res in repo", res);
        })
        .catch((e: Error) => {
          console.error(e);
        });
    } else {
      RepoService.getAllRepositories()
        .then((res) => {
          console.log("res in repo", res);
        })
        .catch((e: Error) => {
          console.error(e);
        });
    }
  }, [debouncedSearch]);

  const cardFormat = (data: any) => {
    console.log("data", data);
    return (
      <Card
        title="Getting to ist yeah"
        type="repo"
        description="hsdhs"
        header="Hellos"
      />
    );
  };

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <NavigationBar onSearch={onSearch} />
      <ListSection>
        <SideMenu />
        <CardList
          currentPage={1}
          totalPages={39}
          view={cardFormat}
          data={[]}
          title="View Repositories"
        />
      </ListSection>
    </div>
  );
}

export default Home;
