import React from 'react';
import {HStack, Skeleton, VStack} from 'native-base';
import createStyle from './styles';

const SkeletonTemplate = () => {
  const styles = createStyle();

  return (
    <HStack maxW="400" space={8} p={4} my={2} style={styles.skeletonWrapper}>
      <Skeleton flex="1" h="150" rounded="md" startColor="coolGray.700" />
      <VStack flex="3" space="4">
        <Skeleton startColor="coolGray.700" />
        <Skeleton.Text startColor="coolGray.700" />
        <HStack space="2" alignItems="center">
          <Skeleton h="3" startColor="coolGray.700" rounded="full" />
        </HStack>
      </VStack>
    </HStack>
  );
};

const ListEmptySkeleton: React.FC = () => {
  return (
    <>
      <SkeletonTemplate />
      <SkeletonTemplate />
      <SkeletonTemplate />
      <SkeletonTemplate />
      <SkeletonTemplate />
    </>
  );
};

export default ListEmptySkeleton;
