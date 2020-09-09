import React from "react";
import { Avatar } from "@material-ui/core";

const SidebarRow = ({ title, Icon, src }) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />} {/* 若把 component 當成 props 傳遞時 需要大寫不然會出錯 */}
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarRow;
