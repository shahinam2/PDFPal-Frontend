// mantine imports
import { Dropzone, DropzoneProps } from "@mantine/dropzone";
import {
  Group,
  Text,
  useMantineTheme,
  rem,
  Box,
  Button,
  Title,
} from "@mantine/core";
import { IconUpload, IconAlignBoxLeftTop, IconX } from "@tabler/icons-react";

// react-router-link import
import { Link } from "react-router-dom";

// layout import
import Layout from "../components/Layout";

// To accept only .txt files
const MIME_TYPES = {
  txt: 'text/plain',
}
const TXT_MIME_TYPE = [MIME_TYPES.txt];

export default function TextFileToPdf(props: Partial<DropzoneProps>) {
  const theme = useMantineTheme();

  return (
    <Layout>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Title order={1} align="center">
          Text file to PDF Converter
        </Title>
        <Title order={3} align="center" mb={80}>
          Drop/Choose the text file you want to convert to PDF
        </Title>
      </Box>

      <Dropzone
        onDrop={(files) => console.log("accepted files", files)}
        onReject={(files) => console.log("rejected files", files)}
        maxSize={3 * 1024 ** 2}
        // accept={MS_WORD_MIME_TYPE}
        accept={TXT_MIME_TYPE}
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
            <IconAlignBoxLeftTop size="3.2rem" stroke={1.5} />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drop your Text file here or click to select your file
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              Please attach only one text file and it should be less than 5MB
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
