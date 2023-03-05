import Layout from "../components/Layout";
import {
  Group,
  Text,
  useMantineTheme,
  rem,
  Box,
  Title,
  Button,
} from "@mantine/core";
import { IconUpload, IconCloudUpload, IconX } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";

export default function JpgToPdf(props: Partial<DropzoneProps>) {
  const theme = useMantineTheme();

  return (
    <Layout removeHeaders>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Title order={1} align="center">
          PDF to JPG Converter
        </Title>
        <Title order={3} align="center" mb={80}>
          Drop/Choose the PDF file you want to convert to JPG
        </Title>
      </Box>

      <Dropzone
        onDrop={(files) => console.log("accepted files", files)}
        onReject={(files) => console.log("rejected files", files)}
        maxSize={3 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
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
            <IconCloudUpload size="3.2rem" stroke={1.5} />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag Your PDF file here or click to select your file
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              Attach only one files, your file should not exceed 5mb
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
          Convert
        </Button>
      </Box>
    </Layout>
  );
}
