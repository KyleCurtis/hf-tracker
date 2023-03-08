import { Card, Title, AreaChart, Flex, Text } from "@tremor/react";

const Hero = ({ Heading, Window, HeroBody }: any) => {
  return (
    <div className="border-solid border-l-2 border-r-2 border-black dark:border-white rounded-xl max-w-[600px] text-center m-auto p-5">
      <br />

      <Card maxWidth="max-w-lg">
        <Flex>
          <div>
            <div className="!border-2 !border-black !border-solid rounded-full overflow-hidden">
              {Window}
            </div>
          </div>
          <div>
            <h1 className="text-[24px]">{Heading}</h1>
<<<<<<< HEAD
            <div>{HeroBody}</div>
=======
            <p>{HeroBody}</p>
>>>>>>> c585eaca95a86df794aa225c627fb86fd7ed0b9a
          </div>
        </Flex>
      </Card>
    </div>
  );
};

export default Hero;
