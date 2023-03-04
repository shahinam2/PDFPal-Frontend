import {
  createStyles,
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Anchor,
  Group,
  rem,
} from "@mantine/core";
import {
  IconPdf,
  IconFileText,
  IconArrowMerge,
  IconArrowsSplit2,
  IconFileX,
  IconJpg,
  IconInfoCircle,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const mockdata = [
  {
    title: "Multiline input to PDF",
    icon: IconPdf,
    color: "violet",
    path: "/MultilineToPdf",
  },
  {
    title: "Text file to PDF",
    icon: IconFileText,
    color: "indigo",
  },
  { title: "Merge PDFs", icon: IconArrowMerge, color: "blue" },
  { title: "Split PDF", icon: IconArrowsSplit2, color: "green" },
  { title: "Rempve PDF Pages", icon: IconFileX, color: "teal" },
  { title: "PDF to JPG", icon: IconJpg, color: "cyan" },
  { title: "Coming Soon", icon: IconInfoCircle, color: "pink" },
  // { title: "Payments", icon: IconCoin, color: "red" },
  // { title: "Cashback", icon: IconCashBanknote, color: "orange" },
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

  item: {
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

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.05)",
    },

    "&:active": {
      transform: "scale(1)",
    },
  },
}));

export default function ActionsGrid() {
  const { classes, theme } = useStyles();
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  const items = mockdata.map((item) => (
    <UnstyledButton
      key={item.title}
      className={classes.item}
      onClick={() => item.path && handleClick(item.path)}
    >
      <item.icon color={theme.colors[item.color][6]} size="2rem" />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card
      // withBorder
      radius="md"
      className={classes.card}
    >
      <Group position="apart">
        <Text className={classes.title}>Services</Text>
        <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}></Anchor>
      </Group>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}
