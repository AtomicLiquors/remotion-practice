import styled from "styled-components";
import { SingleMessageApiResponse } from "./types"


const Container = styled.div`
  font-size: 45px;
  line-height: 1.3;
  margin-left: 100px;
  margin-right: 100px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 50px;
  margin-top: 50px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Message: React.FC<{
  data: SingleMessageApiResponse
}> = ({data}) => {
  return (
    <Container>
      <Row>
      <div>
      items</div>
      </Row>
      </Container>
  )
}