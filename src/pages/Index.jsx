import { Box, Heading, Text, Button, Image, Input, Stack, Grid, GridItem } from "@chakra-ui/react";
import { FaSearch, FaUser, FaBriefcase, FaBuilding } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [userType, setUserType] = useState(null);

  return (
    <Box p={8}>
      <Heading as="h1" size="2xl" mb={8}>
        직업소개소 플랫폼
      </Heading>

      {/* 사용자 유형 선택 */}
      {!userType && (
        <Grid templateColumns="repeat(2, 1fr)" gap={8} mb={16}>
          <GridItem>
            <Stack align="center" p={8} borderWidth={1} borderRadius="lg" _hover={{ shadow: "md", cursor: "pointer" }} onClick={() => setUserType("jobSeeker")}>
              <FaUser size={48} />
              <Heading size="lg">구직자</Heading>
              <Text>일자리를 찾고 계신가요?</Text>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack align="center" p={8} borderWidth={1} borderRadius="lg" _hover={{ shadow: "md", cursor: "pointer" }} onClick={() => setUserType("employer")}>
              <FaBuilding size={48} />
              <Heading size="lg">구인자</Heading>
              <Text>인재를 찾고 계신가요?</Text>
            </Stack>
          </GridItem>
        </Grid>
      )}

      {/* 구직자용 화면 */}
      {userType === "jobSeeker" && (
        <Box>
          <Heading size="xl" mb={8}>
            <FaSearch /> 채용공고 검색
          </Heading>
          <Stack spacing={4} mb={8}>
            <Input placeholder="검색어를 입력하세요" size="lg" />
            <Button colorScheme="blue" size="lg">
              검색
            </Button>
          </Stack>
          <Image src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqb2IlMjBzZWFyY2h8ZW58MHx8fHwxNzEzMTA2MjA2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="구직활동" mb={8} />
          <Heading size="lg" mb={4}>
            추천공고
          </Heading>
          {/* 추천 채용공고 목록 */}
        </Box>
      )}

      {/* 구인자용 화면 */}
      {userType === "employer" && (
        <Box>
          <Heading size="xl" mb={8}>
            <FaBriefcase /> 채용공고 등록
          </Heading>
          <Stack spacing={4} mb={8}>
            <Input placeholder="회사명" size="lg" />
            <Input placeholder="채용포지션" size="lg" />
            <Input placeholder="자격요건" size="lg" />
            <Button colorScheme="blue" size="lg">
              공고등록
            </Button>
          </Stack>
          <Image src="https://images.unsplash.com/photo-1459499362902-55a20553e082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqb2IlMjBpbnRlcnZpZXd8ZW58MHx8fHwxNzEzMTA2MjA2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="구인활동" mb={8} />
          <Heading size="lg" mb={4}>
            진행중인 채용
          </Heading>
          {/* 진행중 채용공고 목록 */}
        </Box>
      )}
    </Box>
  );
};

export default Index;
