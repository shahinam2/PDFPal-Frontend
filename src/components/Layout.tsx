import { Container, Title, Box } from "@mantine/core";
import HeaderSimple from "../components/Header";
import FooterSocial from "../components/Footer";

interface Props {
  children: React.ReactNode;
  headerOne?: boolean;
  headerTwo?: boolean;
  removeHeaders?: boolean;
}

export default function Layout({
  children,
  headerOne,
  headerTwo,
  removeHeaders,
}: Props) {
  return (
    <Container size="md">
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <HeaderSimple />
        <Box sx={{ display: removeHeaders ? "none" : "" }}>
          <Title order={1} align="center">
            {headerOne ? "Welcome to PDFPal!" : ""}
          </Title>
          <Title order={5} align="center">
            {headerTwo ? "Your PDF Manipulation Tool" : ""}
          </Title>
        </Box>

        <Box>{children}</Box>

        <FooterSocial />
      </Box>
    </Container>
  );
}
