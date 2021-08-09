import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {/* if there is source then show avatar component */}
      {src && <Avatar src={src} />}
      {/* if there is icon */}
      {Icon && <Icon />}

      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
