// mantine imports
import { createStyles, Header, Container, Group, Button } from "@mantine/core";

// react-router imports
import { Link } from "react-router-dom";

// logo imports
import DarkLogo from "../assets/logos/darkLogo.png";
import LightLogo from "../assets/logos/lightLogo.png";

// dark mode imports
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

interface HeaderSimpleProps {
  links?: { link: string; label: string }[];
}

export default function HeaderSimple({ links }: HeaderSimpleProps) {
  const { classes } = useStyles();

  // dark mode
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Header height={60}>
      <Container className={classes.header}>
        <div>
          {colorScheme === "dark" ? (
            <Link to={"/"}>
              <img src={DarkLogo} alt="Logo" style={{ width: 110 }} />
            </Link>
          ) : (
            <Link to={"/"}>
              <img src={LightLogo} alt="Logo" style={{ width: 110 }} />
            </Link>
          )}
        </div>
        <Group>
          <ActionIcon
            variant="outline"
            color={dark ? "yellow" : "blue"}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
          </ActionIcon>
          <Button variant="outline">Signup</Button>
          <Button variant="outline">Signin</Button>
        </Group>
      </Container>
    </Header>
  );
}
