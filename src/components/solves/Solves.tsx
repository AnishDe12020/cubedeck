import { Box } from "@chakra-ui/react";
import React from "react";
import { Session } from "../../types";
import { SessionRenderer } from "../sessions/SessionRenderer";
import { CreateSolve } from "./CreateSolve";
import { SolvesRenderer } from "./SolvesRenderer";

interface SolvesProps {
  session: Session;
}

export const Solves: React.FC<SolvesProps> = ({ session }) => {
  return (
    <Box pl="5%" pt="5%">
      {/* <CreateSolve session={session} /> */}
      <CreateSolve session={session} />
      <SolvesRenderer session={session} />
    </Box>
  );
};
