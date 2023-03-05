import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import {
  Group,
  Text,
  useMantineTheme,
  rem,
  Box,
  Title,
  Button,
} from "@mantine/core";
import { IconUpload, IconBookUpload, IconX } from "@tabler/icons-react";
import { Dropzone, DropzoneProps, PDF_MIME_TYPE } from "@mantine/dropzone";

export default function SplitPdf(props: Partial<DropzoneProps>) {
  const theme = useMantineTheme();

  return (
    <Layout >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Title order={1} align="center">
          PDF Splitter
        </Title>
        <Title order={3} align="center" mb={80}>
          To split a PDF, drop/choose the PDF file you want in the drop zone
          below
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
            <IconBookUpload  size="3.2rem" stroke={1.5} />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag your PDF here or click to select your file
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              Attach only one file, your file should not exceed 5mb
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
          Split
        </Button>
      </Box>
    </Layout>
  );
}
