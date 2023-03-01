import { ReactNode } from "react";
import { CenteredBox, CentralizedContainer } from "./styles";

interface CentralizedAndSideBySideProps {
  children: ReactNode;
}

const CentralizedAndSideBySide = ({
  children,
}: CentralizedAndSideBySideProps) => {
  return (
    <CentralizedContainer>
      <CenteredBox>{children}</CenteredBox>
    </CentralizedContainer>
  );
};

export default CentralizedAndSideBySide;
