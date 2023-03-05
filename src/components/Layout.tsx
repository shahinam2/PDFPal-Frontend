import { Container, Box } from "@mantine/core";
import HeaderSimple from "../components/Header";
import FooterSocial from "../components/Footer";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
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
        <Box>{children}</Box>
        <FooterSocial />
      </Box>
    </Container>
  );
}
