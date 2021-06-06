import React from "react";
import "./Header.scss";
import { moneyFormat } from "./../helpers";

const Header = ({ money, total }) => {
  return (
    <>
      <div>
        {total > 0 && money - total !== 0 && (
          <div className="money-spend">Harcayacak <span>{moneyFormat(money - total)}</span> TL kaldı</div>
        )}
        {total === 0 && (
          <div className="money-spend">Harcamak için <span>{moneyFormat(money - total)}</span> TL paranız var</div>
        )}
        {money - total === 0 && <div className="money-spend">Paran bitti</div>}
      </div>
    </>
  );
};

export default Header;
