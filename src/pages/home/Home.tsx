import { useLazyQuery } from "@apollo/client";
import moment from "moment";
import { ChangeEvent, useState } from "react";
import Card from "../../components/card/Card";
import CardList from "../../components/cardList/CardList";
import ListSection from "../../components/ListSection/ListSection";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import SideMenu from "../../components/sideMenu/SideMenu";
import useDebounce from "../../hooks/useDebounce";
import { SEARCH_REPOSITORIES, SEARCH_USERS } from "../../queries/queries";
import { CONSTANTS, formatNumber } from "../../utils/utils";
import Search from "../../components/search/Search";
import { useNavigate } from "react-router";

export type HomeProps = {};
export type CardNodeFormatProps = { node: CardFormatProps };
export type CardFormatProps = {
  bio?: string;
  description?: string;
  email?: string;
  licenseInfo?: { [key: string]: string };
  name: string;
  type: string;
  updatedAt: string;
};
function Home(props: HomeProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showCenteredSearch, setShowCenteredSearch] = useState(true);
  const [cardType, setCardType] = useState(CONSTANTS.CARD_TYPE_REPO);
  const debouncedSearch = useDebounce(searchTerm, 1000);
  const navigator = useNavigate();

  const [search, { loading: searchLoading, data: searchData }] = useLazyQuery(
    SEARCH_REPOSITORIES,
    {
      variables: { searchTerm: debouncedSearch },
    }
  );

  const [searchUsers, { loading: usersLoading, data: usersData }] =
    useLazyQuery(SEARCH_USERS, {
      variables: { searchTerm: debouncedSearch },
    });

  const searchRepoResults = searchData?.search?.edges ?? [];
  const searchUserResults = usersData?.search?.edges ?? [];

  const cardFormat = (data: CardNodeFormatProps) => {
    const { description, bio, email, licenseInfo, name, updatedAt } = data.node;
    return (
      <Card
        title={description || bio || ""}
        type={cardType}
        description={`${licenseInfo?.name || email} | ${moment(
          updatedAt
        ).fromNow()}`}
        header={name}
      />
    );
  };

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onClickSearch = (show = false) => {
    setShowCenteredSearch(show);
    if (cardType === CONSTANTS.CARD_TYPE_REPO) {
      search();
    } else {
      searchUsers();
    }
  };

  const onGetRepos = () => {
    setCardType(CONSTANTS.CARD_TYPE_REPO);
    search();
  };

  const onLogOut = () => {
    sessionStorage.removeItem(CONSTANTS.ACCESS_TOKEN);
    navigator("/");
  };

  const onSearchUsers = () => {
    setCardType(CONSTANTS.CARD_TYPE_USER);
    searchUsers();
  };

  return (
    <div>
      {showCenteredSearch ? (
        <Search
          searchTerm={searchTerm}
          onChangeSearch={onChangeSearch}
          onSearchButton={() => onClickSearch(false)}
        />
      ) : (
        <>
          <NavigationBar
            onSearchButton={() => onClickSearch(false)}
            searchTerm={searchTerm}
            onLogout={onLogOut}
            onSearch={onChangeSearch}
          />
          <ListSection>
            <SideMenu
              onClickRepos={onGetRepos}
              onClickUsers={onSearchUsers}
              userCount={usersData?.search?.userCount}
              repoCount={searchData?.search?.repositoryCount}
            />
            <CardList
              loading={
                cardType === CONSTANTS.CARD_TYPE_REPO
                  ? searchLoading
                  : usersLoading
              }
              paginated={
                cardType === CONSTANTS.CARD_TYPE_REPO
                  ? !!searchRepoResults?.length
                  : !!searchUserResults?.length
              }
              errorMessage={
                cardType === CONSTANTS.CARD_TYPE_REPO &&
                !!searchRepoResults?.length
                  ? "No Repositories"
                  : cardType === CONSTANTS.CARD_TYPE_USER &&
                    !!searchUserResults?.length
                  ? "No Users"
                  : ""
              }
              currentPage={1}
              totalPages={39}
              view={cardFormat}
              data={
                cardType === CONSTANTS.CARD_TYPE_REPO
                  ? searchRepoResults
                  : searchUserResults
              }
              title={
                cardType === CONSTANTS.CARD_TYPE_REPO
                  ? `${formatNumber(
                      searchData?.search?.repositoryCount || ""
                    )} repository results`
                  : `${formatNumber(
                      usersData?.search?.userCount || ""
                    )} users results`
              }
            />
          </ListSection>
        </>
      )}
    </div>
  );
}

export default Home;
