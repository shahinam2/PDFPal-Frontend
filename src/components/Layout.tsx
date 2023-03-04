
import { Container, Title, Box } from "@mantine/core";
import { HeaderSimple } from "../components/Header";
import FooterSocial from "../components/Footer";

interface Props {
    children: React.ReactNode;
    headerOne?: boolean;
    headerTwo?: string;
    removeHeaders?: boolean;
}

export default function Layout({children, headerOne, headerTwo, removeHeaders}: Props) {
  return (
    <Container size="md">
      {/* Width: {width}, height: {height} */}
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* <HeaderSimple links={[{ link: "about", label: "About Me" }]} /> */}
        <HeaderSimple />
        <Box sx={{display: removeHeaders ? "none" : ""}}>
          <Title order={1} align="center">
           {headerOne ? "Welcome to PDFPal!" : ""}
          </Title>
          <Title order={5} align="center">
            {headerTwo}
          </Title>
        </Box>

        <Box>{children}</Box>


        <FooterSocial />
      </Box>
    </Container>
  )
}
