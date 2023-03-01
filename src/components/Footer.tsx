import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  Code,
  Text,
} from "@mantine/core";
import {
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandInstagram,
} from "@tabler/icons";
import { IconHeartFilled } from "@tabler/icons-react";
// import { MantineLogo } from "@mantine/ds";

const useStyles = createStyles((theme) => ({
  footer: {
    // marginTop: 120,
    // marginTop: 10,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function FooterSocial() {
  const { classes } = useStyles();
  const openInNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        <Text sx={{ display: "flex", alignItems: "center", gap: "3px" }}>
          Made with <IconHeartFilled size={15} color="blue" /> in BHH
        </Text>
        <Code sx={{ fontWeight: 700 }}>Version v0.1</Code>

        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon
            size="lg"
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/shahin-hemmati/")
            }
          >
            <IconBrandLinkedin size={18} stroke={1.5} />
          </ActionIcon>

          <ActionIcon
            size="lg"
            onClick={() => openInNewTab("https://twitter.com/cl0udfriendly")}
          >
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>

          <ActionIcon
            size="lg"
            onClick={() =>
              openInNewTab("https://www.instagram.com/cl0udfriendly/")
            }
          >
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
