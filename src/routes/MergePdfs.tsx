// mantine imports
import {
  Group,
  Text,
  useMantineTheme,
  rem,
  Box,
  Button,
  Title,
} from "@mantine/core";
import { IconUpload, IconBookUpload, IconX } from "@tabler/icons-react";
import { Dropzone, DropzoneProps, PDF_MIME_TYPE } from "@mantine/dropzone";

// react-router-link import
import { Link } from "react-router-dom";

// layout import
import Layout from "../components/Layout";

export default function MergePdfs(props: Partial<DropzoneProps>) {
  const theme = useMantineTheme();

  return (
    <Layout>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Title order={1} align="center">
          PDF Merger
        </Title>
        <Title order={3} align="center" mb={80}>
          Drop/Choose your PDF files to merge
        </Title>
      </Box>

      <Dropzone
        onDrop={(files) => console.log("accepted files", files)}
        onReject={(files) => console.log("rejected files", files)}
        maxSize={3 * 1024 ** 2}
        accept={PDF_MIME_TYPE}
        {...props}
      >
        <Group
          position="center"
          spacing="xl"
          style={{ minHeight: rem(220), pointerEvents: "none" }}
        >
          <Dropzone.Accept>
            <IconUpload
              size="3.2rem"
              stroke={1.5}
              color={
                theme.colors[theme.primaryColor][
                  theme.colorScheme === "dark" ? 4 : 6
                ]
              }
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              size="3.2rem"
              stroke={1.5}
              color={theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]}
            />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconBookUpload size="3.2rem" stroke={1.5} />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drop your PDF files here or click to select files
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              Attach as many PDF files as you like, each file should not exceed 5MB
            </Text>
          </div>
        </Group>
      </Dropzone>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link to={"/"}>
          <Button color="blue" size="md" mt={10}>
            Back
          </Button>
        </Link>
        <Button color="orange" size="md" mt={10}>
          Merge
        </Button>
      </Box>
    </Layout>
  );
}
