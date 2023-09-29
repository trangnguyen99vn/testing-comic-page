import React from "react";
import Image from "next/image";

import { CustomImageProps } from "./types";
import styles from "./styles.module.css";

function CustomImage({ url, alt, width, height }: CustomImageProps) {
  return (
    <div className={styles.image_wrapper}>
      <Image src={url} alt={alt} width={width} height={height} />
    </div>
  );
}

export default CustomImage;
