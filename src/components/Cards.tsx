// mantine imports
import {
  createStyles,
  Card,
  Text,
  SimpleGrid,
  Anchor,
  Group,
  rem,
  Box,
  Title,
} from "@mantine/core";

// tabler svg icons import
import {
  // IconPdf,
  IconAlignLeft,
  IconFileText,
  IconArrowMerge,
  IconArrowsSplit2,
  IconFileX,
  IconJpg,
  IconInfoCircle,
} from "@tabler/icons-react";

// react-router-link import
import { Link } from "react-router-dom";

// layout import
import Layout from "./Layout";

const btnInfoAndPaths = [
  {
    title: "Multiline input to PDF",
    icon: IconAlignLeft,
    color: "violet",
    path: "/MultilineToPdf",
  },
  {
    title: "Text file to PDF",
    icon: IconFileText,
    color: "teal",
    path: "/TextFileToPdf",
  },
  {
    title: "Merge PDFs",
    icon: IconArrowMerge,
    color: "cyan",
    path: "/MergePdfs",
  },
  {
    title: "Split PDF",
    icon: IconArrowsSplit2,
    color: "yellow",
    path: "/SplitPdf",
  },
  {
    title: "Rempve PDF Pages",
    icon: IconFileX,
    color: "red",
    path: "/RemovePdfPages",
  },
  {
    title: "PDF to JPG",
    icon: IconJpg,
    color: "orange",
    path: "/PdfToJpg",
  },
  // {
  //   title: "Coming Soon",
  //   icon: IconInfoCircle,
  //   color: "pink",
  //   path: "#",
  // },
];

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  activeItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: theme.radius.md,
    height: rem(90),
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "all 0.05s ease-in",
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.05)",
    },

    "&:active": {
      transform: "scale(1)",
    },
  },

  disabledItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: theme.radius.md,
    height: rem(90),
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
  },
}));


export default function ActionsGrid() {
  const { classes, theme } = useStyles();

  const items = btnInfoAndPaths.map((item) => (
    <Link to={item.path} key={item.title} className={classes.activeItem}>
      <item.icon color={theme.colors[item.color][6]} size="2rem" />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </Link>
  ));

  return (
    <Layout>
      <Box mb={100}>
        <Title order={1} align="center">
          Welcome to PDFPal!
        </Title>
        <Title order={5} align="center">
          Your PDF Manipulation Tool
        </Title>
      </Box>
      <Card radius="md" className={classes.card}>
        <Group position="apart">
          <Text className={classes.title}>Services</Text>
          <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}></Anchor>
        </Group>
        <SimpleGrid cols={3} mt="md">
          {items}
          <Link to={"#"} key={"Coming Soon"} className={classes.disabledItem}>
            <IconInfoCircle color={theme.colors["gray"][6]} size="2rem" />
            <Text size="xs" mt={7} >
              {"Coming Soon"}
            </Text>
          </Link>

        </SimpleGrid>
      </Card>
    </Layout>
  );
}
