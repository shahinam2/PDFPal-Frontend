import { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  // Burger,
  Button,
  // Image,
} from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
// import { MantineLogo } from "@mantine/ds";
import DarkLogo from "../assets/logos/darkLogo.png";
import LightLogo from "../assets/logos/lightLogo.png";
// dark mode
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

  // burger: {
  //   [theme.fn.largerThan("xs")]: {
  //     display: "none",
  //   },
  // },

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
  links: { link: string; label: string }[];
}

// const links = [
//   { link: "#", label: "Home" },
//   { link: "#", label: "Features" },
//   { link: "#", label: "Pricing" },
// ];

export function HeaderSimple({ links }: HeaderSimpleProps) {
  // const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  // const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // dark mode
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={60}>
      <Container className={classes.header}>
        {/* <MantineLogo size={28} /> */}
        {/* <DarkLogo size={28} /> */}
        <div>
          {colorScheme === "dark" ? (
            <img src={DarkLogo} alt="Logo" style={{ width: 110 }} />
          ) : (
            <img src={LightLogo} alt="Logo" style={{ width: 110 }} />
          )}
        </div>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        {/* <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        /> */}
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
        {/* dark mode */}
      </Container>
    </Header>
  );
}
