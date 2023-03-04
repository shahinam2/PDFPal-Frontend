// import React from "react";
import { Box, Title, Textarea, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function MultilineToPdf() {
  return (
    <Layout removeHeaders>
      <Box sx={{display: "flex", flexDirection: "column"}}>
        <Title order={1} align="center">
          Multiline to PDF Converter
        </Title>
        <Title order={3} align="center">
          Write your text in the text area below and click the convert button.
        </Title>

        <Textarea placeholder="Your text here" label="Text area" autosize />

        <Button color="orange" size="md" mt={10}>
          Convert
        </Button>

        <Link to={"/"}>
          <Button color="orange" size="md" mt={10}>
            back
          </Button>
        </Link>
      </Box>
    </Layout>
  );
}
