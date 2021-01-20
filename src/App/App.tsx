import * as React from "react";

import styles from "./App.module.css";

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <img alt="logo" className={styles.logo} src="/logo.svg" />
      <p className={styles.text}>Lets get this party started</p>
    </div>
  );
};

export default App;
