import React, { useEffect } from "react";
import CopyJSCode from "../components/CopyJSCode";
import CodeCopy from "../components/CodeCopy";
import HomeUpload from "../components/HomeUpload";
import HorizentalScroll from "../components/HorizentalScroll";
import HorigentalScrollIcon from "../components/HorigentalScrollIcon";
import HoraizentalScrollButton from "../components/HoraizentalScrollButton";
import CopyCode from "../components/CopyCode";
import ProductList from "../components/ProductCard";
import ProductCardDesign from "../components/ProductCardDesign";
import DataDisplay from "../components/W3School";
import HtmlTopics from "../components/W3html";
import Item from "../components/Item";
import StartechNav from "../components/StartechNav";
import PdfConverter from "../components/PdfConverter";
import TextEditor from "../components/TextEditor";
import ImageMagnifierZoom from "../components/ImageMagnifierZoom";
import MyModal from "../components/MyModal";
import DragAndDrop from "../components/DragAndDrop";
import InputAndPreview from "../components/InputAndPreview";
import UserDashboard from "../components/UserDashboard";
import CustomScrollbarComponent from "../components/CustomeScrollbar/CustomScrollbar";
import Button from "../components/Button";
import MarqueeText from "./MarqueeText/MarqueeText";
import PDFView from "./PDF/PDFView";
import { PDFViewer } from "@react-pdf/renderer";
import PDFdownload from "./PDF/PDFdownload";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

function Home({ setProgress }) {
  Home.propTypes = {
    setProgress: PropTypes.func.isRequired,
  };
  useEffect(() => {
    setProgress(10);
    setProgress(30);
    setProgress(60);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Online Shopping in Bangladesh: Order Now from Daraz.com.bd
        </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <HorizentalScroll />
      <HorigentalScrollIcon />
      <HoraizentalScrollButton />
      <StartechNav />
      <MarqueeText />
      <PDFViewer>
        <PDFView />
      </PDFViewer>
      <PDFdownload />

      <Button />
      <CustomScrollbarComponent />
      <PdfConverter />
      <DragAndDrop />
      <InputAndPreview />
      <UserDashboard />

      <CopyJSCode />
      <TextEditor />
      <ImageMagnifierZoom />
      <MyModal />
      <CodeCopy />
      <CopyCode />
      <HomeUpload />

      <ProductList />
      <ProductCardDesign />
      <DataDisplay />
      <HtmlTopics />
      <Item />
    </>
  );
}

export default Home;
