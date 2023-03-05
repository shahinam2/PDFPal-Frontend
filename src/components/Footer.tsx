// mantine imports
import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  rem,
  Text,
  Code,
} from "@mantine/core";
import {
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandInstagram,
} from "@tabler/icons-react";

// svg import
import { IconHeartFilled } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
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

export default function FooterSocial() {
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
          <ActionIcon size="lg">
            <IconBrandLinkedin
              size="1.05rem"
              stroke={1.5}
              onClick={() =>
                openInNewTab("https://www.linkedin.com/in/shahin-hemmati/")
              }
            />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandTwitter
              size="1.05rem"
              stroke={1.5}
              onClick={() => openInNewTab("https://twitter.com/cl0udfriendly")}
            />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram
              size="1.05rem"
              stroke={1.5}
              onClick={() =>
                openInNewTab("https://www.instagram.com/cl0udfriendly/")
              }
            />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
