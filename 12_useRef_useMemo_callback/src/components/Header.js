import React, { memo } from "react"; /* ikinci kullanım için memo destruc yapıldı */
import cw from "../assets/cw_logo.png";

//? react.memo 3.kullanım
/* const Header = ({ img }) => {
  console.log("Header Rendered");
  return (
    <div className="header">
      <img
        src={img ? img : cw}
        alt="cw_logo"
        style={{ margin: "1rem", maxHeight: "200px" }}
      />
    </div>
  );
};
export default memo(Header); */

//? react.memo 2.kullanım
/* const Header = memo(({ img }) => {
  console.log("Header Rendered");
  return (
    <div className="header">
      <img
        src={img ? img : cw}
        alt="cw_logo"
        style={{ margin: "1rem", maxHeight: "200px" }}
      />
    </div>
  );
}); */

// react.memo 1.kullanım
const Header = React.memo(({ img }) => {
  console.log("Header Rendered");
  return (
    <div className="header">
      <img
        src={img ? img : cw}
        alt="cw_logo"
        style={{ margin: "1rem", maxHeight: "200px" }}
      />
    </div>
  );
});
export default  Header;
//? üçüncü kullanım. comp tamamen sarmallama sadece exportu sarmalla
