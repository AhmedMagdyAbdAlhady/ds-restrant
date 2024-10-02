
import Image from "next/image";
import styles from "./page.module.css";
import Group1 from "./component/group1/group1";
import Group2 from "./component/group2/group2";
import Group3 from "./component/group3/Group3";
import Group4 from "./component/group4/Group4";
import Group5 from "./component/group5/Group5";
import Group6 from "./component/group6/Group6";

export default function Home() {
  return (
    <>
    
      {/* <div className="container"> */}
        <Group1/>
        <Group2/>
        <Group3/>
        <Group4/>
        <Group5/>
        <Group6/>
      {/* </div> */}
    </>
  );
}
