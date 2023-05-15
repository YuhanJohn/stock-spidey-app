import React from "react";
import styles from "./SyncButton.module.css";

export default function SyncButton(props) {
  const { actionFunc } = props;
  return (
    <div className={styles.main} onClick={() => actionFunc()}>
      <img src="../Sync.png" alt="sync" />
      同步
    </div>
  );
}
