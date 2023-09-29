import React from "react";
import { Progress } from "antd";

import { CustomImage, Icon } from "src/components";

import { ImageThumbnailProps } from "./types";
import styles from "./styles.module.css";
import { LIST_COLOR } from "src/utils/constants";

function ImageThumbnail({
  url,
  alt,
  width,
  height,
  progress,
  lock,
}: ImageThumbnailProps) {
  const renderProgress = () => {
    return (
      <div className={styles.progress}>
        <Progress
          percent={75}
          showInfo={false}
          strokeColor="#ffd60a"
          trailColor="#000"
          strokeWidth={4}
          width={50}
        />
      </div>
    );
  };

  const renderLock = () => {
    return (
      <div className={styles.lock}>
        <Icon icon="lock" color={LIST_COLOR.COLOR_NEUTRAL} />
      </div>
    );
  };

  return (
    <div className={styles.chapter_image_wrapper}>
      <CustomImage url={url} alt={alt} width={width} height={height} />
      {progress && renderProgress()}
      {lock && !progress && renderLock()}
    </div>
  );
}

export default ImageThumbnail;
