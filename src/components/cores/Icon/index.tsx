import React from "react";
import IcomoonReact from "icomoon-react";
import iconSet from "public/fonts/selection.json";
import { IconProps } from "./types";
import styles from "./styles.module.css";

import { LIST_COLOR, LIST_FONT_SIZE } from "src/utils/constants";

export default function Icon({
  size,
  icon,
  style,
  border = false,
  color,
}: IconProps) {
  const renderIcon = () => {
    return (
      <IcomoonReact
        iconSet={iconSet}
        color={color}
        size={size || LIST_FONT_SIZE.FONT_SIZE_16}
        icon={icon}
      />
    );
  };

  if (border) {
    return (
      <div className={styles.icon_wrapper} style={style}>
        {renderIcon()}
      </div>
    );
  }

  return renderIcon();
}
