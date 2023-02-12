import Icon from "components/AppIcon/AppIcon";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./appsearchbar.module.scss";

const AppSearchBar = ({ className = "" }) => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    const inputTrimed = searchValue.trim();

    if (!inputTrimed.length) return;

    if (!location.pathname.includes("search")) {
      return navigate(`/article/search?input=${inputTrimed}`);
    }

    router.query.input = inputTrimed;

    router.replace({
      query: { input: inputTrimed }
    });
  };
  return (
    <form
      className={`${className} ${styles.container}`}
      onSubmit={handleSearch}
    >
      <label>
        <Icon icon="search" size={19} role="button" type="submit" />
        <input
          name="search"
          id="search"
          type="text"
          placeholder="Search here..."
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </label>
    </form>
  );
};

AppSearchBar.propTypes = {
  className: PropTypes.string
};

export default AppSearchBar;
