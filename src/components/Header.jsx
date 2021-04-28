import React from "react";
import "./Header.scss";
import { moneyFormat } from "./../helpers";

const Header = ({ money, total }) => {
  return (
    <>
      <div>
        {total > 0 && money - total !== 0 && (
          <div>Harcayacak {moneyFormat(money - total)} TL kaldı</div>
        )}
        {total === 0 && (
          <div>Harcamak için {moneyFormat(money - total)} TL paranız var</div>
        )}
        {money - total === 0 && <div>Paran bitti</div>}
      </div>
    </>
  );
};

export default Header;
