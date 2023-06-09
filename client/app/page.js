"use client";
import styles from "@styles/main.css";
import { Row, Container, Col, Stack } from "react-bootstrap";
import MainContainer from "@components/MainContainer";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  return (
    <>
      <Row className=" pe-3 vh-100 overflow-hidden  g-0">
        <MainContainer />
        <ToastContainer />
      </Row>
    </>
  );
}
