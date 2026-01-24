"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { projects } from "../data";

export default function PortfolioProjects() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Stack spacing={3}>
        <Typography
          variant="h3"
          sx={{
            textTransform: "uppercase",
            fontWeight: 700,
            letterSpacing: "0.1em",
          }}
        >
          Photo archive
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
            gap: 2,
          }}
        >
          {projects.map((project) => (
            <Box key={project.id}>
              <Box
                sx={{
                  border: "3px solid #0b0b0b",
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  aspectRatio: "3/4",
                  boxShadow: "8px 8px 0 #0b0b0b",
                }}
              />
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="baseline"
                sx={{ mt: 1.5 }}
              >
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ textTransform: "uppercase", letterSpacing: "0.12em" }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ textTransform: "uppercase", letterSpacing: "0.2em" }}
                  >
                    {project.location}
                  </Typography>
                </Box>
                <Typography
                  variant="caption"
                  sx={{ textTransform: "uppercase", letterSpacing: "0.2em" }}
                >
                  {project.id}
                </Typography>
              </Stack>
            </Box>
          ))}
        </Box>
      </Stack>
    </Container>
  );
}
