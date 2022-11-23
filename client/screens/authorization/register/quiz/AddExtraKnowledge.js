import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Input from "../../../../components/basic/Input";
import MultySelect from "../../../../components/basic/MultySelect";
import Select from "../../../../components/basic/Select";
import Select1 from "../../../../components/basic/Select1";
import UIButton from "../../../../components/basic/UIButton";
import QuizTemplate from "../../../../components/templates/QuizTemplate";
import tw from "../../../../utils/config/tailwindConf";
import AddTechMonth from "./AddTechMonth";
import AddTime from "./AddTime";

const AddExtraKnowledge = () => {
  const [data, setData] = useState({});
  const DataList = [
    'c',
    'c++',
    'c#',
    'go',
    'java',
    'javascript',
    'typescript',
    'ruby',
    'rust',
    'vuejs',
    'react',
    'svelte',
    'bootstrap',
    'angular',
    'html',
    'css',
    'redux',
    'sass',
    'tailwind',
    'mui',
    'nodejs',
    'express',
    'spring',
    'graphql',
    'nestjs',
    'flask',
    'android',
    'react-native',
    'flutter',
    'tensorflow',
    'pytorch',
    'pandas',
    'mongodb',
    'mysql',
    'postgresql',
    'redis',
    'cassandra',
    'hive',
    '.net',
    'django',
    'electron',
    'rails',
    'jest',
    'cypress',
    'selenium',
    'mocha',
    'puppeteer',
    'karma',
    'jasmine',
    'postman',
    'c',
    'c++',
    `c#`,
    'go',
    'java',
    'javascript',
    'typescript',
    'ruby',
    'rust',
    'vuejs',
    'react',
    'svelte',
    'bootstrap',
    'angular',
    'html',
    'css',
    'redux',
    'sass',
    'tailwind',
    'mui',
    'nodejs',
    'express',
    'spring',
    'graphql',
    'nestjs',
    'flask',
    'android',
    'react-native',
    'flutter',
    'tensorflow',
    'pytorch',
    'pandas',
    'mongodb',
    'mysql',
    'postgresql',
    'redis',
    'cassandra',
    'hive',
    '.net',
    'django',
    'electron',
    'rails',
    'gcp',
    'bash',
    'aws',
    'docker',
    'jenkins',
    'kubernetes',
    'azure',
    'firebase',
    'jest',
    'cypress',
    'selenium',
    'mocha',
    'puppeteer',
    'karma',
    'jasmine',
    'postman',
  ]

  const selectArray= DataList.map((e)=>{return {item: e, id: e}})


  return (
    <View style={tw`w-full h-full`}>
      <QuizTemplate
        Title={"What is your technological knowledge?"}
        Property="tech"
        data={data}
        navigateTo={AddTechMonth}
        elements={
          <MultySelect
            SelectSemiTitle={"skills"}
            SelectTitle={"Chose your knowledge"}
            array={selectArray}
            setData={(e) => setData(e)}
            height="20"
            placeholder="profession"
            border="2"
            rounded_border="lg"
          />
        }
        // elements={
        //   <>
        //     <View style={tw`w-full h-12 bg-gray-300 rounded-full `}>
        //       {selectArray.map((item, inde) => {
        //         return <View></View>
        //       })}
        //     </View>

        //     {inputData.map((item, index) => {
        //       return (
        //         <View key={index}>
        //           <Select1
        //             array={selectArray}
        //             setData={(e) => {
        //               const newInputData = inputData
        //               newInputData[index].tech = e
        //               setInputData([...newInputData])
        //             }}
        //             height="20"
        //             placeholder={inputData[index].tech}
        //             border="2"
        //             rounded_border="lg"
        //           />
        //           <Input
        //             setData={(e) => {
        //               const newInputData = inputData
        //               newInputData[index].time = e
        //               setInputData([...newInputData])
        //             }}
        //             height="20"
        //             placeholder={item.time.toString()}
        //             border="2"
        //             rounded_border="lg"
        //           />
        //         </View>
        //       )
        //     })}
        //     <UIButton
        //       onPress={() => {
        //         setInputData([...inputData, { tech: '', time: 0 }])
        //       }}
        //       padding="1"
        //       color="secondary"
        //       text="add tech"
        //       textColor="red-700"
        //       textSize="2xl"
        //       rounded="3xl"
        //     />
        //   </>
        // }
      />
    </View>
  );
};

export default AddExtraKnowledge;

{
  // const technolagies = [{technolage:'nodejs',time:12},{technolage:'c#',time:6}]
  // tech={}
  // for (const item of technolagies) {
  //   user.tech[item.technolage] = item.time
  // }
  // tech={nodejs:12 , c#:6}
}
