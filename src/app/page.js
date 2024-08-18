import Image from "next/image";
import styles from "./page.module.css";
import Group1 from "./component/group1/group1";
import Group2 from "./component/group2/group2";
import Group3 from "./component/group3/Group3";
import Group5 from "./component/group5/Group5";

export default function Home() {
  return (
    <>
    
      {/* <div className="container"> */}
        <Group1/>
        <Group2/>
        <Group3/>
        <Group5/>
      {/* </div> */}
    </>
  );
}
