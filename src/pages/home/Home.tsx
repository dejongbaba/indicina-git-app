import moment from "moment";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card/Card";
import CardList from "../../components/cardList/CardList";
import ListSection from "../../components/ListSection/ListSection";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import SideMenu from "../../components/sideMenu/SideMenu";
import { getUsers } from "../../features/users/usersSlice";
import useDebounce from "../../hooks/useDebounce";
import ApiService from "../../services/apiService/ApiService";
import RepoService from "../../services/repoService/RepoService";
import { formatNumber, getToken } from "../../utils/utils";

/* 
TODO 
 work work on test for the pages
 work on dispatching the api's with slices for the features 
 work on ui modifications



*/
type HomeProps = {};
type DataProps = { search?: { [key: string]: any }; repositoryCount: number };
function Home(props: HomeProps) {
  const [search, setSearch] = useState("");
  const [data, setData]: any = useState([]);
  const dispatch = useDispatch();
  const { users } = useSelector((state: any) => state.users);
  console.log("====================================");
  console.log("users", users);
  console.log("====================================");
  const debouncedSearch = useDebounce(search, 1000);
  useEffect(() => {
    ApiService.init(process.env.REACT_APP_GRAPH_QL_URI ?? "");
    ApiService.setHeader(getToken() ?? "");
    if (debouncedSearch) {
      dispatch(RepoService.search(debouncedSearch));
      // dispatch(RepoService.search(debouncedSearch));
      // .then((res: any) => {
      //   console.log("res in repo", res);
      //   setData(res?.user?.repositories);
      // })
      // .catch((e: Error) => {
      //   console.error(e);
      // });
    } else {
      dispatch(getUsers());
      // dispatch(RepoService.getAllRepositories());
      // .then((res: any) => {
      //   console.log("res in repo", res);
      //   setData(res?.user?.repositories);
      // })
      // .catch((e: Error) => {
      //   console.error(e);
      // });
    }
  }, [debouncedSearch]);

  const cardFormat = (data: any) => {
    return (
      <Card
        title={data?.url}
        type={"repo"}
        description={`${data?.description} | ${moment(
          data?.updatedAt
        ).fromNow()}`}
        header={data?.name}
      />
    );
  };

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const Repos = [
    {
      title: "Telegram for Android source",
      description: "17.2k Stars | Java | GPL-2.0 License | Updated 4 hours ago",
      header: "DrKLO/Telegram",
    },
    {
      title: "Telegram for Android source",
      description: "17.2k Stars | Java | GPL-2.0 License | Updated 4 hours ago",
      header: "DrKLO/Telegram",
    },
    {
      title: "Telegram for Android source",
      description: "17.2k Stars | Java | GPL-2.0 License | Updated 4 hours ago",
      header: "DrKLO/Telegram",
    },
    {
      title: "Telegram for Android source",
      description: "17.2k Stars | Java | GPL-2.0 License | Updated 4 hours ago",
      header: "DrKLO/Telegram",
    },
    {
      title: "Telegram for Android source",
      description: "17.2k Stars | Java | GPL-2.0 License | Updated 4 hours ago",
      header: "DrKLO/Telegram",
    },
    {
      title: "Telegram for Android source",
      description: "17.2k Stars | Java | GPL-2.0 License | Updated 4 hours ago",
      header: "DrKLO/Telegram",
    },
    {
      title: "Telegram for Android source",
      description: "17.2k Stars | Java | GPL-2.0 License | Updated 4 hours ago",
      header: "DrKLO/Telegram",
    },
  ];
  return (
    <div>
      <NavigationBar onSearch={onSearch} />
      <ListSection>
        <SideMenu />
        <CardList
          paginated={!!data?.length}
          currentPage={1}
          totalPages={39}
          view={cardFormat}
          data={data?.nodes}
          title={`${formatNumber(data?.totalCount || "")} repository results`}
        />
      </ListSection>
    </div>
  );
}

export default Home;
