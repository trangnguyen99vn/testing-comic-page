import React from "react";
import { CustomImage } from "src/components";

import { CommentAvatarProps } from "./types";
import styles from "./styles.module.css";

function CommentAvatar({ avatar, name, width, height }: CommentAvatarProps) {
  return (
    <div className={styles.comment_avatar}>
      <CustomImage
        url={avatar}
        alt={name}
        width={width || 32}
        height={height || 32}
      />
    </div>
  );
}

export default CommentAvatar;
