import { Box, Title, Textarea, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function MultilineToPdf() {
  return (
    <Layout >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Title order={1} align="center" >
          Multiline Text to PDF Converter
        </Title>
        <Title order={3} align="center" mb={80}>
          Write your text in the text area below and click the convert button
        </Title>

        <Textarea placeholder="Write your text here. As you type the box will grow in size." label="Text area" autosize />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link to={"/"}>
          <Button color="blue" size="md" mt={10}>
            Back
          </Button>
        </Link>
        <Button color="orange" size="md" mt={10}>
          Convert
        </Button>
      </Box>
      
    </Layout>
  );
}
